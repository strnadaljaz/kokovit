"use client";

function setCookie() {
    document.cookie = "login; path=/;";
}

const Login = () => {
    return (
        <div className="flex h-screen bg-[#4CAF50]" >
            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
                <header>
                    <img className="w-20 mx-auto mb-5" src="logotip.webp" />
                </header>
                <form>
                    <div>
                        <label className="block mb-2 text-[#000000]" htmlFor="username">Username</label>
                        <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#000000] outline-none focus:bg-gray-300" type="text" name="username"></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-[#000000]" htmlFor="password">Password</label>
                        <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#000000] outline-none focus:bg-gray-300" type="password" name="password"></input>
                    </div>
                    <div>
                        <input className="w-full bg-[#000000] hover:bg-[#4CAF50] text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer" type="submit" onClick={setCookie}></input>
                    </div>
                </form>
            </div>
        </div >

    );
}

export default Login;
