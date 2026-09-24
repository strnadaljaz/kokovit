"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export type Product = {
    name: string,
    img: string,
    sizes: string;
    price: string
};

const getProducts = async (setProducts: React.Dispatch<React.SetStateAction<Product[]>>) => {

    const supabase = createClient();

    const { data, error } = await supabase
        .from('merch')
        .select('name, img, sizes, price')

    if (error) {
        console.error(error);
        return;
    }
    setProducts(data);
}

const Merch = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts(setProducts);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-[#4CAF50] to-[#6b4226]">
                <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20 bg-gradient-to-b from-[#4CAF50] to-[#6b4226]">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-5xl font-bold text-[#F5F5DC] drop-shadow-lg md:text-7xl">
                            KOKOVIT KOLEKCIJA
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-[#F5F5DC]/90 md:text-xl">
                            Izberite svoj najljubši KOKOVIT izdelek.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products &&
                            products.map((product, i) => (
                                <div
                                    key={i}
                                    className="group overflow-hidden rounded-2xl border border-[#F5F5DC]/30 bg-[#F5F5DC] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <div className="flex h-72 items-center justify-center overflow-hidden bg-white/70 p-6">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4 flex items-start justify-between gap-4">
                                            <h2 className="text-2xl font-bold text-[#2d5016]">
                                                {product.name}
                                            </h2>
                                            <span className="whitespace-nowrap text-xl font-bold text-[#6b4226]">
                                                {product.price}€
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between gap-4 border-t border-[#2d5016]/15 pt-4">
                                            <span className="text-sm font-semibold uppercase tracking-wider text-[#6b4226]">
                                                Velikosti
                                            </span>
                                            <span className="rounded-full bg-[#4CAF50]/15 px-4 py-2 text-sm font-bold text-[#2d5016]">
                                                {product.sizes}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Merch;
