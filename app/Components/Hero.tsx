"use client"
import { useRouter } from "next/navigation";
import openNewPage from "../Functions/openNewPage";

export default function Hero() {
    const router = useRouter();

    return (
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-4 md:px-8 py-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#F5F5DC] via-[#FFE4B5] to-[#F5F5DC] bg-clip-text text-transparent drop-shadow-lg">
                Kokovit — naravna rešitev za vaš vrt
            </h1>

            <div id="Domov" className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-6 lg:gap-8 max-w-6xl">
                <div className="w-full md:w-[30%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up [animation-delay:150ms]" onClick={() => openNewPage(router, "/izdelki/45l")}>
                    <img src="45l.webp" alt="45l" className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain" />
                    <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6 underline">45l Kokovit substrat</p>
                </div>
                <div className="w-full md:w-[30%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up" onClick={() => openNewPage(router, "/izdelki/70l")}>
                    <img src="70l.webp" alt="70l" className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain" /> 
                    <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6 underline">70l Kokovit substrat</p>
                </div>
                <div className="w-full md:w-[30%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up [animation-delay:300ms]" onClick={() => openNewPage(router, "/izdelki/bigbag")}>
                    <img src="bigbag.webp" alt="Big Bag" className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain" />
                    <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6 underline">Big Bag Kokovit substrat</p>
                </div>
            </div>
        </div>
    );
}
