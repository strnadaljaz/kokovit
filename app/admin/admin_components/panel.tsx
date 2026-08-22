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

    const [shipping, setShipping] = useState<string[]>([]);

    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const supabase = createClient();

        const loadStockData = async () => {

            const { data, error } = await supabase
                .from('products')
                .select('id, in_stock');

            if (error) {
                console.error("couldnt get data stock data");
                return;
            }

            setBag45(data[0].in_stock);
            setBag70(data[1].in_stock);
            setBigBag(data[2].in_stock);
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
            for (let d of data) {
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

            for (let d of data) {
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
        setLoading(false);
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-between px-8 py-4 shadow-lg">
                <h1 className="text-white text-2xl font-bold tracking-wide">Kokovit Admin Panel</h1>
                <Link
                    href={"/"}
                    className="text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors px-4 py-2 rounded-lg shadow-md"
                >
                    Odjava
                </Link>
            </div>

            <div className="flex-1 p-8 max-w-6xl mx-auto w-full">
                {/* Zaloga Section */}
                <div id="zaloga" className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-500 pb-3">Zaloga</h2>
                    <div className="flex flex-wrap gap-8">
                        {[
                            { id: "70l", label: "70l", state: bag70, setState: setBag70 },
                            { id: "45l", label: "45l", state: bag45, setState: setBag45 },
                            { id: "BigBag", label: "BigBag", state: bigBag, setState: setBigBag },
                        ].map(({ id, label, state, setState }) => (
                            <label key={id} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    id={id}
                                    name={id}
                                    checked={state}
                                    onChange={(e) => setState(e.target.checked)}
                                    className="w-5 h-5 accent-blue-600 cursor-pointer rounded transition-transform hover:scale-110"
                                />
                                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Cene 45l Section */}
                <div id="cene_45l" className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-500 pb-3">Akcije 45l</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "40px repeat(3, 1fr)", gap: "1rem" }}>
                        <p />
                        <p className="font-semibold text-gray-700">Število kosov</p>
                        <p className="font-semibold text-gray-700">Cena</p>
                        <p className="font-semibold text-gray-700">Poštnina</p>
                        {kom45.map((_, i) => (
                            <Fragment key={i}>
                                <p className="text-[#000000] text-xl leading-none cursor-pointer" onClick={() => deleteEntry45(i)}>-</p>
                                <input
                                    type="number"
                                    className="text-[#000000] w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={kom45[i]}
                                    onChange={(e) => {
                                        const nextValue = Number(e.target.value);
                                        setKom45((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                                <input
                                    className="text-[#000000] w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={price45[i]}
                                    onChange={(e) => {
                                        const nextValue = e.target.value;
                                        setPrice45((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                                <input
                                    className="text-[#000000] w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={shipping[i]}
                                    onChange={(e) => {
                                        const nextValue = e.target.value;
                                        setShipping((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                            </Fragment>
                        ))}
                        <p className="text-[#000000] cursor-pointer" onClick={increase45}>+</p>
                    </div>
                </div>

                {/* Cene 70l Section */}
                <div id="cene_70l" className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-500 pb-3">Akcije 70l</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "40px repeat(3, 1fr)", gap: "1rem" }}>
                        <p />
                        <p className="font-semibold text-gray-700">Število komadov</p>
                        <p className="font-semibold text-gray-700">Število gratis komadov</p>
                        <p className="font-semibold text-gray-700">Cena</p>
                        {kom70.map((_, i) => (
                            <Fragment key={i}>
                                <p className="text-[#000000] text-xl leading-none cursor-pointer" onClick={() => deleteEntry70(i)}>-</p>
                                <input
                                    type="number"
                                    className="text-[#000000] w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                                    className="text-[#000000] w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={gratisKom[i]}
                                    onChange={(e) => {
                                        const nextValue = Number(e.target.value);
                                        setGratisKom((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                                <input
                                    className="text-[#000000] w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={price70[i]}
                                    onChange={(e) => {
                                        const nextValue = e.target.value;
                                        setPrice70((prev) =>
                                            prev.map((value, index) => (index === i ? nextValue : value))
                                        );
                                    }}
                                />
                            </Fragment>
                        ))}
                        <p className="text-[#000000] cursor-pointer" onClick={increase70}>+</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Panel;
