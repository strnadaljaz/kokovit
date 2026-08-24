import { Dispatch, SetStateAction } from "react";

type Section70lParams = {
    kom70: number[];
    setKom70: Dispatch<SetStateAction<number[]>>;
    price70: string[];
    setPrice70: Dispatch<SetStateAction<string[]>>;
    gratisKom: number[];
    setGratisKom: Dispatch<SetStateAction<number[]>>;
    deleteEntry: Function;
    increaseEntry: Function;
};

const Section70l = ({ kom70, setKom70, price70, setPrice70, gratisKom, setGratisKom, deleteEntry, increaseEntry }: Section70lParams) => {
    return (
        <div id="cene_70l" className="bg-[#161A20] rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 p-6 mb-6 border border-white/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/10 pb-4">
                <span aria-hidden="true">🏷️</span> Akcije 70l
            </h2>

            {/* Column labels */}
            <div className="hidden sm:grid grid-cols-[40px_repeat(3,1fr)] gap-4 mb-3 px-2">
                <span />
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Število komadov
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Število gratis komadov
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Cena
                </span>
            </div>

            <div className="flex flex-col gap-3">
                {kom70.map((_, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-[40px_repeat(3,1fr)] gap-4 items-center bg-[#1D222A] rounded-lg px-3 py-3 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-black/30 transition-shadow duration-200"
                    >
                        <button
                            type="button"
                            onClick={() => deleteEntry(i, setKom70, setPrice70, null, setGratisKom)}
                            aria-label="Odstrani vrstico"
                            className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-[#0F1115] text-slate-200 shadow-sm hover:bg-red-500 hover:text-white transition-colors duration-200"
                        >
                            ➖
                        </button>
                        <input
                            type="number"
                            placeholder="Število komadov"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={kom70[i]}
                            onChange={(e) => {
                                const nextValue = Number(e.target.value);
                                setKom70((prev) =>
                                    prev.map((value, index) => (index === i ? nextValue : value))
                                );
                            }}
                        />
                        <input
                            type="number"
                            placeholder="Gratis komadi"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={gratisKom[i]}
                            onChange={(e) => {
                                const nextValue = Number(e.target.value);
                                setGratisKom((prev) =>
                                    prev.map((value, index) => (index === i ? nextValue : value))
                                );
                            }}
                        />
                        <input
                            placeholder="Cena"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={price70[i]}
                            onChange={(e) => {
                                const nextValue = e.target.value;
                                setPrice70((prev) =>
                                    prev.map((value, index) => (index === i ? nextValue : value))
                                );
                            }}
                        />
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => increaseEntry(setKom70, setPrice70, null, setGratisKom)}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
                ➕ Dodaj vrstico
            </button>
        </div>

    );
}

export default Section70l;
