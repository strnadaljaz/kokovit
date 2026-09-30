"use client";

import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { useCart } from "@/Context/CartContext";
import { Product, useProducts } from "@/Context/ProductsContext";
import { CartItem } from "@/lib/cart/CartItem";
import { formatPrice } from "@/lib/helper/formatPrice";

function CartIcon() {
    return (
        <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h2l2.4 11.2a2 2 0 001.95 1.58h8.9a2 2 0 001.95-1.58L22 8H6" />
            <circle cx="10" cy="20" r="1.25" strokeWidth={2} />
            <circle cx="18" cy="20" r="1.25" strokeWidth={2} />
        </svg>
    );
}

function TrashIcon() {
    return (
        <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M10 11v6m4-6v6M6 7l1 13h10l1-13M9 7V4h6v3" />
        </svg>
    );
}

function calculateTotalShipping(items: CartItem[], products: Product[]): number {
    let totalShipping = 0.0;

    const product = products.find(p => p.name === "45l");

    for (const item of items) {
        if (item.productId === product?.id && item.quantity <= 4) {
            if (product.discounts[0].shipping)
                totalShipping += product.discounts[0].shipping;
        }
    }

    return totalShipping;
}

function calculateFreeQuantity(item: CartItem, products: Product[]): number {
    let freeQuantity = 0;

    const product = products.find(p => p.id === item.productId);
    let quantity = item.quantity;

    if (product) {
        const discounts = [...product.discounts].sort((a, b) => b.quantity - a.quantity);

        for (const discount of discounts) {
            const total = Math.floor(quantity / discount.quantity);

            if (total > 0) {
                quantity %= discount.quantity;

                if (discount.freeQuantity)
                    freeQuantity += total * discount.freeQuantity;
            }
        }
    }

    return freeQuantity;
}

function calculateTotalPrice(items: CartItem[], products: Product[]): number {
    let totalPrice = 0;

    for (const item of items) {
        totalPrice += calculateTotalItemPrice(item, products);
    }

    return totalPrice;
}

function calculateTotalItemPrice(item: CartItem, products: Product[]): number {
    let totalPrice = 0.0;

    const product = products.find(p => p.id === item.productId);
    let quantity = item.quantity;

    if (product) {
        const discounts = [...product.discounts].sort((a, b) => b.quantity - a.quantity);
        for (const discount of discounts) {
            if (Math.floor(quantity / discount.quantity) > 0) {
                totalPrice += (Math.floor(quantity / discount.quantity)) * discount.price;
                quantity %= discount.quantity;
            }
        }
        if (quantity > 0)
            totalPrice += quantity * product.basePrice;
    }

    return totalPrice;
}

