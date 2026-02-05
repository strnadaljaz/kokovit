"use client";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { log } from "console";

function checkKolicina45 (value: number | "") {
    if (value !== "" && value < 4) {
        return false;
    }
    else {
        return true;
    }
}

function checkKolicina70(value: number | "") {
    if (value !== "" && value < 5) {
        return false;
    }
    else {
        return true;
    }
}

async function sendMail(
  imeInPriimek: string,
  eMail: string,
  telefonska: string,
  naslov: string,
  postna: string,
  kraj: string,
  kolicina70: number,
  kolicina45: number,
  kolicinaBigBag: number,
  nacinPlacila: string,
  opombe: string
) {
    const response = await fetch ("/api/send-email", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imeInPriimek, eMail, telefonska, naslov, postna, kraj, kolicina70, kolicina45, kolicinaBigBag, nacinPlacila, opombe}),
    });
    return response.ok;
}

export default function Povprasevanje() {
  // Text inputs
  const [imeInPriimek, setImeInPriimek] = useState("");
  const [eMail, setEMail] = useState("");
  const [telefonska, setTelefonska] = useState("");
  const [naslov, setNaslov] = useState("");
  const [postna, setPostna] = useState("");
  const [kraj, setKraj] = useState("");
  const [splosniPogoji, setSplosniPogoji] = useState(false);
  const [nacinPlacila, setNacinPlacila] = useState("");

  // Quantities

  const [kolicina70, setKolicina70] = useState<number | "">("");
  const [isValid70, setIsValid70] = useState(true);
  const [kolicina45, setKolicina45] = useState<number | "">("");
  const [isValid45, setIsValid45] = useState(true);
  const [kolicinaBigBag, setKolicinaBigBag] = useState<number | "">("");
  const [opombe, setOpombe] = useState("");
  // Loading and success states
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!splosniPogoji) {
      alert('Za oddajo povpraševanja morate sprejeti splošne pogoje poslovanja.');
      return;
    }
    if (nacinPlacila === "") {
        alert('Izberite način plačila!');
        return;
    }
    if (kolicinaBigBag == 0 && kolicina45 == 0 && kolicina70 == 0) {
        alert('Niste vnesli količin!')
        return;
    }
    if (!isValid45) {
        alert("Vzeti morate vsaj 4 vreče 45l");
        return;
    }
    if (!isValid70) {
        alert("Vzeti morate vsaj 5 vreč 70l");
        return;
    }
    setIsLoading(true);
    const success = await sendMail(
      imeInPriimek,
      eMail,
      telefonska,
      naslov,
      postna,
      kraj,
      kolicina70 === "" ? 0 : kolicina70,
      kolicina45 === "" ? 0 : kolicina45,
      kolicinaBigBag === "" ? 0 : kolicinaBigBag,
      nacinPlacila,
      opombe
    );
    setIsLoading(false);
    setIsSuccess(success);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setImeInPriimek("");
    setEMail("");
    setTelefonska("");
    setNaslov("");
    setPostna("");
    setKraj("");
    setKolicina70("");
    setKolicina45("");
    setKolicinaBigBag("");
    setNacinPlacila("");
    setOpombe("");
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#2d5016] text-center mb-4">
          Povpraševanje
        </h1>
        <h2 className="text-xl font-bold text-[#000000] text-center mb-4">Predračun dobite po e-pošti!</h2>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="space-y-4">
            <input
              required
              type="text"
              value={imeInPriimek}
              onChange={(e) => setImeInPriimek(e.target.value)}
              placeholder="Ime in priimek"
              className="w-full text-[#000000] font-bold px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
            />
            <input
              required
              type="email"
              value={eMail}
              onChange={(e) => setEMail(e.target.value)}
              placeholder="E-pošta"
              className="w-full text-[#000000] font-bold px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
            />
            <input
              required
              type="tel"
              value={telefonska}
              onChange={(e) => setTelefonska(e.target.value)}
              placeholder="Telefonska številka"
              className="w-full text-[#000000] font-bold px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
            />
            <input
              required
              type="text"
              value={naslov}
              onChange={(e) => setNaslov(e.target.value)}
              placeholder="Naslov"
              className="w-full text-[#000000] font-bold px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="text"
                value={postna}
                onChange={(e) => setPostna(e.target.value)}
                placeholder="Poštna številka"
                className="w-full text-[#000000] font-bold px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
              />
              <input
                required
                type="text"
                value={kraj}
                onChange={(e) => setKraj(e.target.value)}
                placeholder="Kraj"
                className="w-full text-[#000000] font-bold px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
              />
              <textarea name="" id="" placeholder="Opombe" value={opombe} onChange={(e) => setOpombe(e.target.value)} className="col-span-2 w-full text-[#000000] font-bold border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors px-4 py-3"></textarea>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-lg font-semibold text-[#2d5016] mb-6">
              Izberite količino vreč:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border-2 border-gray-200 hover:border-[#4CAF50] transition-all duration-300 shadow-sm hover:shadow-md">
                <label className="flex flex-col space-y-3">
                  <span className="text-base font-semibold text-[#2d5016]">
                    45L Vreča
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={kolicina45}
                    onChange={(e) => {
                        const value = e.target.value === "" ? "" : Number(e.target.value);
                        setKolicina45(value);
                        const valid = checkKolicina45(value);
                        setIsValid45(valid);
                    }}
                    placeholder="0"
                    className={`w-full text-[#000000] font-bold px-4 py-3 border-2 rounded-lg 
  focus:outline-none transition-colors text-center
  ${isValid45 
    ? "border-gray-300 focus:border-[#4CAF50]" 
    : "border-red-500 focus:border-red-600"}
`} 
                  />
                </label>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border-2 border-gray-200 hover:border-[#4CAF50] transition-all duration-300 shadow-sm hover:shadow-md">
                <label className="flex flex-col space-y-3">
                  <span className="text-base font-semibold text-[#2d5016]">
                    70L Vreča
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={kolicina70}
                    onChange={(e) => {
                        const value = e.target.value === "" ? "" : Number(e.target.value);
                        setKolicina70(value);
                        const valid = checkKolicina70(value);
                        setIsValid70(valid);
                    }}
                    placeholder="0"
                    className={`w-full text-[#000000] font-bold px-4 py-3 border-2 rounded-lg 
  focus:outline-none transition-colors text-center
  ${isValid70 
    ? "border-gray-300 focus:border-[#4CAF50]" 
    : "border-red-500 focus:border-red-600"}
`} 
 
                  />
                </label>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border-2 border-gray-200 hover:border-[#4CAF50] transition-all duration-300 shadow-sm hover:shadow-md">
                <label className="flex flex-col space-y-3">
                  <span className="text-base font-semibold text-[#2d5016]">
                    BigBag
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={kolicinaBigBag}
                    onChange={(e) => setKolicinaBigBag(e.target.value === "" ? "" : Number(e.target.value))}
                    placeholder="0"
                    className="w-full text-[#000000] font-bold px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors text-center"
                  />
                </label>
              </div>
            </div>
            {kolicinaBigBag !== "" && (
                <div className="text-center mb-4 mt-4">
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                        <p className="font-semibold text-gray-800 flex items-center justify-center gap-2">
                            <span className="text-2xl">📍</span>
                            Lasten prevzem v Ormožu po predhodnem dogovoru po telefonu
                        </p>
                    </div>
                </div>                
            )}
            <div className="border-b-3 pb-3">
                <p className="text-lg font-semibold text-[#2d5016] mb-2 mt-4">Plačilo:</p>
                <label className="text-[#000000]">
                    <input type="radio" name="placilo" value="predracun" className="mr-2"
                            checked={nacinPlacila === "predracun"}
                            onChange={(e) => setNacinPlacila(e.target.value)}
                    />
                     Predračun
                </label>
                <label className="text-[#000000] ml-2">
                    <input type="radio" name="placilo" value="Po povzetju" className="mr-2"
                            checked={nacinPlacila === "Po povzetju"}
                            onChange={(e) => setNacinPlacila(e.target.value)}
                    />
                    Po povzetju
                </label>
            </div>
            <div className="mt-4">
              <input type="checkbox" className="cursor-pointer scale-150 ml-1"
                checked={splosniPogoji}
                onChange={() => setSplosniPogoji(!splosniPogoji)}/>
              <label htmlFor="" className="text-[#000000] ml-2">Strinjam se s splošnimi pogoji poslovanja</label>
            </div>

          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer bg-[#4CAF50] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#45a049] transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Pošiljam...</span>
              </>
            ) : (
              "Pošlji povpraševanje"
            )}
          </button>
        </form>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSuccess ? (
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-600">Povpraševanje uspešno poslano!</h3>
                <p className="text-gray-700">Predračun boste prejeli po e-pošti v najkrajšem možnem času.</p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Naroči več
                </button>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-red-600">Napaka pri pošiljanju</h3>
                <p className="text-gray-700">Prišlo je do napake. Prosimo, poskusite ponovno.</p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Poskusi ponovno
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
