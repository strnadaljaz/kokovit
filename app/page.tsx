import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";
import Slider from "./Components/Slider"
import Usage from "./Components/Usage";
import Media from "./Components/Media";
import Collection from "./Components/Collection";

export default function Home() {
    return (
        <div >
            <Navbar />
            <div className="bg-gradient-to-b from-[#4CAF50] to-[#6b4226] min-h-screen">
                <Slider />
                <Hero />
                <Media />
                <Usage />
                <About />
                <Collection />
                <Reviews />
            </div>
            <Footer />
        </div>
    );
}
