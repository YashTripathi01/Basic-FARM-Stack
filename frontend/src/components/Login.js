import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchToken, setToken } from "./Auth";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        if (username === "" && password === "") {
            console.log("Username & Password, Required");
        } else {
            console.log("axios");
            axios
                .post("http://localhost:8000/login", {
                    username: username,
                    password: password,
                })
                .then(function (response) {
                    if (response.data.token) {
                        setToken(response.data.token);
                        navigate("/profile");
                    }
                })
                .catch(function (error) {
                    console.log(error, "An Error Occurred");
                });
        }
    };

    return (
        <>
            <h1>Login Page</h1>
            <div>
                {fetchToken() ? (
                    <p>You are logged in!</p>
                ) : (
                    <form>
                        <label>Input Username: </label>
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label>Input Password: </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="button" onClick={login}>
                            Login
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}
