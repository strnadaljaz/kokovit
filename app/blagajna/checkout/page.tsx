"use client";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { useState } from "react";
import { calculateTotalShipping, calculateTotalPrice, calculateFreeQuantity, calculateTotalItemPrice } from "@/lib/helper/priceCalculations";
import { Product, useProducts } from "@/Context/ProductsContext";
import { useCart } from "@/Context/CartContext";
import { CartItem } from "@/lib/cart/CartItem";
import { formatPrice } from "@/lib/helper/formatPrice";

enum Payment {
    Predracun,
    PoPovzetju,
}

function CanPayAfter(items: CartItem[], products: Product[]): boolean {
    for (let item of items) {
        const product = products.find(p => p.id === item.productId);
        if (product && product.name === '45l')
            return false;
    }

    return true;
}

function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPhone(phone: string): boolean {
    const regex = /^\+?[0-9]{6,15}$/;
    return regex.test(phone);
}

async function sendEmail(name: string, email: string, phone: string, address: string, postNumber: string, city: string, payment: Payment, notes: string, items: CartItem[], products: Product[]) {
    let itemsString = "";

    for (const item of items) {
        const productName = products.find(p => p.id === item.productId)?.name;

        itemsString += productName + ": " + item.quantity + " + " + calculateFreeQuantity(item, products) + ", cena: " + formatPrice(calculateTotalItemPrice(item, products)) + '\n';
    }

    itemsString += "Skupaj cena: " + formatPrice(calculateTotalPrice(items, products));

    let paymentString;

    if (payment === Payment.Predracun)
        paymentString = 'Predračun';
    else
        paymentString = 'Po povzetju';

    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, address, postNumber, city, paymentString, itemsString, notes })
    })

    return response.ok;
}

