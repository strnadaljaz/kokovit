"use client";
// Style consts
const aStyle = "font-semibold text-xl group text-[#F5F5DC] transition-all duration-300 ease-in-out hover:text-[#6b4226]";
const spanStyle = "bg-left-bottom bg-gradient-to-r from-[#6B4226] to-[#6B4226] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-250 ease-out";

export default function Navbar() {
    return (
        <nav className="relative top-0 w-full bg-[#4CAF50] h-[6rem] p-4 z-50">
            <div className='flex items-center justify-center h-full max-w-7xl mx-auto'>
               <ul className="flex items-center justify-center h-full space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-20">
                    <li><a className={aStyle} href="#Domov">Domov</a></li>
                    <li><a className={aStyle} href="#Produkti">Produkti</a></li>
                    <li><a className={aStyle} href="#O nas">O nas</a></li>
                    <li><a className={aStyle} href="#Povprasevanje">Povprasevanje</a></li>
                    <li><a className={aStyle} href="#Kontakt">Kontakt</a></li>
                </ul>
            </div>
        </nav>
    );
}
