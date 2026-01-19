"use client"
import { useRouter } from "next/navigation";
import openNewPage from "../Functions/openNewPage";

export default function Hero() {
    const router = useRouter();
    
    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col items-center justify-center px-8">
            <p className="text-[#F5F5DC] text-3xl font-bold mb-12 text-center animate-fade-in translate-y-[7rem] sm:translate-y-[2rem]">V kar treh različnih <u><b>OBLIKAH!</b></u></p>
            <div id="Domov" className="lg:flex mt-[50rem] lg:mt-0 items-center justify-center w-full gap-8 max-w-6xl">
                <div className="lg:w-[30%] w-[100%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up" onClick={() => openNewPage(router, "/izdelki/70l")}>
                    <img src="70l.webp" alt="70l" className="w-full h-[500px] object-contain" /> 
                    <p className="text-[#F5F5DC] text-xl font-semibold text-center mt-[-5rem] lg:mt-6">70l vreče Kokovit substrata</p>
                </div>
                <div className="lg:w-[30%] w-[100%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up [animation-delay:150ms]" onClick={() => openNewPage(router, "/izdelki/45l")}>
                    <img src="45l.webp" alt="45l" className="w-full h-[500px] object-contain" />
                    <p className="text-[#F5F5DC] text-xl font-semibold text-center mt-[-5rem] lg:mt-6">45l vreče Kokovit substrata</p>
                </div>
                <div className="lg:w-[30%] w-[100%] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up [animation-delay:300ms]" onClick={() => openNewPage(router, "/izdelki/jumbo")}>
                    <img src="jumbo.webp" alt="jumbo" className="w-full h-[500px] object-contain" />
                    <p className="text-[#F5F5DC] text-xl font-semibold text-center mt-[-2rem] lg:mt-6">Jumbo vreče Kokovit substrata</p>
                </div>
            </div>
        </div>
    );
}
