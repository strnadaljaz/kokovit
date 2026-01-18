"use client";
import { useState } from "react";

const aStyle = "font-semibold text-xl text-[#F5F5DC] transition-all duration-300 ease-in-out hover:text-[#6b4226]";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="relative top-0 w-full bg-[#4CAF50] h-[6rem] p-4 z-50">
                <div className='flex items-center justify-center h-full max-w-7xl mx-auto relative'>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
                        <li><a className={aStyle} href="/">Domov</a></li>
                        <li><a className={aStyle} href="#Produkti">Produkti</a></li>
                        <li><a className={aStyle} href="/onas">O nas</a></li>
                        <li><a className={aStyle} href="/povprasevanje">Povpraševanje</a></li>
                        <li><a className={aStyle} href="#Kontakt">Kontakt</a></li>
                    </ul>

                    {/* Hamburger Button */}
                    <button 
                        className={`md:hidden absolute right-4 focus:outline-none z-[60] p-2 ${isOpen ? 'fixed' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center">
                            <span className={`block w-7 h-0.5 transition-all duration-300 ${isOpen ? 'bg-[#2d5016] rotate-45 translate-y-1.5' : 'bg-[#F5F5DC] mb-1.5'}`}></span>
                            <span className={`block w-7 h-0.5 transition-all duration-300 ${isOpen ? 'bg-[#2d5016] opacity-0' : 'bg-[#F5F5DC] mb-1.5'}`}></span>
                            <span className={`block w-7 h-0.5 transition-all duration-300 ${isOpen ? 'bg-[#2d5016] -rotate-45 -translate-y-1.5' : 'bg-[#F5F5DC]'}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-[75%] bg-[#F5F5DC] shadow-2xl z-[55] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full">
                    <ul className="flex flex-col items-center space-y-8">
                        <li className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} delay-100`}>
                            <a className="font-bold text-3xl text-[#2d5016] hover:text-[#4CAF50] transition-colors" href="/" onClick={() => setIsOpen(false)}>Domov</a>
                        </li>
                        <li className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} delay-200`}>
                            <a className="font-bold text-3xl text-[#2d5016] hover:text-[#4CAF50] transition-colors" href="#Produkti" onClick={() => setIsOpen(false)}>Produkti</a>
                        </li>
                        <li className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} delay-300`}>
                            <a className="font-bold text-3xl text-[#2d5016] hover:text-[#4CAF50] transition-colors" href="/onas" onClick={() => setIsOpen(false)}>O nas</a>
                        </li>
                        <li className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} delay-[400ms]`}>
                            <a className="font-bold text-3xl text-[#2d5016] hover:text-[#4CAF50] transition-colors" href="/povprasevanje" onClick={() => setIsOpen(false)}>Povpraševanje</a>
                        </li>
                        <li className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} delay-[500ms]`}>
                            <a className="font-bold text-3xl text-[#2d5016] hover:text-[#4CAF50] transition-colors" href="#Kontakt" onClick={() => setIsOpen(false)}>Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
