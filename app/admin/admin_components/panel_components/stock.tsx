import { Dispatch, SetStateAction } from "react";

type StockParams = {
    bag45: boolean;
    setBag45: Dispatch<SetStateAction<boolean>>;
    priceOne45: string | undefined;
    setPriceOne45: Dispatch<SetStateAction<string | undefined>>;
    bag70: boolean;
    setBag70: Dispatch<SetStateAction<boolean>>;
    priceOne70: string | undefined;
    setPriceOne70: Dispatch<SetStateAction<string | undefined>>;
    bigBag: boolean;
    setBigBag: Dispatch<SetStateAction<boolean>>;
    priceBigBag: string | undefined;
    setPriceBigBag: Dispatch<SetStateAction<string | undefined>>;
    setHasChanged: Dispatch<SetStateAction<boolean>>;
}

const Stock = ({ bag45, setBag45, priceOne45, setPriceOne45, bag70, setBag70, priceOne70, setPriceOne70, bigBag, setBigBag, priceBigBag, setPriceBigBag, setHasChanged }: StockParams) => {
    return (
        <div id="zaloga" className="bg-[#161A20] rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 p-6 mb-6 border border-white/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/10 pb-4">
                <span aria-hidden="true">📦</span> Zaloga
            </h2>
            <div className="flex flex-col gap-4">
                {[
                    { id: "45l", label: "45l", state: bag45, setState: setBag45, price: priceOne45, priceChange: setPriceOne45 },
                    { id: "70l", label: "70l", state: bag70, setState: setBag70, price: priceOne70, priceChange: setPriceOne70 },
                    { id: "BigBag", label: "BigBag", state: bigBag, setState: setBigBag, price: priceBigBag, priceChange: setPriceBigBag },
                ].map(({ id, label, state, setState, price, priceChange }) => (
                    <div
                        key={id}
                        className="flex flex-wrap items-center gap-4 bg-[#1D222A] rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-[#232933]"
                    >
                        <label htmlFor={id} className="flex items-center gap-3 cursor-pointer group">
                            {/* Toggle switch */}
                            <span className="relative inline-flex items-center">
                                <input
                                    type="checkbox"
                                    id={id}
                                    name={id}
                                    checked={state}
                                    onChange={(e) => {
                                        setState(e.target.checked);
                                        setHasChanged(true);
                                    }}
                                    className="sr-only peer"
                                />
                                <span
                                    className="w-11 h-6 bg-slate-600 peer-checked:bg-[#4CAF50] rounded-full transition-colors duration-300 ease-in-out cursor-pointer"
                                ></span>
                                <span
                                    className="absolute left-1 top-1 w-4 h-4 bg-slate-100 rounded-full shadow transition-transform duration-300 ease-in-out peer-checked:translate-x-5"
                                ></span>
                            </span>
                            <span className="text-lg font-medium text-slate-200 group-hover:text-[#4CAF50] transition-colors duration-200">
                                {label}
                            </span>
                        </label>
                        {
                            state &&
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    className="text-slate-100 bg-[#0F1115] w-24 px-3 py-1.5 border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                                    value={price}
                                    onChange={(e) => { priceChange(e.target.value); setHasChanged(true); }}
                                ></input>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Stock;
