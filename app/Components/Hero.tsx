"use client"
import { useRouter } from "next/navigation";
import openNewPage from "../Functions/openNewPage";

export default function Hero() {
    const router = useRouter();
    
    return (
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-4 md:px-8 py-12">
            <img src="oblacko.webp" alt="logo" className="h-[11rem] md:h-[20rem] mb-8 animate-float hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer drop-shadow-2xl"/>
            <p className="text-[#F5F5DC] text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
                V kar treh različnih <u><b>OBLIKAH!</b></u>
            </p>
            <div id="Domov" className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-6 lg:gap-8 max-w-6xl">
                <div className="w-full md:w-[30%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up" onClick={() => openNewPage(router, "/izdelki/70l")}>
                    <img src="70l.webp" alt="70l" className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain" /> 
                    <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6 underline">70l Kokovit substrat</p>
                </div>
                <div className="w-full md:w-[30%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up [animation-delay:150ms]" onClick={() => openNewPage(router, "/izdelki/45l")}>
                    <img src="45l.webp" alt="45l" className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain" />
                    <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6 underline">45l Kokovit substrat</p>
                </div>
                <div className="w-full md:w-[30%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up [animation-delay:300ms]" onClick={() => openNewPage(router, "/izdelki/bigbag")}>
                    <img src="bigbag.webp" alt="Big Bag" className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain" />
                    <p className="text-[#F5F5DC] text-2xl sm:text-2xl font-semibold text-center mt-4 md:mt-6 underline">Big Bag Kokovit substrat</p>
                </div>
            </div>
        </div>
    );
}
