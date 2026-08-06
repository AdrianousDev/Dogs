import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import UserProvider from "./contexts/user/UserProvider";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <UserProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login/*" element={<Login />} />
                    </Routes>
                    <Footer />
                </UserProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
