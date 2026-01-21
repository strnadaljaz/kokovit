import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";
import Slider from "./Components/Slider"

export default function Home () {
    return (
        <div >
            <Navbar />
            <div className="bg-gradient-to-b from-[#4CAF50] to-[#6b4226] min-h-screen">
                <Slider/>
                <Hero />
                <About />
                <Reviews />
            </div>
            <Footer />
        </div>
    );
}
