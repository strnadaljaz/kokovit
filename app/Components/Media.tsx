"use client";
//
export default function Media() {
    return (
        <section className="px-4 md:px-8 py-12 md:py-16">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="bg-gradient-to-br from-[#F5F5DC]/20 to-[#F5F5DC]/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-[#F5F5DC]/30 shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <svg className="w-12 h-12 text-[#F5F5DC]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5DC]">
                                Sledite nam
                            </h3>
                        </div>
                        <p className="text-lg md:text-xl text-[#F5F5DC]/95 mb-6 leading-relaxed">
                            Za sprotne novice o dostavah, nasvete za vrtnarjenje in posebne ponudbe
                        </p>
                        <a
                            href="https://www.facebook.com/kokovitsubstrat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-[#F5F5DC] text-[#2d5016] font-semibold rounded-lg shadow-lg hover:bg-[#F5F5DC]/90 hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Sledi
                        </a>
                    </div>

                    <div className="bg-gradient-to-br from-[#F5F5DC]/20 to-[#F5F5DC]/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-[#F5F5DC]/30 shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                            <svg className="w-12 h-12 text-[#F5F5DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5DC]">
                                Naročite KOKOVIT
                            </h3>
                        </div>
                        <p className="text-lg md:text-xl text-[#F5F5DC]/95 mb-6 leading-relaxed">
                            Obiščite našo spletno trgovino in si oglejte celotno ponudbo izdelkov
                        </p>
                        <a
                            href="/trgovina"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-[#F5F5DC] text-[#2d5016] font-semibold rounded-lg shadow-lg hover:bg-[#F5F5DC]/90 hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Obišči trgovino
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
