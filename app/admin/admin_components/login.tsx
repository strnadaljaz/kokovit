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
        const supabase = await createClient();

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
        <div className="flex h-screen bg-[#4CAF50]" >
            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                <header>
                    <img className="w-20 mx-auto mb-5" src="logotip.webp" />
                </header>
                <div>
                    <div>
                        <label className="block mb-2 text-[#000000]" htmlFor="email">Email</label>
                        <input
                            className="w-full p-2 mb-6 text-[#000000] border-b-2 border-[#000000] outline-none focus:bg-gray-300"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <label className="block mb-2 text-[#000000]" htmlFor="password">Password</label>
                        <input
                            className="w-full p-2 mb-6 text-[#000000] border-b-2 border-[#000000] outline-none focus:bg-gray-300"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <input
                            className="w-full bg-[#000000] hover:bg-[#4CAF50] text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
                            type="submit"
                            onClick={checkCredentials}
                        >
                        </input>
                    </div>
                    {wrongCredentials &&
                        <div className="w-full text-center">
                            <p style={{ color: "red" }}>Email ali geslo ni pravilno</p>
                        </div>
                    }
                </div>
            </div>
        </div >

    );
}

export default Login;
