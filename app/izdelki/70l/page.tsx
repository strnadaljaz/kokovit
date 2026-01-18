"use client";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

export default function Page() {
    return(
        <div>
            <Navbar />
            <div className="bg-gradient-to-b from-[#4CAF50] to-[#6b4226] min-h-screen">
                <div className="max-w-7xl mx-auto px-8 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-[#F5F5DC] mb-6 drop-shadow-lg">
                            KOKOVIT 70L
                        </h1>
                        <p className="text-2xl md:text-3xl text-[#F5F5DC] font-semibold">
                            🌱🥥 Top izbira za vaš vrt! 🥥🌱
                        </p>
                    </div>

                    {/* Product Image & Description */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="flex justify-center">
                            <img 
                                src="/70l-detailed.webp" 
                                alt="Kokovit 70L substrat" 
                                className="w-full max-w-lg rounded-3xl shadow-2xl ring-4 ring-[#F5F5DC]/30"
                            />
                        </div>
                        
                        <div className="bg-[#F5F5DC] rounded-2xl p-8 shadow-2xl">
                            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
                                Kako poskrbeti za manj dela in več pridelka?
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Z KOKOVIT substratom 70L – naraven substrat iz kokosovih vlaken, šote in organskih snovi, idealen za visoke grede, vrtove, rastlinjake, okrasne grede in lončnice!
                            </p>
                            <div className="text-2xl font-bold text-[#4CAF50]">
                                Cena: 12,99€ (10,65€ + DDV)
                            </div>
                        </div>
                        
                    </div>

                    {/* Akcija Section */}
                    <div className="bg-[#F5F5DC] rounded-2xl p-10 shadow-2xl mb-16">
                        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
                            🔥🔥🔥 VELIKA AKCIJA 🔥🔥🔥
                        </h2>
                        <p className="text-2xl font-bold text-center text-[#2d5016] mb-8">
                            🎁 NAROČI VEČ – PREJMI GRATIS!
                        </p>
                        
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <p className="text-xl font-semibold text-gray-800 mb-2">
                                    ✍️ 10 kom + 1 GRATIS
                                </p>
                                <p className="text-2xl font-bold text-[#4CAF50] mb-2">
                                    120,78€ (99€ + DDV)
                                </p>
                                <p className="text-lg text-green-600 font-semibold">
                                    🚚 BREZPLAČNA DOSTAVA po celi Sloveniji!
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <p className="text-xl font-semibold text-gray-800 mb-2">
                                    ✍️ 15 kom + 2 GRATIS
                                </p>
                                <p className="text-2xl font-bold text-[#4CAF50] mb-2">
                                    175,68€ (144€ + DDV)
                                </p>
                                <p className="text-lg text-green-600 font-semibold">
                                    🚚 BREZPLAČNA DOSTAVA po celi Sloveniji!
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border-4 border-[#4CAF50]">
                                <p className="text-xl font-semibold text-gray-800 mb-2">
                                    ✍️ PALETA 33 kom + 5 GRATIS
                                </p>
                                <p className="text-2xl font-bold text-[#4CAF50] mb-2">
                                    366€ (300€ + DDV)
                                </p>
                                <p className="text-lg text-green-600 font-semibold">
                                    🚚 BREZPLAČNA DOSTAVA po celi Sloveniji!
                                </p> 
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-lg text-gray-700 mb-4">
                                📦 Dostave ponovno začnemo od <span className="font-bold">2. Februarja 2026</span> po celi Sloveniji 🇸🇮
                            </p>
                            <p className="text-xl font-semibold text-[#2d5016] mb-8">
                                ⏩ Pohiti in si zagotovi svoj KOKOVIT substrat za SUPER VRT! 🥦🥕🍅🍆
                            </p>
                            
                            {/* Order CTA */}
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <a 
                                    href="/povprasevanje" 
                                    className="px-10 py-4 bg-[#4CAF50] text-white font-bold text-xl rounded-lg shadow-lg hover:bg-[#45a049] hover:scale-105 transition-all duration-300 cursor-pointer"
                                >
                                    📝 Naročite tukaj
                                </a>
                                <span className="text-xl font-semibold text-gray-600">ali pa</span>
                                <a 
                                    href="tel:+38630333167" 
                                    className="px-10 py-4 bg-[#2d5016] text-[#F5F5DC] font-bold text-xl rounded-lg shadow-lg hover:bg-[#3d6020] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    Pokličite: 030 333 167
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-[#F5F5DC] rounded-2xl p-10 shadow-2xl">
                        <h2 className="text-3xl font-bold text-[#2d5016] mb-8 text-center">
                            💪 Zakaj izbrati KOKOVIT?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">Vsebuje hranila za eno rastno sezono</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">Odlično zadržuje vlago</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">Obnavlja tla in deluje kot zastirka</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">Naraven, brez primesi</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">Poraba: 1 vreča (70L) za cca. 1m²</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">pH vrednost 6,5 – 7,5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
