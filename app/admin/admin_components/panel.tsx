"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { createClient } from "@/lib/supabase/client";

const Panel = () => {

    const [bag70, setBag70] = useState(false);
    const [bag45, setBag45] = useState(false);
    const [bigBag, setBigBag] = useState(false);

    const [kom45, setKom45] = useState<number[]>([]);
    const [kom70, setKom70] = useState<number[]>([]);

    const [gratisKom, setGratisKom] = useState<number[]>([]);

    const [price45, setPrice45] = useState<string[]>([]);
    const [price70, setPrice70] = useState<string[]>([]);
    const [priceBigBag, setPriceBigBag] = useState<string>();
    const [priceOne45, setPriceOne45] = useState<string>();
    const [priceOne70, setPriceOne70] = useState<string>();

    const [shipping, setShipping] = useState<string[]>([]);

    useEffect(() => {
        const supabase = createClient();

        const loadStockData = async () => {

            const { data, error } = await supabase
                .from('products')
                .select('id, in_stock, price');

            if (error) {
                console.error("couldnt get data stock data");
                console.error(error);
                return;
            }

            console.log(data);

            for (const d of data) {
                if (d.id == 1) {
                    setBag45(d.in_stock);
                    setPriceOne45(d.price);
                }
                else if (d.id == 2) {
                    setBag70(d.in_stock);
                    setPriceOne70(d.price);
                }
                else {
                    setBigBag(d.in_stock);
                    setPriceBigBag(d.price);
                }
            }
        }

        const load45Data = async () => {
            const { data, error } = await supabase
                .from('discounts')
                .select('id, quantity, price, shipping')
                .eq("product_id", 1);

            if (error) {
                console.error("couldnt get 45l data");
                return;
            }

            let quantity = [];
            let price = [];
            let shipping = [];

            for (const d of data) {
                quantity.push(d.quantity);
                price.push(d.price);
                shipping.push(d.shipping ? d.shipping : "");
            }

            setKom45(quantity);
            setPrice45(price);
            setShipping(shipping);
        }

        const load70Data = async () => {
            const { data, error } = await supabase
                .from('discounts')
                .select('id, quantity, free_quantity, price')
                .eq("product_id", 2);

            if (error) {
                console.error("couldnt get 70l data");
                return;
            }

            let quantity = [];
            let free_quantity = [];
            let price = [];

            for (const d of data) {
                quantity.push(d.quantity);
                free_quantity.push(d.free_quantity);
                price.push(d.price);
            }

            setKom70(quantity);
            setGratisKom(free_quantity);
            setPrice70(price);
        }

        loadStockData();
        load45Data();
        load70Data();
    }, []);

    function increase45() {
        setKom45((prev) => [...prev, 0]);
        setPrice45((prev) => [...prev, ""]);
    }

    function increase70() {
        setKom70((prev) => [...prev, 0]);
        setPrice70((prev) => [...prev, ""]);
        setGratisKom((prev) => [...prev, 0]);
    }

    function deleteEntry45(i: number) {
        setKom45((prev) => prev.filter((_, index) => index !== i));
        setPrice45((prev) => prev.filter((_, index) => index !== i));
    }

    function deleteEntry70(i: number) {
        setKom70((prev) => prev.filter((_, index) => index !== i));
        setPrice70((prev) => prev.filter((_, index) => index !== i));
        setGratisKom((prev) => prev.filter((_, index) => index !== i));
    }

    return (
        <div className="min-h-screen bg-[#0F1115] flex flex-col font-sans" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            {/* Header */}
            <div className="bg-[#161A20] flex items-center justify-between px-8 py-4 shadow-md shadow-black/30 sticky top-0 z-10 border-b border-white/5">
                <h1 className="text-slate-100 text-2xl font-bold tracking-wide">Kokovit Admin Panel</h1>
                <Link
                    href={"/"}
                    className="text-sm font-semibold text-white bg-[#4CAF50] hover:bg-[#43A047] transition-colors duration-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
                >
                    Odjava
                </Link>
            </div>

            <div className="flex-1 p-4 sm:p-8 max-w-6xl mx-auto w-full">
                {/* Zaloga Section */}
                <div id="zaloga" className="bg-[#161A20] rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 p-6 mb-6 border border-white/5">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/10 pb-4">
                        <span aria-hidden="true">📦</span> Zaloga
                    </h2>
                    <div className="flex flex-col gap-4">
                        {[
                            { id: "45l", label: "45l", state: bag45, setState: setBag45, price: priceOne45, priceChange: setPriceOne45 },
                            { id: "70l", label: "70l", state: bag70, setState: setBag70, price: priceOne70, priceChange: setPriceOne70 },
                            { id: "BigBag", label: "BigBag", state: bigBag, setState: setBigBag, price: priceBigBag, priceChange: setPriceBigBag },
                        ].map(({ id, label, state, setState, price, priceChange }) => (
                            <div
                                key={id}
                                className="flex flex-wrap items-center gap-4 bg-[#1D222A] rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-[#232933]"
                            >
                                <label htmlFor={id} className="flex items-center gap-3 cursor-pointer group">
                                    {/* Toggle switch */}
                                    <span className="relative inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            id={id}
                                            name={id}
                                            checked={state}
                                            onChange={(e) => setState(e.target.checked)}
                                            className="sr-only peer"
                                        />
                                        <span
                                            className="w-11 h-6 bg-slate-600 peer-checked:bg-[#4CAF50] rounded-full transition-colors duration-300 ease-in-out cursor-pointer"
                                        ></span>
                                        <span
                                            className="absolute left-1 top-1 w-4 h-4 bg-slate-100 rounded-full shadow transition-transform duration-300 ease-in-out peer-checked:translate-x-5"
                                        ></span>
                                    </span>
                                    <span className="text-lg font-medium text-slate-200 group-hover:text-[#4CAF50] transition-colors duration-200">
                                        {label}
                                    </span>
                                </label>
                                {
                                    state &&
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            className="text-slate-100 bg-[#0F1115] w-24 px-3 py-1.5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                            value={price}
                                            onChange={(e) => priceChange(e.target.value)}
                                        ></input>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cene 45l Section */}
                <div id="cene_45l" className="bg-[#161A20] rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 p-6 mb-6 border border-white/5">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/10 pb-4">
                        <span aria-hidden="true">🏷️</span> Akcije 45l
                    </h2>

                    {/* Column labels */}
                    <div className="hidden sm:grid grid-cols-[40px_repeat(3,1fr)] gap-4 mb-3 px-2">
                        <span />
                        <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                            Število kosov
                        </span>
                        <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                            Cena
                        </span>
                        <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                            Poštnina
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        {kom45.map((_, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-[40px_repeat(3,1fr)] gap-4 items-center bg-[#1D222A] rounded-lg px-3 py-3 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-black/30 transition-shadow duration-200"
                            >
                                <button
                                    type="button"
                                    onClick={() => deleteEntry45(i)}
                                    aria-label="Odstrani vrstico"
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0F1115] text-slate-200 shadow-sm hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
                                >
                                    ➖
                                </button>
                                <input
                                    type="number"
                                    placeholder="Število kosov"
                                    className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                    value={kom45[i]}
                                    onChange={(e) => {
                                        const nextValue = Number(e.target.value);
                                        setKom45((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                                <input
                                    placeholder="Cena"
                                    className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                    value={price45[i]}
                                    onChange={(e) => {
                                        const nextValue = e.target.value;
                                        setPrice45((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                                <input
                                    placeholder="Poštnina"
                                    className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                    value={shipping[i]}
                                    onChange={(e) => {
                                        const nextValue = e.target.value;
                                        setShipping((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={increase45}
                        className="mt-5 inline-flex cursor-pointer items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                        ➕ Dodaj vrstico
                    </button>
                </div>

                {/* Cene 70l Section */}
                <div id="cene_70l" className="bg-[#161A20] rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 p-6 mb-6 border border-white/5">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/10 pb-4">
                        <span aria-hidden="true">🏷️</span> Akcije 70l
                    </h2>

                    {/* Column labels */}
                    <div className="hidden sm:grid grid-cols-[40px_repeat(3,1fr)] gap-4 mb-3 px-2">
                        <span />
                        <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                            Število komadov
                        </span>
                        <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                            Število gratis komadov
                        </span>
                        <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                            Cena
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        {kom70.map((_, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-[40px_repeat(3,1fr)] gap-4 items-center bg-[#1D222A] rounded-lg px-3 py-3 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-black/30 transition-shadow duration-200"
                            >
                                <button
                                    type="button"
                                    onClick={() => deleteEntry70(i)}
                                    aria-label="Odstrani vrstico"
                                    className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-[#0F1115] text-slate-200 shadow-sm hover:bg-red-500 hover:text-white transition-colors duration-200"
                                >
                                    ➖
                                </button>
                                <input
                                    type="number"
                                    placeholder="Število komadov"
                                    className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                    value={kom70[i]}
                                    onChange={(e) => {
                                        const nextValue = Number(e.target.value);
                                        setKom70((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                                <input
                                    type="number"
                                    placeholder="Gratis komadi"
                                    className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                    value={gratisKom[i]}
                                    onChange={(e) => {
                                        const nextValue = Number(e.target.value);
                                        setGratisKom((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                                <input
                                    placeholder="Cena"
                                    className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                    value={price70[i]}
                                    onChange={(e) => {
                                        const nextValue = e.target.value;
                                        setPrice70((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={increase70}
                        className="mt-5 inline-flex cursor-pointer items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                        ➕ Dodaj vrstico
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Panel;
