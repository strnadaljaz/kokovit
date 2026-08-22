"use client";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

type loginParams = {
    logIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ logIn }: loginParams) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrongCredentials, setWrongCredentials] = useState(false);

    const checkCredentials = async () => {
        const supabase = createClient();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) {
            setWrongCredentials(true);
            logIn(false);
            return;
        }
        logIn(true);
    }

    return (
        <div className="flex h-screen bg-[#0F1115] font-sans" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            <div className="w-full max-w-xs m-auto bg-[#161A20] border border-white/5 rounded-xl shadow-lg shadow-black/40 p-8">
                <header>
                    <img className="w-20 mx-auto mb-6" src="logotip.webp" />
                </header>
                <div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-300" htmlFor="email">Email</label>
                        <input
                            className="w-full p-2.5 mb-6 text-slate-100 bg-[#0F1115] border border-white/10 rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-300" htmlFor="password">Password</label>
                        <input
                            className="w-full p-2.5 mb-6 text-slate-100 bg-[#0F1115] border border-white/10 rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <input
                            className="w-full bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold py-2.5 px-4 mb-2 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                            type="submit"
                            value="Prijava"
                            onClick={checkCredentials}
                        >
                        </input>
                    </div>
                    {wrongCredentials &&
                        <div className="w-full text-center mt-4">
                            <p className="text-red-400 text-sm font-medium">Email ali geslo ni pravilno</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Login;
