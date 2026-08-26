"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Header from "./panel_components/header";
import Stock from "./panel_components/stock";
import Section45l from "./panel_components/section_45l";
import Section70l from "./panel_components/section_70l";
import { updateDiscounts45, updatePrice, updateStock, updateDiscounts70 } from "./panel_lib/update_table";

const Panel = () => {

    const [bag70, setBag70] = useState<boolean>(false);
    const [bag45, setBag45] = useState<boolean>(false);
    const [bigBag, setBigBag] = useState<boolean>(false);

    const [kom45, setKom45] = useState<number[]>([]);
    const [kom70, setKom70] = useState<number[]>([]);

    const [gratisKom, setGratisKom] = useState<number[]>([]);

    const [price45, setPrice45] = useState<string[]>([]);
    const [price70, setPrice70] = useState<string[]>([]);
    const [priceBigBag, setPriceBigBag] = useState<string>();

    const [priceOne45, setPriceOne45] = useState<string>();
    const [priceOne70, setPriceOne70] = useState<string>();

    const [shipping, setShipping] = useState<string[]>([]);

    const [hasChanged, setHasChanged] = useState(false);

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

    const increaseEntry = (
        setKom: React.Dispatch<SetStateAction<number[]>>,
        setPrice: React.Dispatch<SetStateAction<string[]>>,
        setShip: React.Dispatch<SetStateAction<string[]>> | null,
        setGratis: React.Dispatch<SetStateAction<number[]>> | null
    ) => {
        setKom((prev) => [...prev, 0]);
        setPrice((prev) => [...prev, ""]);

        if (setShip)
            setShip((prev) => [...prev, ""]);

        if (setGratis)
            setGratis((prev) => [...prev, 0]);
    }

    const deleteEntry = (
        i: number,
        setKom: React.Dispatch<SetStateAction<number[]>>,
        setPrice: React.Dispatch<SetStateAction<string[]>>,
        setShip: React.Dispatch<SetStateAction<string[]>> | null,
        setGratis: React.Dispatch<SetStateAction<number[]>> | null,
    ) => {
        setKom((prev) => prev.filter((_, index) => index !== i));
        setPrice((prev) => prev.filter((_, index) => index !== i));

        if (setShip)
            setShip((prev) => prev.filter((_, index) => index !== i));

        if (setGratis)
            setGratis((prev) => prev.filter((_, index) => index !== i));
    }

    return (
        <div className="min-h-screen bg-[#0F1115] flex flex-col font-sans" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            {/* Header */}
            <Header />
            <div className="flex-1 p-4 sm:p-8 max-w-6xl mx-auto w-full">
                {/* Zaloga Section */}
                <Stock bag45={bag45} setBag45={setBag45} priceOne45={priceOne45} setPriceOne45={setPriceOne45} bag70={bag70} setBag70={setBag70} priceOne70={priceOne70} setPriceOne70={setPriceOne70} bigBag={bigBag} setBigBag={setBigBag} priceBigBag={priceBigBag} setPriceBigBag={setPriceBigBag} setHasChanged={setHasChanged} />
                {/* Cene 45l Section */}
                <Section45l kom45={kom45} setKom45={setKom45} price45={price45} setPrice45={setPrice45} shipping={shipping} setShipping={setShipping} deleteEntry={deleteEntry} increaseEntry={increaseEntry} setHasChanged={setHasChanged} />
                {/* Cene 70l Section */}
                <Section70l kom70={kom70} setKom70={setKom70} price70={price70} setPrice70={setPrice70} gratisKom={gratisKom} setGratisKom={setGratisKom} deleteEntry={deleteEntry} increaseEntry={increaseEntry} setHasChanged={setHasChanged} />

                {/* Shrani gumb */}
                <div className="flex justify-end mt-2 mb-8">
                    {
                        hasChanged && (
                            <button
                                type="button"
                                onClick={() => {
                                    setHasChanged(false);
                                    updateStock(bag45, 1);
                                    updateStock(bag70, 2);
                                    updateStock(bigBag, 3);
                                    updatePrice(priceOne45, 1);
                                    updatePrice(priceOne70, 2);
                                    updatePrice(priceBigBag, 3);

                                    updateDiscounts45(kom45, price45, shipping);
                                    updateDiscounts70(kom70, price70, gratisKom);
                                }}
                                className="inline-flex items-center gap-2 cursor-pointer bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                            >
                                💾 Shrani
                            </button>
                        )
                    }
                </div>
            </div>
        </div >
    );
}

export default Panel;
