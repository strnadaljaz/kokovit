"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import openNewPage from "../Functions/openNewPage";
import { useProducts } from "@/Context/ProductsContext";

export default function Hero() {
    const { products } = useProducts();

    if (products.length === 0) return <p>Loading…</p>;

    const router = useRouter();

    return (
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-4 md:px-8 py-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#F5F5DC] via-[#FFE4B5] to-[#F5F5DC] bg-clip-text text-transparent drop-shadow-lg">
                Kokovit — naraven substrat, ki dela namesto vas
            </h1>

            <div id="Domov" className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-6 lg:gap-8 max-w-6xl">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="w-full md:w-[30%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up mt-6" onClick={() => openNewPage(router, `/izdelki/${product.name}`)}
                    >
                        <Image src={`/${product.image}`} alt={product.name} width={500} height={500} className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain" />
                        {
                            product.inStock ? (
                                <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6">✅ <u>{product.name} Kokovit substrat</u></p>

                            ) : (
                                <div>
                                    <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6">❌ <u>{product.name} Kokovit substrat</u></p>
                                    <p className="text-red-400 text-lg sm:text-xl font-bold text-center mt-2 uppercase tracking-wide">
                                        Ni na zalogi!
                                    </p>
                                </div>
                            )
                        }

                    </div>
                ))}
            </div>
        </div >
    );
}