const Checkout = () => {
    const submit = () => {
        if (name && email && phone && address && postNumber && city && payment && terms) {
            if (!isValidEmail(email)) {
                alert("E-pošta ni pravilnega formata!");
                return;
            }
            if (!isValidPhone(phone)) {
                alert("Telefonska številka ni veljavnega formata!");
                return;
            }
            if (!(!isNaN(Number(postNumber)) && postNumber.trim() !== '')) {
                alert("Poštna številka ni pravilna!");
                return;
            }

            sendEmail(name, email, phone, address, postNumber, city, payment, notes, items, products);
        }
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [postNumber, setPostNumber] = useState("");
    const [city, setCity] = useState("");
    const [notes, setNotes] = useState("");
    const [payment, setPayment] = useState<Payment | "">("");
    const [terms, setTerms] = useState(false);

    const { products } = useProducts();
    const { items } = useCart();

    const canPayAfter = CanPayAfter(items, products);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-[#4CAF50] to-[#6b4226] px-4 py-8 text-[#F5F5DC] sm:px-6 md:py-14">
                <div className="mx-auto max-w-6xl">
                    <header className="mb-8">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#F5F5DC]/80">
                            KOKOVIT / BLAGAJNA
                        </p>
                        <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                            Zaključite naročilo
                        </h1>
                        <p className="mt-3 max-w-2xl text-lg text-[#F5F5DC]/80">
                            Vnesite podatke za dostavo in izberite način plačila.
                        </p>
                    </header>

                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
                        <section className="rounded-[30px] bg-[#F5F5DC] p-6 text-[#2d5016] shadow-[0_24px_70px_rgba(20,36,18,0.2)] sm:p-8">
                            <div className="mb-8">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#6b4226]">
                                    Podatki za dostavo
                                </p>
                                <h2 className="text-3xl font-black">Vaši podatki</h2>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block sm:col-span-2">
                                    <span className="mb-2 block text-sm font-bold">Ime in priimek</span>
                                    <input
                                        type="text"
                                        placeholder="Vnesite ime in priimek"
                                        className="w-full rounded-xl border border-[#2d5016]/20 bg-white px-4 py-3 text-[#2d5016] outline-none transition placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-bold">E-pošta</span>
                                    <input
                                        type="email"
                                        placeholder="vas@email.si"
                                        className="w-full rounded-xl border border-[#2d5016]/20 bg-white px-4 py-3 text-[#2d5016] outline-none transition placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-bold">Telefonska številka</span>
                                    <input
                                        type="tel"
                                        placeholder="+386 40 123 456"
                                        className="w-full rounded-xl border border-[#2d5016]/20 bg-white px-4 py-3 text-[#2d5016] outline-none transition placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </label>

                                <label className="block sm:col-span-2">
                                    <span className="mb-2 block text-sm font-bold">Naslov</span>
                                    <input
                                        type="text"
                                        placeholder="Ulica in hišna številka"
                                        className="w-full rounded-xl border border-[#2d5016]/20 bg-white px-4 py-3 text-[#2d5016] outline-none transition placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-bold">Poštna številka</span>
                                    <input
                                        type="text"
                                        placeholder="1000"
                                        className="w-full rounded-xl border border-[#2d5016]/20 bg-white px-4 py-3 text-[#2d5016] outline-none transition placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20"
                                        value={postNumber}
                                        onChange={(e) => setPostNumber(e.target.value)}
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-bold">Kraj</span>
                                    <input
                                        type="text"
                                        placeholder="Ljubljana"
                                        className="w-full rounded-xl border border-[#2d5016]/20 bg-white px-4 py-3 text-[#2d5016] outline-none transition placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                    />
                                </label>

                                <label className="block sm:col-span-2">
                                    <span className="mb-2 block text-sm font-bold">Opombe <span className="font-normal text-gray-500">(neobvezno)</span></span>
                                    <textarea
                                        rows={4}
                                        placeholder="Morebitne posebnosti glede dostave ..."
                                        className="w-full resize-y rounded-xl border border-[#2d5016]/20 bg-white px-4 py-3 text-[#2d5016] outline-none transition placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </label>
                            </div>
                        </section>

                        <aside className="rounded-[30px] bg-[#F5F5DC] p-6 text-[#2d5016] shadow-[0_24px_70px_rgba(20,36,18,0.2)] sm:p-8 lg:sticky lg:top-6">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#6b4226]">
                                Plačilo
                            </p>
                            <h2 className="text-3xl font-black">Način plačila</h2>

                            <div className="mt-6 space-y-3">
                                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#2d5016]/15 bg-white p-4 transition hover:border-[#4CAF50]">
                                    <input
                                        type="radio"
                                        name="nacin-placila"
                                        value={Payment.Predracun}
                                        checked={payment === Payment.Predracun}
                                        onChange={() => setPayment(Payment.Predracun)}
                                        className="mt-1 h-4 w-4 accent-[#4CAF50]"
                                    />
                                    <span>
                                        <span className="block font-bold">Predračun</span>
                                        <span className="mt-1 block text-sm text-gray-500">Podatke za plačilo prejmete po oddaji naročila.</span>
                                    </span>
                                </label>

                                <label className={`flex items-start gap-3 rounded-2xl border p-4 transition ${canPayAfter
                                    ? "cursor-pointer border-[#2d5016]/15 bg-white hover:border-[#4CAF50]"
                                    : "cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400"
                                    }`}>
                                    <input
                                        type="radio"
                                        name="nacin-placila"
                                        value={Payment.PoPovzetju}
                                        checked={payment === Payment.PoPovzetju}
                                        onChange={() => setPayment(Payment.PoPovzetju)}
                                        disabled={!canPayAfter}
                                        className="mt-1 h-4 w-4 accent-[#4CAF50]"
                                    />
                                    <span>
                                        <span className="block font-bold">Po povzetju</span>
                                        <span className="mt-1 block text-sm text-gray-500">Plačilo ob prevzemu pošiljke.</span>
                                    </span>
                                </label>
                            </div>

                            <div className="my-7 border-t border-[#2d5016]/15" />

                            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-gray-600">
                                <input
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 shrink-0 accent-[#4CAF50]"
                                    checked={terms}
                                    onChange={(e) => setTerms(e.target.checked)}
                                />
                                <span>
                                    Strinjam se s <a href="/splosni-pogoji" className="font-bold text-[#2d5016] underline decoration-[#4CAF50] underline-offset-2">splošnimi pogoji poslovanja</a>.
                                </span>
                            </label>

                            <button
                                type="button"
                                className="cursor-pointer mt-6 flex w-full items-center justify-center rounded-xl bg-[#2d5016] px-5 py-4 text-center font-bold text-[#F5F5DC] transition hover:bg-[#4CAF50]"
                                onClick={submit}
                            >
                                Oddaj naročilo
                            </button>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Checkout;
