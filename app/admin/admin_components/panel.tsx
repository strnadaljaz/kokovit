"use client";

import Link from "next/link";
import { useState } from "react";

function deleteCookie() {
    document.cookie = "login; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const Panel = () => {
    const [bag70, setBag70] = useState(true);
    const [bag45, setBag45] = useState(true);
    const [bigBag, setBigBag] = useState(true);


    return (
        <div className="min-h-screen bg-gradient-to-b from-[#707070] to-[#505050] flex flex-col">
            <div className="h-16 bg-black/90 flex items-center justify-between px-6 shadow-md">
                <p className="text-white text-lg font-semibold">Kokovit admin panel</p>
                <Link href={"/"} onClick={deleteCookie} className="text-sm text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded">Odjava</Link>
            </div>
            <div id="zaloga" className="p-6 mt-6 mx-6 bg-white rounded shadow-sm text-gray-800">
                <h1 className="text-2xl font-bold mb-4">Zaloga</h1>
                <label htmlFor="70l" className="mr-2 font-medium">70l</label>
                <input className="mr-6 accent-blue-600 w-4 h-4 align-middle"
                    type="checkbox"
                    name="70l"
                    checked={bag70}
                    onChange={(e) => setBag70(e.target.checked)}
                >
                </input>
                <label htmlFor="45l" className="mr-2 font-medium">45l</label>
                <input className="mr-6 accent-blue-600 w-4 h-4 align-middle"
                    type="checkbox"
                    name="45l"
                    checked={bag45}
                    onChange={(e) => setBag45(e.target.checked)}
                >
                </input>
                <label htmlFor="BigBag" className="mr-2 font-medium">BigBag</label>
                <input className="mr-6 accent-blue-600 w-4 h-4 align-middle"
                    type="checkbox"
                    name="BigBag"
                    checked={bigBag}
                    onChange={(e) => setBigBag(e.target.checked)}
                >
                </input>
            </div>
        </div >
    );
}

export default Panel;
