"use client";

import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { useCart } from "@/Context/CartContext";
import { formatPrice } from "@/lib/helper/formatPrice";

interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    in_stock: boolean;
}

interface Discount {
    id: number;
    quantity: number;
    price: number;
    shipping: number;
    free_quantity: number;
}

function CartIcon() {
    return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h2l2.4 11.2a2 2 0 001.95 1.58h8.9a2 2 0 001.95-1.58L22 8H6" />
            <circle cx="10" cy="20" r="1.25" strokeWidth={2} />
            <circle cx="18" cy="20" r="1.25" strokeWidth={2} />
        </svg>
    );
}

export default function Substrat() {
    const { addItem } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const [discounts, setDiscounts] = useState<Discount[]>([]);
    const [quantity, setQuantity] = useState(5);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const normalizedProductName = product?.name.toLowerCase().replace(/\s/g, "") ?? "";
    const isBigBag = product?.id === 3 || normalizedProductName.includes("bigbag");
    const is45l = normalizedProductName.includes("45l");
    const quantityOptions = isBigBag
        ? [1, 2, 3]
        : is45l
            ? [4, 8, 12, 16]
            : [5, 6, 7, 8, 9];

    useEffect(() => {
        const loadProduct = async () => {
            const supabase = createClient();
            const requestedProduct = new URLSearchParams(window.location.search).get("productId");

            const { data: products, error: productsError } = await supabase
                .from("products")
                .select("id, name, img, price, in_stock")
                .order("id", { ascending: true });

            if (productsError) {
                console.error(productsError);
                setError("Izdelka trenutno ni mogoče naložiti.");
                setIsLoading(false);
                return;
            }

            const selectedProduct =
                products?.find((item) => item.name === requestedProduct) ??
                products?.[0];

            if (!selectedProduct) {
                setError("Izdelek trenutno ni na voljo.");
                setIsLoading(false);
                return;
            }

            const { data: discountData, error: discountsError } = await supabase
                .from("discounts")
                .select("id, quantity, price, shipping, free_quantity")
                .eq("product_id", selectedProduct.id)
                .order("quantity", { ascending: true })
                .limit(3);

            if (discountsError) {
                console.error(discountsError);
                setError("Akcij trenutno ni mogoče naložiti.");
                setIsLoading(false);
                return;
            }

            setProduct(selectedProduct);
            setQuantity(selectedProduct.id === 3 ? 1 : selectedProduct.name.toLowerCase().includes("45l") ? 4 : 5);
            setDiscounts(discountData ?? []);
            setIsLoading(false);
        };

        loadProduct();
    }, []);

    const handleAddToCart = (productId: number, productName: string, image: string, quantity: number, unitPrice: number, isPromotion: boolean, promotionLabel?: string, freeQuantity?: number, shipping?: number) => {
        addItem({
            id: productName + quantity.toString(),
            productId: productId,
            productName: productName,
            image: image,
            quantity: quantity,
            unitPrice: unitPrice,

            isPromotion: isPromotion,
            promotionLabel: promotionLabel,
            freeQuantity: freeQuantity,
            shipping: shipping
        });
    }

    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-[#4CAF50] to-[#6b4226] px-4 py-8 text-[#F5F5DC] sm:px-6 md:py-14">
                <div className="mx-auto max-w-7xl">
                    {isLoading && (
                        <div className="rounded-3xl bg-[#F5F5DC]/90 p-10 text-center text-xl font-semibold text-[#2d5016]">
                            Nalagam izdelek ...
                        </div>
                    )}

                    {error && !isLoading && (
                        <div className="rounded-3xl bg-[#F5F5DC]/90 p-10 text-center text-xl font-semibold text-red-700">
                            {error}
                        </div>
                    )}

                    {product && !isLoading && (
                        <>
                            <header className="mb-8">
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#F5F5DC]/80">
                                    KOKOVIT / TRGOVINA
                                </p>
                                <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                                    {product.name}
                                </h1>
                            </header>

                            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start">
                                <section className="overflow-hidden rounded-[30px] border border-[#F5F5DC]/20 bg-[#F5F5DC]/10 shadow-[0_24px_70px_rgba(20,36,18,0.2)] backdrop-blur-sm">
                                    <div className="flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(76,175,80,0.2),_rgba(245,245,220,0.96)_60%)] p-6 sm:min-h-[500px] sm:p-10">
                                        <img
                                            src={`/${product.img}`}
                                            alt={product.name}
                                            className="max-h-[460px] w-full object-contain drop-shadow-[0_24px_20px_rgba(45,80,22,0.2)]"
                                        />
                                    </div>
                                    <div className="bg-[#F5F5DC] p-6 text-[#2d5016] sm:p-8">
                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#6b4226]">
                                            Naraven substrat za vaš vrt
                                        </p>
                                        <h2 className="mb-4 text-2xl font-black sm:text-3xl">
                                            Več pridelka, manj dela
                                        </h2>
                                        <p className="leading-relaxed text-gray-700">
                                            KOKOVIT substrat je pripravljen za takojšnjo uporabo v visokih gredah,
                                            vrtovih, rastlinjakih in lončnicah. Naravna kokosova vlakna pomagajo
                                            zadrževati vlago in ustvarjajo dobre pogoje za zdrave rastline.
                                        </p>
                                        <p className="mt-5 text-2xl font-black text-[#4CAF50]">
                                            {formatPrice(product.price)} <span className="text-base font-semibold text-gray-600">/ kos</span>
                                        </p>
                                    </div>
                                </section>

                                <section className="space-y-6">
                                    <div className="rounded-[30px] bg-[#F5F5DC] p-6 text-[#2d5016] shadow-[0_24px_70px_rgba(20,36,18,0.2)] sm:p-8">
                                        <div className="mb-5 flex items-start justify-between gap-4">
                                            <div>
                                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#6b4226]">
                                                    Količina
                                                </p>
                                                <h2 className="text-2xl font-black sm:text-3xl">Koliko kosov?</h2>
                                            </div>
                                            <span
                                                className={`rounded-full px-3 py-2 text-sm font-bold ${product.in_stock
                                                    ? 'bg-[#4CAF50]/15 text-[#4CAF50]'
                                                    : 'bg-red-500/15 text-red-400'
                                                    }`}
                                            >
                                                {product.in_stock ? 'Na zalogi' : 'Ni na zalogi'}
                                            </span>
                                        </div>

                                        <div className={`grid gap-2 sm:gap-3 ${isBigBag ? "grid-cols-3" : "grid-cols-4 sm:grid-cols-5"}`}>
                                            {quantityOptions.map((value) => (
                                                <button
                                                    key={value}
                                                    type="button"
                                                    onClick={() => setQuantity(value)}
                                                    className={`cursor-pointer rounded-xl border-2 px-2 py-3 text-lg font-black transition disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none ${quantity === value
                                                        ? "border-[#4CAF50] bg-[#4CAF50] text-white shadow-lg"
                                                        : "border-[#2d5016]/15 bg-white text-[#2d5016] hover:border-[#4CAF50]"
                                                        }`}
                                                    aria-label={`Izberi ${value} kosov`}
                                                    disabled={!product.in_stock}
                                                >
                                                    {value}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            className="cursor-pointer mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-[#2d5016] px-5 py-4 text-center font-bold text-[#F5F5DC] transition hover:bg-[#4CAF50] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200"
                                            disabled={!product.in_stock}
                                            onClick={() => {
                                                handleAddToCart(product.id, product.name, product.img, quantity, product.price, false, undefined, undefined, undefined);
                                            }}
                                        >
                                            <CartIcon />
                                            Dodaj {quantity} kosov v košarico
                                        </button>                                   </div>

                                    <div className="rounded-[30px] bg-[#F5F5DC] p-6 text-[#2d5016] shadow-[0_24px_70px_rgba(20,36,18,0.2)] sm:p-8">
                                        <div className="mb-5 flex items-end justify-between gap-4">
                                            <div>
                                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#6b4226]">
                                                    Posebne ponudbe
                                                </p>
                                                <h2 className="text-2xl font-black sm:text-3xl">Izberi akcijo</h2>
                                            </div>
                                            <span className="text-2xl">🔥</span>
                                        </div>

                                        {isBigBag ? (
                                            <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#4CAF50] bg-white p-4 ring-2 ring-[#4CAF50]/20">
                                                <div>
                                                    <p className="font-black text-[#2d5016]">2 + 1 GRATIS</p>
                                                    <p className="mt-1 text-sm font-semibold text-gray-600">
                                                        Ob nakupu 2 kosov prejmete tretji kos brezplačno
                                                    </p>
                                                </div>
                                                <a
                                                    aria-label="Izberi akcijo 2 plus 1 gratis"
                                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white transition hover:bg-[#2d5016]"
                                                >
                                                    <CartIcon />
                                                </a>
                                            </div>
                                        ) : discounts.length > 0 ? (
                                            <div className="space-y-3">
                                                {discounts.map((discount, index) => (
                                                    <div
                                                        key={discount.id}
                                                        className={`flex items-center justify-between gap-3 rounded-2xl border bg-white p-4 ${index === discounts.length - 1
                                                            ? "border-[#4CAF50] ring-2 ring-[#4CAF50]/20"
                                                            : "border-[#2d5016]/10"
                                                            }`}
                                                    >
                                                        <div>
                                                            <p className="font-black text-[#2d5016]">
                                                                {discount.quantity} kosov
                                                                {discount.free_quantity ? ` + ${discount.free_quantity} GRATIS` : ""}
                                                            </p>
                                                            <p className="mt-1 text-sm font-semibold text-gray-600">
                                                                {formatPrice(discount.price)}
                                                                {discount.shipping
                                                                    ? ` + poštnina ${formatPrice(discount.shipping)}`
                                                                    : " · brez poštnine"}
                                                            </p>
                                                        </div>
                                                        <a
                                                            onClick={() => {
                                                                handleAddToCart(product.id, product.name, product.img, discount.quantity, product.price, true, discount.quantity + " kosov + " + discount.free_quantity + " GRATIS", discount.free_quantity, discount.shipping);
                                                            }}
                                                            aria-label={`Izberi akcijo za ${discount.quantity} kosov`}
                                                            className=" cursor-pointer flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white transition hover:bg-[#2d5016]"
                                                        >
                                                            <CartIcon />
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="rounded-2xl bg-white p-5 text-gray-700">
                                                Za ta izdelek trenutno ni objavljenih akcij.
                                            </p>
                                        )}
                                    </div>
                                </section>
                            </div>
                        </>
                    )}
                </div>
            </main >
            <Footer />
        </div >
    );
}
