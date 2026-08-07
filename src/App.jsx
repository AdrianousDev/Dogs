import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import UserProvider from "./contexts/user/UserProvider";
import User from "./components/User/User";
import ProtectedRoute from "./components/Helper/ProtectedRoute";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <UserProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login/*" element={<Login />} />
                        <Route
                            path="/conta/*"
                            element={
                                <ProtectedRoute>
                                    <User />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                    <Footer />
                </UserProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
