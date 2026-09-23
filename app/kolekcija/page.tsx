"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Product = {
    id: number,
    name: string,
    img: string,
    price: string
};

const getProducts = async (setProducts: React.Dispatch<React.SetStateAction<Product[]>>) => {

    const supabase = createClient();

    const { data, error } = await supabase
        .from('merch')
        .select('*')

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
        <div className="bg-gradient-to-b from-[#4CAF50] to-[#6b4226] min-h-screen">
            <Navbar />
            <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products &&
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="border-solid border-3 border-sky-500 h-10 w-auto"
                        >{product.name}</div>
                    ))
                }
            </main>
            <Footer />
        </div>
    );
}

export default Merch;
