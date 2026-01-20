"use client";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

async function sendMail(
  imeInPriimek: string,
  eMail: string,
  telefonska: string,
  naslov: string,
  postna: string,
  kraj: string,
  kolicina70: number,
  kolicina45: number,
  kolicinaJumbo: number,
) {
    const response = await fetch ("/api/send-email", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imeInPriimek, eMail, telefonska, naslov, postna, kraj, kolicina70, kolicina45, kolicinaJumbo}),
    });
    console.log(response);
}

export default function Povprasevanje() {
  // Text inputs
  const [imeInPriimek, setImeInPriimek] = useState("");
  const [eMail, setEMail] = useState("");
  const [telefonska, setTelefonska] = useState("");
  const [naslov, setNaslov] = useState("");
  const [postna, setPostna] = useState("");
  const [kraj, setKraj] = useState("");

  // Checkboxes and their quantities
  const [checked70l, setChecked70l] = useState(false);
  const [checked45l, setChecked45l] = useState(false);
  const [checkedJumbo, setCheckedJumbo] = useState(false);

  const [kolicina70, setKolicina70] = useState(0);
  const [kolicina45, setKolicina45] = useState(0);
  const [kolicinaJumbo, setKolicinaJumbo] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMail(
      imeInPriimek,
      eMail,
      telefonska,
      naslov,
      postna,
      kraj,
      checked70l ? kolicina70 : 0,
      checked45l ? kolicina45 : 0,
      checkedJumbo ? kolicinaJumbo : 0,
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#2d5016] text-center mb-4">
          Povpraševanje
        </h1>
        <h2 className="text-xl font-bold text-[#000000] text-center mb-4">Predračun dobite po e-pošti!</h2>
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
            </div>
          </div>

          <div className="pt-4">
            <p className="text-lg font-semibold text-[#2d5016] mb-4">
              Izberite velikost vreče:
            </p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer group h-[44px]">
                <input
                  type="checkbox"
                  checked={checked70l}
                  onChange={(e) => setChecked70l(e.target.checked)}
                  className="w-5 h-5 text-[#4CAF50] border-gray-300 rounded focus:ring-[#4CAF50] focus:ring-2"
                />
                <span className="text-gray-700 group-hover:text-[#4CAF50] transition-colors flex-1">
                  70l
                </span>
                {checked70l && (
                  <input
                    type="number"
                    min="1"
                    value={kolicina70}
                    onChange={(e) => setKolicina70(Number(e.target.value))}
                    placeholder="Količina"
                    className="w-32 text-[#000000] font-bold px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
                  />
                )}
              </label>

              <label className="flex items-center space-x-3 cursor-pointer group h-[44px]">
                <input
                  type="checkbox"
                  checked={checked45l}
                  onChange={(e) => setChecked45l(e.target.checked)}
                  className="w-5 h-5 text-[#4CAF50] border-gray-300 rounded focus:ring-[#4CAF50] focus:ring-2"
                />
                <span className="text-gray-700 group-hover:text-[#4CAF50] transition-colors flex-1">
                  45l
                </span>
                {checked45l && (
                  <input
                    type="number"
                    min="1"
                    value={kolicina45}
                    onChange={(e) => setKolicina45(Number(e.target.value))}
                    placeholder="Količina"
                    className="w-32 text-[#000000] font-bold px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
                  />
                )}
              </label>

              <label className="flex items-center space-x-3 cursor-pointer group h-[44px]">
                <input
                  type="checkbox"
                  checked={checkedJumbo}
                  onChange={(e) => setCheckedJumbo(e.target.checked)}
                  className="w-5 h-5 text-[#4CAF50] border-gray-300 rounded focus:ring-[#4CAF50] focus:ring-2"
                />
                <span className="text-gray-700 group-hover:text-[#4CAF50] transition-colors flex-1">
                  Jumbo
                </span>
                {checkedJumbo && (
                  <input
                    type="number"
                    min="1"
                    value={kolicinaJumbo}
                    onChange={(e) => setKolicinaJumbo(Number(e.target.value))}
                    placeholder="Količina"
                    className="w-32 text-[#000000] font-bold px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#4CAF50] focus:outline-none transition-colors"
                  />
                )}
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#4CAF50] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#45a049] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Pošlji povpraševanje
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
