import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import useUser from "../../contexts/user/useUser";

const Login = () => {
    const { login } = useUser();

    if (login === true) return <Navigate to="/conta" />;

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/criar" element={<LoginCreate />} />
                <Route path="/perdeu" element={<LoginPasswordLost />} />
                <Route path="/resetar" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    );
};

export default Login;
