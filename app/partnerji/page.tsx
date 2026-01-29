"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Partnerji () {
    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-b from-[#4CAF50] to-[#6b4226] min-h-screen">
                <div className="max-w-5xl mx-auto px-8 py-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#F5F5DC] text-center mb-12 drop-shadow-lg">
                        Poslovni partnerji
                    </h1>

                    <div className="flex justify-center mb-16">
                        <img 
                            src="/partnerji.webp" 
                            alt="Poslovni partnerji - Kokovit" 
                            className="w-full max-w-3xl rounded-2xl shadow-2xl border-4 border-[#F5F5DC]/20 hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="space-y-12 text-[#F5F5DC]">
                        <section className="space-y-6">
                            <p className="text-lg md:text-xl leading-relaxed">
                                Da bi vam bil KOKOVIT substrat 70 L še lažje dostopen, smo vzpostavili sodelovanje z izbranimi in zaupanja vrednimi trgovci v vaši bližini.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                Naš visokokakovosten, naraven substrat za visoke grede, vrtove, rastlinjake in okrasne zasaditve lahko kupite tudi pri naslednjih poslovnih partnerjih:
                            </p>
                        </section>

                        <section className="bg-[#F5F5DC]/10 rounded-2xl p-8 backdrop-blur-sm">
                            <ul className="list-disc list-inside space-y-4 text-lg md:text-xl">
                                <li>
                                    <a 
                                        href="https://www.google.com/maps/place/Osmark+Trgovsko+Podjetje+D.O.O./@46.4242888,16.0482452,17z/data=!3m1!4b1!4m6!3m5!1s0x476f5c7c2d45c577:0x96d758d00a9463a7!8m2!3d46.4242851!4d16.0508201!16s%2Fg%2F1tgj7mw2?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                                        className="underline"
                                        target="_blank"
                                    >Osmark Podgorci</a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/maps/place/Rozgon+d.o.o.,+trgovina+Ljutomer%C4%8Dan/@46.5281064,16.1896035,17z/data=!3m1!4b1!4m6!3m5!1s0x476f45d7d16801c5:0xd4f2a5b93aac7256!8m2!3d46.5281027!4d16.1921784!16s%2Fg%2F1hc3xqsgz?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                                        className="underline"
                                        target="_blank"
                                    >Rozgon Ljutomer</a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/maps/place/SAM+Ormo%C5%BE/@46.4099334,16.157438,17z/data=!3m1!4b1!4m6!3m5!1s0x476f5a7c006c6bd9:0x88210243c4b45947!8m2!3d46.4099297!4d16.1600129!16s%2Fg%2F11b7lj0ts7?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                                        className="underline"
                                        target="_blank"
                                    >Sam PE Ormož</a>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <p className="text-lg md:text-xl leading-relaxed">
                                Z nakupom pri naših partnerjih dobite preverjeno kakovost, hiter dostop do izdelka in strokovno ponudbo na enem mestu.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed font-semibold">
                                Izberite KOKOVIT substrat 70 L in poskrbite za boljšo rast ter bogatejši pridelek 🌱
                            </p>
                        </section>

                        <section className="bg-[#F5F5DC]/10 rounded-2xl p-8 backdrop-blur-sm">
                            <p className="text-lg md:text-xl leading-relaxed italic">
                                Zahvaljujemo se našim poslovnim partnerjem za zaupanje in uspešno sodelovanje ter vsem strankam za podporo pri razvoju kakovostnih izdelkov za vaš vrt 🌱
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>        
    );
} 
