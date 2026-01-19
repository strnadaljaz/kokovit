"use client";
import { useRouter } from "next/navigation";
import openNewPage from "../Functions/openNewPage";

export default function About() {
    const router = useRouter(); 

    return (
        <div className="lg:mt-0 mt-[50rem] min-h-screen flex items-center justify-center px-8 py-20">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center animate-slide-up">
                <div className="flex justify-center order-2 md:order-1">
                    <img 
                        src="grede.webp" 
                        alt="grede" 
                        className="w-full max-w-md rounded-3xl shadow-2xl ring-4 ring-[#F5F5DC]/30 hover:scale-105 transition-transform duration-500"
                    /> 
                </div>
                
                <div className="space-y-6 order-1 md:order-2">
                    <h2 className="text-5xl md:text-7xl font-bold text-[#F5F5DC] drop-shadow-lg">
                        O nas
                    </h2>
                    <p className="text-xl md:text-2xl text-[#F5F5DC]/95 leading-relaxed font-light">
                        Podjetje Gregor Fištravec s.p., FIGRE je bilo ustanovljeno leta 2009. Z bogatimi izkušnjami v vrtnarstvu smo leta 2021 razvili Kokovit substrat - našo zaščiteno blagovno znamko, namenjeno visokim gredam, vrtnarjenju in rastlinjakom.
                    </p>
                    <p className="text-xl md:text-2xl text-[#F5F5DC]/90 leading-relaxed font-light">
                        Naš substrat je narejen iz naravnih materialov in zagotavlja optimalne pogoje za zdravo rast rastlin. Čeprav smo majhno podjetje, smo ponosni na svojo specializacijo in pozornost do detajlov.
                    </p>
                    <button className="mt-6 px-8 py-4 bg-[#F5F5DC] text-[#2d5016] font-semibold text-lg rounded-lg shadow-lg hover:bg-[#F5F5DC]/90 hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => openNewPage(router, "/onas")}>
                        Več o nas
                    </button>
                </div>
            </div>
        </div>
    );
}
