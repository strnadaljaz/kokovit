"use client";
import { useState, useEffect } from "react";

const reviews = [
    {
        id: 1,
        name: "Janez Novak",
        text: "Odličen substrat! Moje rastline so se vidno izboljšale. Priporočam vsem vrtnarjem.",
        rating: 5,
        image: "" // Add image URL or leave empty for default avatar
    },
    {
        id: 2,
        name: "Marija Kovač",
        text: "Zelo sem zadovoljna s kakovostjo. Enostavno za uporabo in rastline rastejo kot nore.",
        rating: 5,
        image: ""
    },
    {
        id: 3,
        name: "Peter Hočevar",
        text: "Uporabljam že več let. Najboljši substrat na trgu. Hvala!",
        rating: 5,
        image: ""
    },
    {
        id: 4,
        name: "Ana Krajnc",
        text: "Profesionalna kvaliteta, odlična cena. Vedno naročim večje količine.",
        rating: 5,
        image: ""
    },
    {
        id: 5,
        name: "Gregor Zorko",
        text: "Fantastičen proizvod. Paradižniki so bili letos izjemni!", 
        rating: 5,
        image: ""
    },
    {
        id: 6,
        name: "Maja Bernik",
        text: "Najboljša odločitev za moj vrt. Substrat je lahek in učinkovit.",
        rating: 5,
        image: ""
    },
    {
        id: 7,
        name: "Tomaž Oblak",
        text: "Odlična drenaža in zadrževanje vode. Točno kar potrebujem.",
        rating: 5,
        image: ""
    },
    {
        id: 8,
        name: "Katja Pavlič",
        text: "Ekološko in kakovostno. Moje zelišča še nikoli niso bila boljša.",
        rating: 5,
        image: ""
    },
    {
        id: 9,
        name: "Luka Mlakar",
        text: "Hitra dostava, odličen proizvod. Bom zagotovo naročil ponovno.",
        rating: 5,
        image: ""
    },
    {
        id: 10,
        name: "Nina Zupan",
        text: "Substrat je resnično kakovosten. Moje rože so še nikoli tako cvetele!",
        rating: 5,
        image: ""
    }
];

export default function Reviews () {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <div className="h-auto flex items-center justify-center px-4 md:px-8 py-16 md:py-20">
            <div className="max-w-4xl w-full">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5DC] text-center mb-12 md:mb-16 drop-shadow-lg">
                    Mnenja strank
                </h2>

                <div className="relative px-8 sm:px-12 md:px-16">
                    {/* Review Card */}
                    <div className="bg-[#F5F5DC] rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl min-h-[300px] md:min-h-[350px] flex flex-col justify-center">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                            {reviews[currentIndex].image ? (
                                <img 
                                    src={reviews[currentIndex].image} 
                                    alt={reviews[currentIndex].name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-[#4CAF50]"
                                />
                            ) : (
                                <div className="w-20 h-20 rounded-full bg-[#4CAF50] flex items-center justify-center border-4 border-[#4CAF50]">
                                    <span className="text-2xl font-bold text-white">
                                        {getInitials(reviews[currentIndex].name)}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center mb-4">
                            {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            ))}
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center mb-4 md:mb-6 leading-relaxed">
                            "{reviews[currentIndex].text}"
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-900 text-center font-semibold">
                            {reviews[currentIndex].name}
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-16 text-[#F5F5DC] hover:text-[#F5F5DC]/70 transition-all cursor-pointer"
                    >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button 
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-16 text-[#F5F5DC] hover:text-[#F5F5DC]/70 transition-all cursor-pointer"
                    >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentIndex 
                                    ? 'bg-[#F5F5DC] w-8' 
                                    : 'bg-[#F5F5DC]/30 hover:bg-[#F5F5DC]/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
