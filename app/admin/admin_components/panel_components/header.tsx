import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-[#161A20] flex items-center justify-between px-8 py-4 shadow-md shadow-black/30 sticky top-0 z-10 border-b border-white/5">
            <h1 className="text-slate-100 text-2xl font-bold tracking-wide">Kokovit Admin Panel</h1>
            <Link
                href={"/"}
                className="text-sm font-semibold text-white bg-[#4CAF50] hover:bg-[#43A047] transition-colors duration-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
            >
                Odjava
            </Link>
        </div>
    );
}

export default Header;
