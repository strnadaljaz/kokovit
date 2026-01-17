import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

export default function Home () {
    return (
        <div >
            <Navbar />
            <div className="bg-gradient-to-b from-[#4CAF50] to-[#6b4226] min-h-screen">
                <Hero />
                <About />
            </div>
        </div>
    );
}
