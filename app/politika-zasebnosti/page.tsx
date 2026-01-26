"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function politikaZasebnosti() {
    return (
        <div className="min-h-screen bg-[#F5F5DC]">
            <Navbar />
            <div className="max-w-2xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2d5016] text-center mb-4">POLITIKA ZASEBNOSTI</h1>


                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">1. Upravljavec osebnih podatkov</h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>Ime podjetja / ime in priimek: FIGRE / Gregor Fištravec s.p.</li>
                  <li>Naslov: Velika Nedelja 19c</li>
                  <li>Davčna številka: SI47063084</li>
                  <li>E-pošta: kokovit.info@gmail.com</li>
                  <li>Telefon: 030 333 167</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">2. Katere osebne podatke zbiramo</h2>
                <p className="mb-2">Zbiramo samo podatke, ki so nujno potrebni za obdelavo naročil in komunikacijo s strankami:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>ime in priimek</li>
                  <li>naziv podjetja (če gre za pravno osebo)</li>
                  <li>naslov za dostavo</li>
                  <li>e-poštni naslov</li>
                  <li>telefonsko številko</li>
                  <li>druge podatke, ki jih uporabnik prostovoljno vnese v obrazec</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">3. Namen obdelave osebnih podatkov</h2>
                <p className="mb-2">Osebne podatke obdelujemo izključno za:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>obdelavo in izvedbo naročil,</li>
                  <li>komunikacijo glede naročil in dostave,</li>
                  <li>izdajo računov,</li>
                  <li>reševanje reklamacij,</li>
                  <li>izpolnjevanje zakonskih obveznosti.</li>
                </ul>
                <p className="mb-4">Podatkov ne uporabljamo za avtomatizirano odločanje ali profiliranje.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">4. Pravna podlaga za obdelavo</h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>pogodbenega razmerja (oddaja naročila),</li>
                  <li>zakonskih obveznosti,</li>
                  <li>zakonitega interesa upravljavca,</li>
                  <li>privolitve uporabnika (kjer je to potrebno).</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">5. Posredovanje podatkov tretjim osebam</h2>
                <p className="mb-2">Osebni podatki se lahko posredujejo:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li>dostavnim službam (za namen dostave),</li>
                  <li>računovodstvu,</li>
                  <li>državnim organom, kadar to zahteva zakon.</li>
                </ul>
                <p className="mb-4">Podatkov ne posredujemo tretjim osebam za marketinške namene.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">6. Hramba osebnih podatkov</h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>Osebne podatke hranimo toliko časa, kolikor je potrebno za izvedbo naročila,</li>
                  <li>oziroma v skladu z zakonskimi roki (npr. računovodski predpisi).</li>
                </ul>
                <p className="mb-4">Po preteku roka se podatki izbrišejo ali anonimizirajo.</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">7. Pravice uporabnikov</h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>dostopa do svojih osebnih podatkov,</li>
                  <li>popravka netočnih podatkov,</li>
                  <li>izbrisa podatkov (kjer zakon to dopušča),</li>
                  <li>omejitve obdelave,</li>
                  <li>prenosljivosti podatkov,</li>
                  <li>ugovora obdelavi.</li>
                </ul>
                <p className="mb-4">Zahtevo lahko pošlje na: [e-pošta].</p>

                <h2 className="text-xl md:text-2xl font-semibold text-[#2d5016] mt-6 mb-3">Kontakt</h2>
                <p className="mb-6">Za vprašanja o tej politiki zasebnosti ali uveljavljanje vaših pravic nas kontaktirajte na: <a className="text-[#2d5016] underline" href="mailto:kokovit.info@gmail.com">kokovit.info@gmail.com</a> ali po telefonu <a className="text-[#2d5016]" href="tel:+386030333167">030 333 167</a>.</p>

                <p className="text-sm text-gray-600">Datum zadnje posodobitve: 26. januar 2026</p>
            </div>
            <Footer />
        </div>
    );
}
