"use client";

export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center animate-slide-up">
                <div className="flex justify-center">
                    <img 
                        src="grede.webp" 
                        alt="grede" 
                        className="w-full max-w-md rounded-3xl shadow-2xl ring-4 ring-[#F5F5DC]/30 hover:scale-105 transition-transform duration-500"
                    /> 
                </div>
                
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-bold text-[#F5F5DC] drop-shadow-lg">
                        O nas
                    </h2>
                    <p className="text-xl md:text-2xl text-[#F5F5DC]/95 leading-relaxed font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste aliquam, aut fuga repellendus eaque asperiores sed odit eum provident dolores quae ipsa sapiente vero nulla laborum molestias reiciendis veniam?
                    </p>
                </div>
            </div>
        </div>
    );
}
