import Navbar from "@/app/Components/Navbar"
import Footer from "../Components/Footer"
import Image from "next/image"

export default function Uporaba () {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-[#4CAF50] to-[#6b4226]">
                <div className="max-w-5xl mx-auto px-8 py-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5DC] text-center mb-12 drop-shadow-lg">
                        🌱 KOKOVIT substrat – naravna osnova za zdrav in bogat pridelek
                    </h1>
                    <div className="flex justify-center mb-8">
                        <Image src="/uporaba.webp" alt="KOKOVIT substrat" width={1600} height={600} className="w-full max-w-3xl rounded-2xl shadow-2xl object-cover border-4 border-[#F5F5DC]/20" />
                    </div>
                    <div className="bg-[#f5f5dc] rounded-2xl p-8 shadow-2xl mb-12">
                        <p className="text-lg md:text-xl text-[#2d5016] leading-relaxed">
                            KOKOVIT substrat je visokokakovosten, naraven substrat na osnovi kokosovih vlaken, obogaten s hranili za eno celotno rastno sezono. Namenjen je vsem, ki želite manj dela, boljšo strukturo tal in vidno boljše rezultate na vrtu, v visokih gredah ali rastlinjaku. Primeren je tako za izkušene vrtnarje kot tudi začetnike, saj omogoča takojšnje sajenje ali setev brez dodatne priprave.
                        </p>
                    </div>

                    <div className="space-y-12 text-[#F5F5DC]">
                        <section className="bg-[#F5F5DC]/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">✅ Zakaj izbrati KOKOVIT substrat?</h2>
                            <ul className="space-y-3 text-lg md:text-xl">
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">🌿</span>
                                    <span>Naravna sestava – brez umetnih primesi</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">🌱</span>
                                    <span>Vsebuje hranila za eno rastno sezono</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">💧</span>
                                    <span>Odlično zadržuje vlago in zmanjšuje potrebo po zalivanju</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">🌾</span>
                                    <span>Izboljšuje strukturo tal in obnavlja zbita tla</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">🍅</span>
                                    <span>Spodbuja zdrav razvoj korenin in bujno rast rastlin</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">🍂</span>
                                    <span>Deluje tudi kot zastirka, ki ščiti tla pred izsuševanjem</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">🔄</span>
                                    <span>Možnost mešanja z drugimi substrati ali vrtno zemljo</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="flex-shrink-0">⚖️</span>
                                    <span>Optimalna pH vrednost: 6,5 – 7,5</span>
                                </li>
                            </ul>
                        </section>

                        <section className="bg-[#F5F5DC]/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">🌼 Področja uporabe</h2>
                            <p className="text-lg md:text-xl mb-4 leading-relaxed">KOKOVIT substrat je vsestransko uporaben in primeren za:</p>
                            <ul className="list-disc space-y-2 text-lg md:text-xl ml-8 pl-2">
                                <li>visoke grede</li>
                                <li>vrtove in gredice</li>
                                <li>rastlinjake</li>
                                <li>okrasne grede</li>
                                <li>sajenje zelenjave, zelišč, okrasnih rastlin in lončnic</li>
                            </ul>
                        </section>

                        <section className="bg-[#F5F5DC]/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">🛠️ Navodila za uporabo</h2>
                            
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">🌱 Visoke grede</h3>
                                    <p className="text-lg md:text-xl mb-4 leading-relaxed">
                                        Substrat uporabite kot zgornji sloj, v katerega sadite ali sejete neposredno. Priporočena debelina sloja: 15–20 cm
                                    </p>
                                    <div className="bg-[#F5F5DC]/20 rounded-xl p-4">
                                        <h4 className="text-xl font-bold mb-2">Poraba:</h4>
                                        <p className="text-lg md:text-xl">👉 za 1 m² površine potrebujete približno 3–4 vreče (70 L)</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">🌿 Vrtovi in rastlinjaki</h3>
                                    <p className="text-lg md:text-xl mb-3 font-semibold">Če je zemlja zbita:</p>
                                    <ol className="list-decimal space-y-2 text-lg md:text-xl ml-8 pl-2 mb-4">
                                        <li>Substrat plitvo vmešajte v obstoječo vrtno zemljo</li>
                                        <li>Nato ga posujte še po vrhu v debelini vsaj 5 cm</li>
                                    </ol>
                                    <p className="text-lg md:text-xl mb-2 font-semibold">S tem:</p>
                                    <ul className="list-disc space-y-2 text-lg md:text-xl ml-8 pl-2 mb-4">
                                        <li>izboljšate strukturo tal</li>
                                        <li>zagotovite hranila</li>
                                        <li>dobite dodatno zastirko</li>
                                    </ul>
                                    <p className="text-lg md:text-xl leading-relaxed mb-3">Sadite ali sejete direktno v substrat.</p>

                                    <div className="bg-[#F5F5DC]/20 rounded-xl p-4">
                                        <h4 className="text-xl font-bold mb-2">Poraba:</h4>
                                        <p className="text-lg md:text-xl">👉 za 1 m² površine potrebujete približno 1 vrečo (70 L)</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">🍂 Uporaba kot zastirka</h3>
                                    <p className="text-lg md:text-xl mb-3 leading-relaxed">Substrat lahko uporabite tudi izključno kot zastirko:</p>
                                    <ul className="list-disc space-y-2 text-lg md:text-xl ml-8 pl-2 mb-4">
                                        <li>Debelina: vsaj 5 cm</li>
                                    </ul>
                                    <div className="bg-[#F5F5DC]/20 rounded-xl p-4">
                                        <h4 className="text-xl font-bold mb-2">Poraba:</h4>
                                        <p className="text-lg md:text-xl">👉 za 0,75 m² površine potrebujete približno 1 vrečo (70 L)</p>
                                    </div>
 
                                </div>
                            </div>
                        </section>

                        <div className="bg-[#F5F5DC]/40  rounded-2xl p-8 shadow-2xl border-4 border-[#F5F5DC]/20">
                            <p className="text-2xl md:text-3xl font-bold mb-4 text-center">🌞 Rezultat, ki ga boste opazili</p>
                            <p className="text-lg md:text-xl text-center leading-relaxed mb-6">
                                Manj plevela, boljša zadržanost vlage, močnejše rastline in bogatejši pridelek z manj truda.
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-center">
                                🌱 KOKOVIT substrat – naravna rešitev za zdrav vrt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
