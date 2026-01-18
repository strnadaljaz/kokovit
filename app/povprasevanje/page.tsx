"use client";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function sendMail(imeInPriimek: string, eMail: string, telefonska: string) {

}

export default function Povprasevanje () {
    return (
        <div>
            <Navbar /> 
            <form action="">
                <input type="text" name="ime" placeholder="Ime in priimek"/>
                <input type="email" name="email" placeholder="E-pošta" />
                <input type="tel" name="telefon" placeholder="Telefonska številka"/> 
                <button /*onClick={() => sendMail(ime.value, email.value, telefon.value)}*/></button>
            </form>
            <Footer />
        </div>
    );
}
