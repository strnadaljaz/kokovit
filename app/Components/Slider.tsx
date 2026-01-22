"use client";
import { useState, useEffect } from "react";

const images = [
  "/onas.webp",
  "/uporaba.webp",
  "/379.webp",
  "/371.webp",
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
    <div className="relative w-full mx-auto h-[calc(100vh-6rem-3)] md:overflow-visible shadow-lg opacity-82 border-3 border-2 border-r-0 border-l-0 border-[#F5F5DC]/30">
      <div className="mx-auto w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={`${src}?auto=format&fit=crop&w=1200&q=80`}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 object-cover h-[calc(100vh-6rem-3)] md:h-[calc(100vh-6rem)]"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
              current === index
                ? "bg-black scale-125"
                : "bg-black/60 hover:bg-black"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

