"use client";

import { useProducts } from "@/Context/ProductsContext";
import Header from "./panel_components/header";
import { useEffect, useState } from "react";
import { ProductDraft, DiscountDraft } from "./panel_components/draftData";
import { createClient } from "@/lib/supabase/client";

const inputClassName =
    "w-full rounded-lg border border-white/10 bg-[#0F1115] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50]";

const labelClassName =
    "flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400";

const Panel = () => {
    const { products, refresh } = useProducts();
    const [hasChanged, setHasChanged] = useState(false);
    const [drafts, setDrafts] = useState<Record<string, ProductDraft>>({});

    useEffect(() => {
        setDrafts(
            Object.fromEntries(
                products.map(p => [
                    String(p.id),
                    {
                        name: p.name,
                        basePrice: p.basePrice,
                        inStock: p.inStock,
                        image: p.image,
                        discounts: p.discounts.map(d => ({
                            id: d.id,
                            quantity: d.quantity,
                            price: d.price,
                            freeQuantity: d.freeQuantity,
                            shipping: d.shipping
                        }))
                    }
                ])
            )
        )
    }, [products]);

    const updateDraft = (draftId: string, changes: Partial<ProductDraft>) => {
        setDrafts(prev => ({
            ...prev,
            [draftId]: {
                ...prev[draftId],
                ...changes,
            },
        }));
        setHasChanged(true);
    };

    const addProduct = () => {
        const tempId = `new-${Date.now()}`;   // unikaten ključ
        setDrafts(prev => ({
            ...prev,
            [tempId]: {
                _tempId: tempId,
                name: "Nov produkt",
                basePrice: 0,
                inStock: true,
                image: "",
                discounts: [],
            },
        }));
        setHasChanged(true);
    };

    const deleteProduct = (draftId: string) => {
        setDrafts(prev => {
            const next = { ...prev };
            delete next[draftId];
            return next;
        });
        setHasChanged(true);
    };

    const updateDiscount = (
        draftId: string,
        discountIndex: number,
        changes: Partial<DiscountDraft>
    ) => {
        setDrafts(prev => ({
            ...prev,
            [draftId]: {
                ...prev[draftId],
                discounts: prev[draftId].discounts.map((d, i) =>
                    i === discountIndex ? { ...d, ...changes } : d
                ),
            },
        }));
        setHasChanged(true);
    };

    const addDiscount = (draftId: string) => {
        setDrafts(prev => ({
            ...prev,
            [draftId]: {
                ...prev[draftId],
                discounts: [
                    ...prev[draftId].discounts,
                    { quantity: 1, price: 0 },
                ],
            },
        }));
        setHasChanged(true);
    };

    const removeDiscount = (draftId: string, discountIndex: number) => {
        setDrafts(prev => ({
            ...prev,
            [draftId]: {
                ...prev[draftId],
                discounts: prev[draftId].discounts.filter((_, i) => i !== discountIndex),
            },
        }));
        setHasChanged(true);
    };

    async function saveChanges() {
        const supabase = createClient();

        // 1) UPSERT PRODUKTOV (obstoječi + novi)
        //    Shrani mapping: draftId -> pravi productId
        const idMap = new Map<string, number>();

        for (const [draftId, draft] of Object.entries(drafts)) {
            const existing = products.find(p => String(p.id) === draftId);

            const { data, error } = await supabase
                .from("products")
                .upsert(
                    {
                        ...(existing && { id: existing.id }),
                        name: draft.name,
                        price: draft.basePrice,
                        in_stock: draft.inStock,
                        img: draft.image,
                    },
                    { onConflict: "id" }
                )
                .select("id")
                .single();

            if (error) {
                console.error("Napaka pri produktu:", draft.name, error);
                return;
            }

            idMap.set(draftId, data.id);
        }

        // 2) UPSERT DISCOUNTOV za vsak produkt
        //    + pobriši discounte, ki so bili prej, pa jih ni več
        for (const [draftId, draft] of Object.entries(drafts)) {
            const productId = idMap.get(draftId);
            if (productId === undefined) continue;

            // 2a) Upsert discountov, ki so v draftu
            const discountRows = draft.discounts.map(d => ({
                ...(d.id !== undefined && { id: d.id }),
                quantity: d.quantity,
                price: d.price,
                free_quantity: d.freeQuantity ?? null,
                shipping: d.shipping ?? null,
                product_id: productId,
            }));

            if (discountRows.length > 0) {
                const { error } = await supabase
                    .from("discounts")
                    .upsert(discountRows, { onConflict: "id" });

                if (error) {
                    console.error("Napaka pri discountih:", error);
                    return;
                }
            }

            // 2b) Pobriši discounte, ki so bili prej v bazi, pa jih ni več v draftu
            const existingProduct = products.find(p => String(p.id) === draftId);
            const previousDiscountIds = existingProduct?.discounts.map(d => d.id) ?? [];
            const currentDiscountIds = new Set(
                draft.discounts.map(d => d.id).filter((id): id is number => id !== undefined)
            );
            const discountsToDelete = previousDiscountIds.filter(
                id => !currentDiscountIds.has(id)
            );

            if (discountsToDelete.length > 0) {
                const { error } = await supabase
                    .from("discounts")
                    .delete()
                    .in("id", discountsToDelete);

                if (error) {
                    console.error("Napaka pri brisanju discountov:", error);
                    return;
                }
            }
        }

        // 3) POBRIŠI PRODUKTE, ki so bili prej, pa jih ni več v draftih
        const draftIds = new Set(Object.keys(drafts));
        const productsToDelete = products
            .filter(p => !draftIds.has(String(p.id)))
            .map(p => p.id);

        if (productsToDelete.length > 0) {
            const { error } = await supabase
                .from("products")
                .delete()
                .in("id", productsToDelete);

            if (error) {
                console.error("Napaka pri brisanju produktov:", error);
                return;
            }
        }

        // 4) PONOVNO NALOŽI IZ BAZE
        await refresh();
    }

    return (
        <div
            className="min-h-screen bg-[#0F1115] font-sans text-white"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
            <Header />

            <main className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#72d572]">
                            Upravljanje kataloga
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight">Produkti</h2>
                    </div>
                    {hasChanged && (
                        <button
                            type="button"
                            className="cursor-pointer rounded-xl bg-[#4CAF50] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-950/30 transition hover:bg-[#43A047]"
                            onClick={() => {
                                saveChanges();
                                setHasChanged(false);
                            }}
                        >
                            Shrani
                        </button>
                    )}
                </div>

                <div className="space-y-6">
                    {Object.entries(drafts).map(([draftId, draft]) => {
                        const product = products.find(p => String(p.id) === draftId);
                        const isNew = draft._tempId !== undefined;

                        return (
                            <article
                                key={draftId}
                                className="overflow-hidden rounded-2xl border border-white/10 bg-[#161A20] shadow-xl shadow-black/10"
                            >
                                <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            {isNew ? "Nov produkt" : `Produkt #${product?.id}`}
                                        </p>
                                        <h3 className="mt-1 text-xl font-bold">{draft.name}</h3>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => deleteProduct(draftId)}
                                        className="cursor-pointer self-start rounded-lg border border-red-400/25 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-400/10 sm:self-auto"
                                    >
                                        Izbriši produkt
                                    </button>
                                </div>

                                <div className="space-y-7 p-5 sm:p-6">
                                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                        <label className={labelClassName}>
                                            ID
                                            <p>{isNew ? "—" : product?.id}</p>
                                        </label>

                                        <label className={labelClassName}>
                                            Ime
                                            <input
                                                className={inputClassName}
                                                type="text"
                                                value={draft.name}
                                                onChange={(e) =>
                                                    updateDraft(draftId, { name: e.target.value })
                                                }
                                            />
                                        </label>

                                        <label className={labelClassName}>
                                            Osnovna cena
                                            <input
                                                className={inputClassName}
                                                type="number"
                                                step="0.01"
                                                value={draft.basePrice}
                                                onChange={(e) =>
                                                    updateDraft(draftId, {
                                                        basePrice: Number(e.target.value),
                                                    })
                                                }
                                            />
                                        </label>

                                        <label className={labelClassName}>
                                            Slika (URL)
                                            <input
                                                className={inputClassName}
                                                type="text"
                                                value={draft.image}
                                                onChange={(e) =>
                                                    updateDraft(draftId, { image: e.target.value })
                                                }
                                            />
                                        </label>
                                    </div>

                                    <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-200">
                                        <input
                                            className="h-4 w-4 accent-[#4CAF50]"
                                            type="checkbox"
                                            checked={draft.inStock}
                                            onChange={(e) =>
                                                updateDraft(draftId, { inStock: e.target.checked })
                                            }
                                        />
                                        Produkt je na zalogi
                                    </label>

                                    <section className="rounded-xl border border-white/10 bg-[#0F1115]/70 p-4 sm:p-5">
                                        <div className="mb-4 flex items-center justify-between gap-3">
                                            <div>
                                                <h4 className="font-bold">Discounts</h4>
                                                <p className="mt-1 text-xs text-slate-500">
                                                    Popusti za ta produkt
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">
                                                    {draft.discounts.length}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => addDiscount(draftId)}
                                                    className="cursor-pointer rounded-lg border border-[#4CAF50] px-3 py-1 text-xs font-semibold text-[#4CAF50] transition hover:bg-[#4CAF50]/10"
                                                >
                                                    + Dodaj
                                                </button>
                                            </div>
                                        </div>

                                        {draft.discounts.length > 0 ? (
                                            <div className="grid gap-4 xl:grid-cols-2">
                                                {draft.discounts.map((discount, discountIndex) => (
                                                    <div
                                                        key={discount.id ?? `new-${discountIndex}`}
                                                        className="rounded-xl border border-white/10 bg-[#161A20] p-4"
                                                    >
                                                        <div className="mb-4 flex items-center justify-between">
                                                            <span className="text-xs font-bold uppercase tracking-wider text-[#72d572]">
                                                                {discount.id !== undefined
                                                                    ? `Discount #${discount.id}`
                                                                    : "Nov discount"}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeDiscount(draftId, discountIndex)
                                                                }
                                                                className="cursor-pointer rounded-lg border border-red-400/25 px-2 py-1 text-xs font-semibold text-red-300 transition hover:bg-red-400/10"
                                                            >
                                                                Odstrani
                                                            </button>
                                                        </div>

                                                        <div className="grid gap-4 sm:grid-cols-2">
                                                            <label className={labelClassName}>
                                                                Količina
                                                                <input
                                                                    className={inputClassName}
                                                                    type="number"
                                                                    value={discount.quantity}
                                                                    onChange={(e) =>
                                                                        updateDiscount(draftId, discountIndex, {
                                                                            quantity: Number(e.target.value),
                                                                        })
                                                                    }
                                                                />
                                                            </label>

                                                            <label className={labelClassName}>
                                                                Cena
                                                                <input
                                                                    className={inputClassName}
                                                                    type="number"
                                                                    step="0.01"
                                                                    value={discount.price}
                                                                    onChange={(e) =>
                                                                        updateDiscount(draftId, discountIndex, {
                                                                            price: Number(e.target.value),
                                                                        })
                                                                    }
                                                                />
                                                            </label>

                                                            <label className={labelClassName}>
                                                                Brezplačna količina
                                                                <input
                                                                    className={inputClassName}
                                                                    type="number"
                                                                    value={discount.freeQuantity ?? ""}
                                                                    onChange={(e) =>
                                                                        updateDiscount(draftId, discountIndex, {
                                                                            freeQuantity:
                                                                                e.target.value === ""
                                                                                    ? undefined
                                                                                    : Number(e.target.value),
                                                                        })
                                                                    }
                                                                />
                                                            </label>

                                                            <label className={labelClassName}>
                                                                Dostava
                                                                <input
                                                                    className={inputClassName}
                                                                    type="number"
                                                                    step="0.01"
                                                                    value={discount.shipping ?? ""}
                                                                    onChange={(e) =>
                                                                        updateDiscount(draftId, discountIndex, {
                                                                            shipping:
                                                                                e.target.value === ""
                                                                                    ? undefined
                                                                                    : Number(e.target.value),
                                                                        })
                                                                    }
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="rounded-lg border border-dashed border-white/10 px-4 py-6 text-center text-sm text-slate-500">
                                                Ta produkt nima nastavljenih popustov.
                                            </p>
                                        )}
                                    </section>
                                </div>
                            </article>
                        );
                    })}

                    <button
                        type="button"
                        onClick={addProduct}
                        className="cursor-pointer self-start rounded-lg border border-[#4CAF50] px-3 py-2 text-sm font-semibold text-[#4CAF50] transition hover:bg-[#4CAF50]/10 sm:self-auto"
                    >
                        Dodaj produkt
                    </button>
                </div>
            </main >
        </div >
    );
};

export default Panel;
