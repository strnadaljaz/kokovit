"use client";
import { Product } from "@/app/kolekcija/page";
import { SetStateAction } from "react";

type SectionMerchArguments = {
    products: Product[];
    setProducts: React.Dispatch<SetStateAction<Product[]>>;
    setHasChanged: React.Dispatch<SetStateAction<boolean>>;
};

const SectionMerch = ({ products, setProducts, setHasChanged }: SectionMerchArguments) => {
    return (
        <div id="cene_70l" className="bg-[#161A20] rounded-xl shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 p-6 mb-6 border border-white/5">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-100 flex items-center gap-2 border-b border-white/10 pb-4">
                <span aria-hidden="true">🏷️</span> Kolekcija oblačil
            </h2>

            {/* Column labels */}
            <div className="hidden sm:grid grid-cols-[40px_repeat(4,1fr)] gap-4 mb-3 px-2">
                <span />
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Ime izdelka
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Ime slike
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Velikosti
                </span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#4CAF50]/10 text-[#6FCF73] text-xs font-semibold px-3 py-1">
                    Cena
                </span>
            </div>

            <div className="flex flex-col gap-3">
                {products.map((product, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-[40px_repeat(4,1fr)] gap-4 items-center bg-[#1D222A] rounded-lg px-3 py-3 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-black/30 transition-shadow duration-200"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                setProducts(products.filter((_, index) => index !== i));
                                setHasChanged(true);
                            }}
                            aria-label="Odstrani vrstico"
                            className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full bg-[#0F1115] text-slate-200 shadow-sm hover:bg-red-500 hover:text-white transition-colors duration-200"
                        >
                            ➖
                        </button>
                        <input
                            type="text"
                            placeholder="Ime izdelka"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={product.name}
                            onChange={(e) => {
                                const newName = e.target.value;

                                setProducts(prev =>
                                    prev.map((product, index) =>
                                        index === i
                                            ? { ...product, name: newName }
                                            : product
                                    )
                                );

                                setHasChanged(true);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Slika izdelka"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={product.img}
                            onChange={(e) => {
                                const newImg = e.target.value;

                                setProducts(prev =>
                                    prev.map((product, index) =>
                                        index === i
                                            ? { ...product, img: newImg }
                                            : product
                                    )
                                );

                                setHasChanged(true);
                            }}
                        />
                        <input
                            placeholder="Velikosti"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={product.sizes}
                            onChange={(e) => {
                                const newSize = e.target.value;

                                setProducts(prev =>
                                    prev.map((product, index) =>
                                        index === i
                                            ? { ...product, sizes: newSize }
                                            : product
                                    )
                                );

                                setHasChanged(true);
                            }}
                        />
                        <input
                            placeholder="Cena"
                            className="text-slate-100 placeholder:text-slate-500 w-full px-4 py-2.5 bg-[#0F1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-200"
                            value={product.price}
                            onChange={(e) => {
                                const newPrice = e.target.value;

                                setProducts(prev =>
                                    prev.map((product, index) =>
                                        index === i
                                            ? { ...product, price: newPrice }
                                            : product
                                    )
                                );

                                setHasChanged(true);
                            }}
                        />

                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => {
                    setProducts((prevProducts) => [
                        ...prevProducts,
                        {
                            name: "",
                            img: "",
                            sizes: "",
                            price: "",
                        },
                    ]);
                }}
                className="mt-5 inline-flex cursor-pointer items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
                ➕ Dodaj vrstico
            </button>
        </div >

    );
}

export default SectionMerch;