export default function Blagajna() {
    const { items, removeItem, totalItems } = useCart();
    const { products } = useProducts();

    const totalPrice = calculateTotalPrice(items, products);
    const shippingTotal = calculateTotalShipping(items, products);
    const total = totalPrice + shippingTotal;

    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-[#4CAF50] to-[#6b4226] px-4 py-8 text-[#F5F5DC] sm:px-6 md:py-14">
                <div className="mx-auto max-w-7xl">
                    <header className="mb-8">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#F5F5DC]/80">
                            KOKOVIT / NAKUP
                        </p>
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                                    Vaša košarica
                                </h1>
                                <p className="mt-3 text-lg text-[#F5F5DC]/80">
                                    Preglejte izbrane izdelke pred zaključkom nakupa.
                                </p>
                            </div>
                            {items.length > 0 && (
                                <div className="flex items-center gap-2 rounded-full bg-[#F5F5DC]/15 px-4 py-2 font-bold">
                                    <CartIcon />
                                    {totalItems} {totalItems === 1 ? "izdelek" : "izdelkov"}
                                </div>
                            )}
                        </div>
                    </header>

                    {items.length === 0 ? (
                        <section className="rounded-[30px] bg-[#F5F5DC] px-6 py-16 text-center text-[#2d5016] shadow-[0_24px_70px_rgba(20,36,18,0.2)] sm:px-10">
                            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#4CAF50]/15 text-[#4CAF50]">
                                <CartIcon />
                            </div>
                            <h2 className="text-3xl font-black">Košarica je prazna</h2>
                            <p className="mx-auto mt-3 max-w-md text-gray-600">
                                Izberite izdelek v trgovini in ga dodajte v svojo košarico.
                            </p>
                            <a
                                href="/trgovina"
                                className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#2d5016] px-7 py-4 font-bold text-[#F5F5DC] transition hover:bg-[#4CAF50]"
                            >
                                Nazaj v trgovino
                            </a>
                        </section>
                    ) : (
                        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
                            <section className="space-y-4">
                                {items.map((item) => {
                                    const product = products.find(p => p.id === item.productId);
                                    const freeQuantity = calculateFreeQuantity(item, products);
                                    const itemPrice = calculateTotalItemPrice(item, products);

                                    return (
                                        <article
                                            key={item.id}
                                            className="overflow-hidden rounded-[26px] bg-[#F5F5DC] text-[#2d5016] shadow-[0_18px_50px_rgba(20,36,18,0.16)]"
                                        >
                                            <div className="flex flex-col gap-5 p-4 sm:flex-row sm:items-center sm:p-5">
                                                <div className="flex h-36 shrink-0 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(76,175,80,0.2),_rgba(245,245,220,0.9)_65%)] p-3 sm:h-32 sm:w-32">
                                                    <img
                                                        src={product?.image}
                                                        alt={product?.name ?? "Izdelek"}
                                                        className="h-full w-full object-contain"
                                                    />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div>
                                                            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#6b4226]">
                                                                KOKOVIT
                                                            </p>
                                                            <h2 className="text-2xl font-black">
                                                                {product?.name ?? "Neznan izdelek"}
                                                            </h2>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeItem(item.id)}
                                                            aria-label={`Odstrani ${product?.name ?? "izdelek"} iz košarice`}
                                                            className="cursor-pointer rounded-full p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                                                        >
                                                            <TrashIcon />
                                                        </button>
                                                    </div>

                                                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                                        <div className="rounded-2xl bg-[#2d5016]/[0.06] px-4 py-3">
                                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                                                                Količina
                                                            </p>
                                                            <p className="mt-1 text-xl font-black">
                                                                {item.quantity} <span className="text-sm font-bold text-gray-600">kosov</span>
                                                            </p>
                                                        </div>
                                                        <div className="rounded-2xl bg-[#4CAF50]/10 px-4 py-3">
                                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                                                                Brezplačno
                                                            </p>
                                                            <p className="mt-1 text-xl font-black text-[#4CAF50]">
                                                                {freeQuantity} <span className="text-sm font-bold text-gray-600">kosov</span>
                                                            </p>
                                                        </div>
                                                        <div className="rounded-2xl bg-[#2d5016]/[0.06] px-4 py-3">
                                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                                                                Cena artikla
                                                            </p>
                                                            <p className="mt-1 text-xl font-black">
                                                                {formatPrice(itemPrice)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}

                                <a
                                    href="/trgovina"
                                    className="inline-flex items-center gap-2 px-1 py-3 font-bold text-[#F5F5DC] transition hover:text-[#FFE4B5]"
                                >
                                    ← Nadaljuj z nakupovanjem
                                </a>
                            </section>

                            <aside className="rounded-[30px] bg-[#F5F5DC] p-6 text-[#2d5016] shadow-[0_24px_70px_rgba(20,36,18,0.2)] sm:p-8 lg:sticky lg:top-6">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#6b4226]">
                                    Povzetek
                                </p>
                                <h2 className="text-3xl font-black">Zaključek naročila</h2>

                                <div className="mt-7 space-y-4 border-b border-[#2d5016]/15 pb-6">
                                    <div className="flex justify-between gap-4 text-gray-700">
                                        <span>Izdelki ({totalItems})</span>
                                        <span className="font-bold">{formatPrice(totalPrice)}</span>
                                    </div>
                                    <div className="flex justify-between gap-4 text-gray-700">
                                        <span>Poštnina</span>
                                        <span className="font-bold">
                                            {shippingTotal > 0 ? formatPrice(shippingTotal) : "Poštnine ni!"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-end justify-between gap-4 py-6">
                                    <span className="text-lg font-bold">Skupaj</span>
                                    <span className="text-3xl font-black text-[#4CAF50]">
                                        {formatPrice(total)}
                                    </span>
                                </div>

                                <a
                                    href="/blagajna/checkout"
                                    className="flex w-full items-center justify-center rounded-xl bg-[#2d5016] px-5 py-4 text-center font-bold text-[#F5F5DC] transition hover:bg-[#4CAF50]"
                                >
                                    Zaključi nakup
                                </a>
                                <p className="mt-4 text-center text-sm leading-relaxed text-gray-500">
                                    Na naslednjem koraku boste vnesli podatke za dostavo in oddajo naročila.
                                </p>
                            </aside>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
