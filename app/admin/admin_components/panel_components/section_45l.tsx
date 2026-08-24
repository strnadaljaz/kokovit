import { Dispatch, SetStateAction } from "react";

type Section45lParams = {
    kom45: number[];
    setKom45: Dispatch<SetStateAction<number[]>>;
    price45: string[];
    setPrice45: Dispatch<SetStateAction<string[]>>;
    shipping: string[];
    setShipping: Dispatch<SetStateAction<string[]>>;
    deleteEntry: Function;
    increaseEntry: Function;
};

const Section45l = ({ kom45, setKom45, price45, setPrice45, shipping, setShipping, deleteEntry, increaseEntry }: Section45lParams) => {
    return (
        <div id="cene_45l" className="bg-[#161A20] rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 p-6 mb-6 border border-white/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/10 pb-4">
                <span aria-hidden="true">🏷️</span> Akcije 45l
            </h2>

            {/* Column labels */}
            <div className="hidden sm:grid grid-cols-[40px_repeat(3,1fr)] gap-4 mb-3 px-2">
                <span />
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Število kosov
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Cena
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Poštnina
                </span>
            </div>

            <div className="flex flex-col gap-3">
                {kom45.map((_, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-[40px_repeat(3,1fr)] gap-4 items-center bg-[#1D222A] rounded-lg px-3 py-3 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-black/30 transition-shadow duration-200"
                    >
                        <button
                            type="button"
                            onClick={() => deleteEntry(i, setKom45, setPrice45, setShipping, null)}
                            aria-label="Odstrani vrstico"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0F1115] text-slate-200 shadow-sm hover:bg-red-500 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            ➖
                        </button>
                        <input
                            type="number"
                            placeholder="Število kosov"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={kom45[i]}
                            onChange={(e) => {
                                const nextValue = Number(e.target.value);
                                setKom45((prev) =>
                                    prev.map((value, index) => (index === i ? nextValue : value))
                                );
                            }}
                        />
                        <input
                            placeholder="Cena"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={price45[i]}
                            onChange={(e) => {
                                const nextValue = e.target.value;
                                setPrice45((prev) =>
                                    prev.map((value, index) => (index === i ? nextValue : value))
                                );
                            }}
                        />
                        <input
                            placeholder="Poštnina"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={shipping[i]}
                            onChange={(e) => {
                                const nextValue = e.target.value;
                                setShipping((prev) =>
                                    prev.map((value, index) => (index === i ? nextValue : value))
                                );
                            }}
                        />
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => increaseEntry(setKom45, setPrice45, setShipping, null)}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
                ➕ Dodaj vrstico
            </button>
        </div>

    );
}

export default Section45l;
