"use client";

import { Product } from "@/Context/ProductsContext";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/helper/formatPrice";
import { useProducts } from "@/Context/ProductsContext";

function isProduct(value: unknown): value is Product {
    return (
        typeof value === 'object' &&
        value !== null &&
        'name' in value &&
        'image' in value &&
        'basePrice' in value &&
        'inStock' in value &&
        'discounts' in value
    );
}

const ProductCard = ({ product }: { product: Product }) => {
    const router = useRouter();

    const handleClick = () => {
        if (isProduct(product))
            router.push(`/trgovina/substrat?productId=${product.id}`);
        // else
        //     router.push(`/trgovina/kolekcija?product_id=${product.id}`);
    }

    return (
        <article
            className="cursor-pointer group overflow-hidden rounded-[28px] border border-[#F5F5DC]/25 bg-[#F5F5DC]/95 shadow-[0_24px_60px_rgba(20,36,18,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(20,36,18,0.28)]"
            onClick={handleClick}
        >
            <div className="relative flex h-85 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(76,175,80,0.18),_rgba(245,245,220,0.9)_58%,_rgba(245,245,220,1)_100%)] p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 via-transparent to-[#6b4226]/10" />
                <img
                    src={product.image}
                    alt={product.name}
                    className="relative size-fit object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#6b4226]/80">
                            KOKOVIT
                        </p>
                        <h3 className="text-2xl font-black text-[#2d5016]">{product.name}</h3>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-[#6b4226] px-3 py-2 text-base font-extrabold text-[#F5F5DC] shadow-sm">
                        {formatPrice(product.basePrice)}
                    </span>
                </div>
                {/* {!isProduct(product) && ( */}
                {/*     <div className="flex items-center justify-between gap-4 border-t border-[#2d5016]/15 pt-4"> */}
                {/*         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b4226]"> */}
                {/*             Velikosti */}
                {/*         </span> */}
                {/*         <span className="rounded-full bg-[#4CAF50]/12 px-3 py-2 text-sm font-bold text-[#2d5016]"> */}
                {/*             {product.sizes || "—"} */}
                {/*         </span> */}
                {/*     </div> */}
                {/* )} */}
            </div>
        </article>
    );
};

const Store = () => {
    const { products } = useProducts();

    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-[#4CAF50] to-[#6b4226] text-[#F5F5DC]">
                <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
                    <header className="mb-10 overflow-hidden rounded-[30px] border border-[#F5F5DC]/20 bg-[#F5F5DC]/10 p-6 shadow-[0_20px_60px_rgba(20,36,18,0.16)] backdrop-blur-sm md:p-8">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#F5F5DC]/80">
                            KOKOVIT
                        </p>
                        <h1 className="text-4xl font-black tracking-tight text-[#F5F5DC] md:text-5xl">
                            Kokovit substrat
                        </h1>
                    </header>

                    <section className="mb-16">
                        <div className="mb-7 flex items-center gap-4">
                            <div className="h-px flex-1 bg-[#F5F5DC]/25" />
                            <h2 className="text-2xl font-black text-[#F5F5DC] md:text-3xl">
                                Kokovit substrat
                            </h2>
                            <div className="h-px flex-1 bg-[#F5F5DC]/25" />
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {products.map((product, index) => (
                                <ProductCard key={`${product.name}-${index}`} product={product} />
                            ))}
                        </div>
                    </section>

                    {/* <section> */}
                    {/*     <div className="mb-7 flex items-center gap-4"> */}
                    {/*         <div className="h-px flex-1 bg-[#F5F5DC]/25" /> */}
                    {/*         <h2 className="text-2xl font-black text-[#F5F5DC] md:text-3xl"> */}
                    {/*             Kolekcija oblačil */}
                    {/*         </h2> */}
                    {/*         <div className="h-px flex-1 bg-[#F5F5DC]/25" /> */}
                    {/*     </div> */}
                    {/**/}
                    {/*     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"> */}
                    {/*         {collection.map((product, index) => ( */}
                    {/*             <ProductCard key={`${product.name}-${index}`} product={product} product_id={product.name} /> */}
                    {/*         ))} */}
                    {/*     </div> */}
                    {/* </section> */}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Store;
