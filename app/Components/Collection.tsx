import Image from "next/image";

const Collection = () => {
    return (
        <section className="px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-3xl  md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
                <div className="order-2 space-y-5 md:order-1 md:space-y-6">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F5F5DC]/75">
                        KOKOVIT merch
                    </p>
                    <h2 className="text-4xl font-bold leading-tight text-[#F5F5DC] drop-shadow-lg sm:text-5xl md:text-6xl">
                        Kokovit kolekcija oblačil
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-[#F5F5DC]/90 sm:text-xl md:text-2xl">
                        Kokovit od zdaj tudi na oblačilih! Izberite svoj najljubši
                        kos in ga vzemite s seboj na vsak vrt.
                    </p>
                    <a
                        href="/kolekcija"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#F5F5DC] px-6 py-3 font-semibold text-[#2d5016] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#F5F5DC]/90"
                    >
                        Izvedi več
                        <span aria-hidden="true">→</span>
                    </a>
                </div>

                <div className="order-1 flex justify-center md:order-2">
                    <Image
                        src=""
                        alt="Kokovit kolekcija oblačil"
                        width={768}
                        height={512}
                        className="h-auto w-full max-w-xl rounded-2xl border-2 border-[#F5F5DC]/20 object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Collection;
