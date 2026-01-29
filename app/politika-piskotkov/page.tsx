"use clint";

"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PolitikaPiskotkov() {
    return (
        <div className="min-h-screen bg-[#F5F5DC]">
            <Navbar />
            <div className="max-w-2xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2d5016] text-center mb-4">POLITIKA PIŠKOTKOV</h1>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">1. Kaj so piškotki</h2>
                <p className="mb-4">Piškotki so majhne besedilne datoteke, ki jih spletna stran shrani na uporabnikovo napravo za boljše delovanje in uporabniško izkušnjo.</p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">2. Katere piškotke uporabljamo</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li><strong>a) Nujni piškotki</strong> – Ti piškotki so potrebni za pravilno delovanje spletne strani in jih ni mogoče izklopiti.</li>
                </ul>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">3. Upravljanje piškotkov</h2>
                <p className="mb-4">Uporabnik lahko piškotke sprejme, zavrne ali izbriše v nastavitvah svojega brskalnika. Z omejitvijo piškotkov je lahko delovanje spletne strani omejeno.</p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">4. Trajanje piškotkov</h2>
                <p className="mb-4">Nekateri piškotki se izbrišejo ob zaprtju brskalnika, drugi pa ostanejo shranjeni določen čas ali do preklica.</p>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">5. Spremembe politike piškotkov</h2>
                <p className="mb-4">Upravljavec si pridržuje pravico do spremembe politike piškotkov. Veljavna je verzija, objavljena na spletni strani.</p>
                <p className="text-sm text-gray-600">Datum zadnje posodobitve: 26. januar 2026</p>
            </div>
            <Footer />
        </div>
    );
}

