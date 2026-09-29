"use client";

import { useProducts } from "@/Context/ProductsContext";
import Header from "./panel_components/header";
import { useState } from "react";

const inputClassName =
    "w-full rounded-lg border border-white/10 bg-[#0F1115] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50]";

const labelClassName =
    "flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400";

const Panel = () => {
    const { products } = useProducts();
    const [hasChanged, setHasChanged] = useState(false);

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
                        >
                            Shrani
                        </button>
                    )}
                </div>

                <div className="space-y-6">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-[#161A20] shadow-xl shadow-black/10"
                        >
                            <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        Produkt #{product.id}
                                    </p>
                                    <h3 className="mt-1 text-xl font-bold">{product.name}</h3>
                                </div>

                                <button
                                    type="button"
                                    className="cursor-pointer self-start rounded-lg border border-red-400/25 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-400/10 sm:self-auto"
                                >
                                    Izbriši produkt
                                </button>
                            </div>

                            <div className="space-y-7 p-5 sm:p-6">
                                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                                    <label className={labelClassName}>
                                        ID
                                        <p>{product.id}</p>
                                    </label>

                                    <label className={labelClassName}>
                                        Ime
                                        <input
                                            className={inputClassName}
                                            type="text"
                                            value={product.name}
                                            onChange={() => {
                                                setHasChanged(true);
                                            }}
                                        />
                                    </label>

                                    <label className={labelClassName}>
                                        Osnovna cena
                                        <input
                                            className={inputClassName}
                                            type="number"
                                            step="0.01"
                                            value={product.basePrice}
                                            onChange={() => {
                                                setHasChanged(true);
                                            }}
                                        />
                                    </label>

                                    <label className={labelClassName}>
                                        Slika (URL)
                                        <input
                                            className={inputClassName}
                                            type="text"
                                            value={product.image}
                                            onChange={() => {
                                                setHasChanged(true);
                                            }}
                                        />
                                    </label>
                                </div>

                                <label className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-200">
                                    <input
                                        className="h-4 w-4 accent-[#4CAF50]"
                                        type="checkbox"
                                        checked={product.inStock}
                                        onChange={() => {
                                            setHasChanged(true);
                                        }}
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
                                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">
                                            {product.discounts?.length ?? 0}
                                        </span>
                                    </div>

                                    {product.discounts && product.discounts.length > 0 ? (
                                        <div className="grid gap-4 xl:grid-cols-2">
                                            {product.discounts.map((discount) => (
                                                <div
                                                    key={discount.id}
                                                    className="rounded-xl border border-white/10 bg-[#161A20] p-4"
                                                >
                                                    <div className="mb-4 flex items-center justify-between">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-[#72d572]">
                                                            Discount #{discount.id}
                                                        </span>
                                                        <span className="text-xs text-slate-500">
                                                            Produkt #{discount.productId}
                                                        </span>
                                                    </div>

                                                    <div className="grid gap-4 sm:grid-cols-2">
                                                        <label className={labelClassName}>
                                                            ID
                                                            <input
                                                                className={inputClassName}
                                                                type="number"
                                                                value={discount.id}
                                                                onChange={() => {
                                                                    setHasChanged(true);
                                                                }}
                                                            />
                                                        </label>

                                                        <label className={labelClassName}>
                                                            Količina
                                                            <input
                                                                className={inputClassName}
                                                                type="number"
                                                                value={discount.quantity}
                                                                onChange={() => {
                                                                    setHasChanged(true);
                                                                }}
                                                            />
                                                        </label>

                                                        <label className={labelClassName}>
                                                            Cena
                                                            <input
                                                                className={inputClassName}
                                                                type="number"
                                                                step="0.01"
                                                                value={discount.price}
                                                                onChange={() => {
                                                                    setHasChanged(true);
                                                                }}
                                                            />
                                                        </label>

                                                        <label className={labelClassName}>
                                                            Brezplačna količina
                                                            <input
                                                                className={inputClassName}
                                                                type="number"
                                                                value={discount.freeQuantity ?? ""}
                                                                onChange={() => {
                                                                    setHasChanged(true);
                                                                }}
                                                            />
                                                        </label>

                                                        <label className={labelClassName}>
                                                            Dostava
                                                            <input
                                                                className={inputClassName}
                                                                type="number"
                                                                step="0.01"
                                                                value={discount.shipping ?? ""}
                                                                onChange={() => {
                                                                    setHasChanged(true);
                                                                }}
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
                    ))}
                    <button
                        type="button"
                        className="cursor-pointer self-start rounded-lg border border-[#4CAF50] px-3 py-2 text-sm font-semibold text-[#4CAF50] sm:self-auto"
                    >
                        Dodaj produkt
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Panel;
