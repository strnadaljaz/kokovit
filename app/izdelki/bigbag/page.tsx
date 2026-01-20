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
                            KOKOVIT BIG BAG
                        </h1>
                        <p className="text-2xl md:text-3xl text-[#F5F5DC] font-semibold">
                            🌱🥥 Zdaj tudi v BIG BAG izvedbi! 🥥🌱
                        </p>
                    </div>

                    {/* Product Image & Description */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="flex justify-center">
                            <img 
                                src="/bigbag-detailed.webp" 
                                alt="Kokovit bigBag substrat" 
                                className="w-full max-w-lg rounded-3xl shadow-2xl ring-4 ring-[#F5F5DC]/30"
                            />
                        </div>
                        
                        <div className="bg-[#F5F5DC] rounded-2xl p-8 shadow-2xl">
                            <h2 className="text-3xl font-bold text-[#2d5016] mb-6">
                                Potrebujete več substrata?
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Imamo rešitev ➝ BIG BAG vreča (1m³) Kokovit substrata – idealna za večje površine in profesionalno uporabo v vrtovih, visokih gredah ali rastlinjakih.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-lg text-gray-700">Naravna moč kokosa za rodovitna tla in bujne rastline</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-lg text-gray-700">Prijazno okolju in pripravljeno za takojšnjo uporabo</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">✅</span>
                                    <p className="text-lg text-gray-700">Idealno za večje površine in profesionalno uporabo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-[#F5F5DC] rounded-2xl p-10 shadow-2xl mb-16">
                        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">
                            🚜 Pridi in odpelji JUMBO KOKOVIT 🚜
                        </h2>
                        <p className="text-2xl font-bold text-center text-[#2d5016] mb-8">
                            Akcija, ki se splača!
                        </p>
                        
                        <div className="max-w-2xl mx-auto space-y-6 mb-8">
                            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                                <p className="text-2xl font-semibold text-gray-800 mb-4">
                                    💰 Cena
                                </p>
                                <p className="text-4xl font-bold text-[#4CAF50]">
                                    125€ + DDV / 1m³
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg border-4 border-[#4CAF50]">
                                <p className="text-2xl font-semibold text-gray-800 mb-4">
                                    🎁 Posebna ponudba
                                </p>
                                <p className="text-3xl font-bold text-red-600 mb-2">
                                    Ob nakupu 2 vreč ➝ 3. GRATIS!
                                </p>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                                <p className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                                    <span className="text-2xl">📍</span>
                                    Lasten prevzem možen v Ormožu po predhodnem dogovoru po telefonu
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
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
                                    href="tel:+386030333167" 
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
                            💪 Zakaj izbrati KOKOVIT JUMBO?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">Idealno za večje površine in profesionalno uporabo</p>
                            </div>
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
                                <p className="text-lg text-gray-700">Ekološko in trajnostno</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">pH vrednost 6,5 – 7,5</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <p className="text-lg text-gray-700">Pripravljeno za takojšnjo uporabo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
