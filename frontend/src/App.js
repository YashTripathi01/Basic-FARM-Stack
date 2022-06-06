import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequireToken } from "./components/Auth";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<RequireToken><Profile /></RequireToken>} />
            </Routes>
        </div>
    );
}

export default App;
