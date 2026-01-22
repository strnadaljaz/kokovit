"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function politikaZasebnosti() {
    return (
        <div className="min-h-screen bg-[#F5F5DC]">
            <Navbar />
            <div className="max-w-2xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2d5016] text-center mb-4">Politika zasebnosti</h1>
                <p className="text-lg mb-6">Ta politika zasebnosti pojasnjuje, katere osebne podatke zbiramo, kako jih uporabljamo in katere pravice imate v zvezi z vašimi podatki. Stran upravlja Kokovit / FIGRE, Gregor Fištravec s.p.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Kaj zbiramo</h2>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                    <li>Kontaktne podatke, ki nam jih posredujete prostovoljno (ime, elektronski naslov, telefonska številka) pri izpolnjevanju obrazcev ali pošiljanju povpraševanja.</li>
                    <li>Podatke, ki jih avtomatsko zbirajo piškotki in podobne tehnologije (IP naslov, podatki o brskalniku, podatki o obnašanju na strani).</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Zakaj zbiramo podatke</h2>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                    <li>Za obdelavo vaših povpraševanj in komunikacijo z vami.</li>
                    <li>Za izboljšanje delovanja in vsebine spletne strani.</li>
                    <li>Za izpolnjevanje zakonskih obveznosti, kjer je to potrebno.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Piškotki</h2>
                <p className="mb-4">Naša spletna stran uporablja piškotke za osnovno delovanje in za analitiko. Piškotke lahko onemogočite v nastavitvah vašega brskalnika, vendar to lahko vpliva na delovanje spletne strani.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Posredovanje podatkov tretjim osebam</h2>
                <p className="mb-4">Osebnih podatkov ne prodajamo. Podatke lahko posredujemo zunanjim izvajalcem, ki nam pomagajo pri delovanju strani (npr. ponudniki gostovanja, orodja za analitiko), vedno v obsegu, ki je potreben in ob upoštevanju ustreznih varnostnih ukrepov.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Varovanje podatkov</h2>
                <p className="mb-4">Uporabljamo ustrezne tehnične in organizacijske ukrepe za zaščito vaših osebnih podatkov pred nepooblaščenim dostopom, spreminjanjem ali izbrisanjem.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Vaše pravice</h2>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                    <li>Pravica do dostopa do podatkov.</li>
                    <li>Pravica do popravka netočnih podatkov.</li>
                    <li>Pravica do izbrisa (v mejah, ki jih dovoljuje zakon).</li>
                    <li>Pravica do omejitve obdelave in prenosljivosti podatkov.</li>
                    <li>Pravica do ugovora obdelavi podatkov v namene neposrednega trženja.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Kontakt</h2>
                <p className="mb-6">Za vprašanja o tej politiki zasebnosti ali uveljavljanje vaših pravic nas kontaktirajte na: <a className="text-[#2d5016] underline" href="mailto:kokovit.info@gmail.com">kokovit.info@gmail.com</a> ali po telefonu <a className="text-[#2d5016]" href="tel:+386030333167">030 333 167</a>.</p>

                <p className="text-sm text-gray-600">Datum zadnje posodobitve: 22. januar 2026</p>
            </div>
            <Footer />
        </div>
    );
}
