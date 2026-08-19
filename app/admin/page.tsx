"use client";
import { useState } from "react";
import Login from "./admin_components/login";
import Panel from "./admin_components/panel";

const AdminPage = () => {

    const [isLogedIn, logIn] = useState(true);

    return (
        <>
            {!isLogedIn ? (
                <Login />
            ) : (
                <Panel />
            )}
        </>
    );
}

export default AdminPage;
