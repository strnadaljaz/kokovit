"use client";
import { useState } from "react";
import links from "./Links";
import { useCart } from "@/Context/CartContext";

const aStyle = "font-semibold text-xl text-[#F5F5DC] transition-all duration-300 ease-in-out hover:text-[#6b4226]";

function CartIcon() {
    return (
        <svg aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h2l2.4 11.2a2 2 0 001.95 1.58h8.9a2 2 0 001.95-1.58L22 8H6" />
            <circle cx="10" cy="20" r="1.25" strokeWidth={2} />
            <circle cx="18" cy="20" r="1.25" strokeWidth={2} />
        </svg>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { totalItems } = useCart();

    const cartLink = (isMenuOpen = false) => (
        <a
            href="/blagajna"
            aria-label={`Košarica, ${totalItems} artiklov`}
            className={`relative inline-flex translate-y-px items-center gap-2 leading-none transition-all duration-300 hover:text-[#4CAF50] ${isMenuOpen ? "text-[#2d5016]" : "text-[#F5F5DC] hover:text-[#6b4226]"
                }`}
            onClick={() => setIsOpen(false)}
        >
            <CartIcon />
            <span className="font-semibold">Košarica</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#6b4226] px-1.5 text-xs font-bold text-[#F5F5DC]">
                {totalItems}
            </span>
        </a>
    );

    return (
        <>
            <nav className="relative top-0 z-50 flex h-[5rem] w-full items-start bg-[#4CAF50] p-4 md:items-center">
                <div className='flex items-center justify-center h-full max-w-7xl mx-auto w-full'>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
                        {links.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className={aStyle}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Cart */}
                    <div className="absolute inset-y-0 right-4 hidden items-center md:flex lg:right-8">
                        {cartLink()}
                    </div>

                    {/* Mobile Cart */}
                    <div className="absolute inset-y-0 left-4 flex items-center md:hidden">
                        {cartLink()}
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden absolute right-4 top-4 focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-8 h-8 flex flex-col justify-center items-center">
                            <span className="block w-7 h-0.5 bg-[#F5F5DC] mb-1.5"></span>
                            <span className="block w-7 h-0.5 bg-[#F5F5DC] mb-1.5"></span>
                            <span className="block w-7 h-0.5 bg-[#F5F5DC]"></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-40 transition-opacity duration-800 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-[100%] bg-[#F5F5DC] shadow-2xl z-[55] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Cart in open menu */}
                <div className="absolute left-6 top-6 text-[#2d5016]">
                    {cartLink(true)}
                </div>

                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 p-2 focus:outline-none group"
                    onClick={() => setIsOpen(false)}
                    aria-label="Zapri meni"
                >
                    <svg
                        className="w-8 h-8 text-[#2d5016] transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col items-center justify-center h-full">
                    <ul className="flex flex-col items-center space-y-8">
                        {links.map((item, index) => (
                            <li
                                key={index}
                                className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} delay-100`}
                            >
                                <a
                                    href={item.link}
                                    className="font-bold text-3xl text-[#2d5016] hover:text-[#4CAF50] transition-colors"
                                    onClick={() => setIsOpen(false)}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
