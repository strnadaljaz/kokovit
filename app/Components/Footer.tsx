"use client";
import links from "./Links";

export default function Footer () {
    return (
        <footer className="bg-[#6b4226] text-[#F5F5DC] py-12 px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Logo and Social */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">KOKOVIT</h2>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/kokovitsubstrat" target="_blank" rel="noopener noreferrer" 
                           className="hover:opacity-70 transition-opacity">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://instagram.com/kokovit.info/" target="_blank" rel="noopener noreferrer" 
                           className="hover:opacity-70 transition-opacity">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Povezave</h3>
                    <ul className="space-y-2">
                        {links.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.link}
                                    className="hover:opacity-70 transition-opacity"
                                >{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <a href="tel:+38630333167" className="hover:opacity-70 transition-opacity">030 333 167</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <a href="mailto:kokovit.info@gmail.com" className="hover:opacity-70 transition-opacity">kokovit.info@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.636 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p>FIGRE, Gregor Fištravec s.p.</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s7-7.75 7-13C19 5.13 15.87 2 12 2S5 5.13 5 9c0 5.25 7 13 7 13z" />
                            </svg>
                            <a href="https://www.google.com/maps/place/Velika+Nedelja+19c,+2274+Velika+Nedelja/@46.4246404,16.1067591,17z/data=!4m6!3m5!1s0x476f5b064ca725d9:0xf577a0f421ca4b19!8m2!3d46.4246367!4d16.109334!16s%2Fg%2F11vc4ty2k5?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" className="hover:opacity-70 transition-opacity">Velika Nedelja 19c</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3h10l4 4v13a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10M7 16h6" />
                            </svg>
                            <p>DŠ: 47063084</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Legal links */}
            <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#F5F5DC]/20 text-center text-sm">
                <div className="flex justify-center gap-4 mb-2 text-sm text-[#F5F5DC]/90">
                    <a href="/splosni-pogoji" className="hover:underline">Splošni pogoji</a>
                    <span className="text-[#F5F5DC]/60">·</span>
                    <a href="/politika-zasebnosti" className="hover:underline">Politika zasebnosti</a>
                </div>
                <p className="text-[#F5F5DC]/90 mb-1">&copy; {new Date().getFullYear()} Kokovit. Vse pravice pridržane.</p>
                <p className="text-[#F5F5DC]/70 mt-4">Izdelava spletne strani: <a href="https://strnadaljaz.vercel.app/" className="hover:underline">Aljaž Strnad</a></p>
            </div>
        </footer>
    );
}
