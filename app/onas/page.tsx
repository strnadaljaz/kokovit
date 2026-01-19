"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Onas() {
    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-b from-[#4CAF50] to-[#6b4226] min-h-screen">
                <div className="max-w-5xl mx-auto px-8 py-20">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#F5F5DC] text-center mb-12 drop-shadow-lg">
                        O nas
                    </h1>

                    <div className="flex justify-center mb-16">
                        <img 
                            src="/onas.webp" 
                            alt="O nas - Kokovit" 
                            className="w-full max-w-3xl rounded-2xl shadow-2xl border-4 border-[#F5F5DC]/20 hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="space-y-12 text-[#F5F5DC]">
                        <section className="space-y-6">
                            <p className="text-lg md:text-xl leading-relaxed">
                                Podjetje Gregor Fištravec s.p., FIGRE je bilo ustanovljeno leta 2009 in se je v začetku ukvarjalo z urejanjem okolice ter vzdrževanjem zelenih površin. Naša strast do narave in zelenih površin nas je skozi leta vodila pri natančnem negovanju okolja in ustvarjanju lepih in urejenih prostorov. Z bogatimi izkušnjami, ki smo jih pridobili na tem področju, smo si pridobili zaupanje številnih strank in postali prepoznavni v svoji panogi.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Nova pot - Kokovit substrat
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed">
                                Leta 2021 smo se odločili za korak naprej in se osredotočili na razvoj lastnega produkta, ki temelji na naših dolgoletnih izkušnjah v vrtnarstvu. Tako je nastal Kokovit substrat, inovativna mešanica, namenjena visokim gredam, vrtnarjenju in rastlinjakom. Kokovit substrat je naš zaščiten izdelek in blagovna znamka, ki zagotavlja vrhunske rezultate pri gojenju rastlin.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                V izdelek smo vložili vso svoje znanje in izkušnje, da bi omogočili ljubiteljem vrtnarjenja ter profesionalnim vrtnarjem dostop do kakovostnega in naravnega substrata, ki spodbuja zdravo rast rastlin in zagotavlja trajnostne rezultate. Naš substrat je narejen iz naravnih materialov, ki so prijazni do okolja, hkrati pa nudijo optimalne pogoje za rastlinje.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Majhno podjetje, ki se osredotoča na kvaliteto
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed">
                                Čeprav smo majhno podjetje, smo zelo ponosni na svojo specializacijo in izjemno pozornost do detajlov, ki jo vlagamo v razvoj naših izdelkov. Naša filozofija je, da kakovost ne zahteva velikih številk, ampak predanost, strokovnost in strast do narave. Vsak naš izdelek je rezultat natančne raziskave in testiranja, s poudarkom na trajnostni in ekološki naravnanosti.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                Naš cilj je, da Kokovit substrat postane vaša prva izbira za visoke grede in vrtnarjenje, ne glede na to, ali ste začetnik ali izkušen vrtnar. Smo predani temu, da vam pomagamo pri rasti vaših rastlin in ustvarjanju zdravih, čudovitih vrtnarskih okolij.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
