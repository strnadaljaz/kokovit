"use client";

export default function Usage() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-20">
      <div className="max-w-5xl w-full bg-[#F5F5DC]/10 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12 border border-[#F5F5DC]/20 animate-slide-up">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5DC] drop-shadow-lg">
            Kako uporabljati KOKOVIT
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5DC]/95 leading-relaxed font-light max-w-3xl mx-auto">
            Odkrijte, kako pravilno pripraviti, mešati in uporabiti KOKOVIT substrat za optimalne rezultate. Preprosti koraki za zdrave in bujne rastline.
          </p>
          <a 
            href="/uporaba" 
            className="inline-block mt-4 md:mt-6 px-8 md:px-10 py-3 md:py-4 bg-[#F5F5DC] text-[#2d5016] font-semibold text-base md:text-lg rounded-lg shadow-lg hover:bg-[#F5F5DC]/90 hover:scale-105 transition-all duration-300"
          >
            Preberi navodila
          </a>
        </div>
      </div>
    </section>
  );
}
