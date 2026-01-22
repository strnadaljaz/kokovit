"use client";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function splosniPogoji() {
    return (
        <div className="min-h-screen bg-[#F5F5DC]">
            <Navbar />
            <div className="max-w-2xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2d5016] text-center mb-4">Splošni pogoji</h1>
                <p className="text-lg mb-6">Splošni pogoji urejajo uporabo spletne strani Kokovit in razmerje med uporabnikom ter lastnikom strani (Kokovit / FIGRE, Gregor Fištravec s.p.). Z uporabo strani soglašate s temi pogoji.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">1. Obseg in sprejemanje pogojev</h2>
                <p className="mb-4">Ti pogoji veljajo za vse uporabnike spletne strani. Lastnik si pridružuje pravico do sprememb pogojev; spremembe so veljavne ob objavi na strani.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">2. Uporaba vsebin</h2>
                <p className="mb-4">Vsebine na spletni strani (besedila, slike, logotipi) so last lastnika ali pa so uporabljene z dovoljenjem. Prepovedano je nepooblaščeno kopiranje, shranjevanje ali ponovna uporaba brez pisnega soglasja.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">3. Naročanje in dobava</h2>
                <p className="mb-4">Pogodbeni pogoji za naročila (cene, dobavni roki, plačila) so navedeni pri posameznih izdelkih ali v povpraševanju. Morebitne spremembe naročila je potrebno takoj sporočiti.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">4. Odgovornost</h2>
                <p className="mb-4">Lastnik si prizadeva za pravilnost informacij, vendar ne prevzema odgovornosti za morebitne napake, zamude ali posledice uporabe informacij s strani uporabnika. Odgovornost za morebitno uporabo izdelkov in nasvetov je na strani uporabnika.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">5. Varstvo osebnih podatkov</h2>
                <p className="mb-4">Obdelava osebnih podatkov poteka v skladu s <a href="/politika-zasebnosti" className="underline">Politiko zasebnosti</a>, ki je na voljo na spletni strani. Uporabniki imajo pravice do dostopa, popravka in izbrisa svojih podatkov v skladu z zakonodajo.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">6. Reševanje sporov</h2>
                <p className="mb-4">Za vse morebitne spore velja slovenska zakonodaja. Morebitne spore bosta stranki reševali sporazumno, v nasprotnem primeru pa je pristojno sodišče v Ormožu.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">7. Kontakt</h2>
                <p className="mb-6">Za vsa vprašanja glede splošnih pogojev nas kontaktirajte na: <a className="text-[#2d5016] underline" href="mailto:kokovit.info@gmail.com">kokovit.info@gmail.com</a> ali po telefonu <a className="text-[#2d5016]" href="tel:+386030333167">030 333 167</a>.</p>

                <p className="text-sm text-gray-600">Datum zadnje posodobitve: 22. januar 2026</p>
            </div>
            <Footer />
        </div>
    );
}
