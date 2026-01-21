"use client";
import { useState, useEffect } from "react";

const images = [
  "/onas.webp",
  "/uporaba.webp",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:w-[90%] mx-auto overflow-hidden shadow-lg opacity-82">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={`${src}?auto=format&fit=crop&w=1200&q=80`}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover h-[60vh] md:h-[80vh]"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-black md:text-white text-5xl md:text-6xl font-light opacity-100 md:opacity-80 hover:opacity-100 transition cursor-pointer"
        aria-label="Previous slide">
            &lt; 
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-black md:text-white text-5xl md:text-6xl font-light opacity-100 md:opacity-80 hover:opacity-100 transition cursor-pointer"
        aria-label="Next slide">
            &gt;
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

