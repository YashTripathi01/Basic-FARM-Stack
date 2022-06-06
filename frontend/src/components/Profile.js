import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("myToken");
        navigate("/");
    };

    return (
        <>
            <div>
                <h1>Profile Page</h1>
                <p>Hi, this is your profile</p>

                <div>
                    <button type="button" onClick={signOut}>
                        Sign Out
                    </button>
                </div>
            </div>
        </>
    );
}
