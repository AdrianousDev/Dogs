import { useCallback, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../../api";
import { useNavigate } from "react-router-dom";

const UserProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const getUser = async (token) => {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
    };

    const userLogin = async (username, password) => {
        try {
            setError(null);
            setloading(true);

            const { url, options } = TOKEN_POST({ username, password });
            const tokenResponse = await fetch(url, options);

            if (!tokenResponse.ok) {
                throw new Error(`Error: Usuário inválido`);
            }

            const { token } = await tokenResponse.json();

            window.localStorage.setItem("token", token);

            await getUser(token);

            navigate("/conta");
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setloading(false);
        }
    };

    const userLogout = useCallback(async () => {
        setData(null);
        setError(null);
        setloading(false);
        setLogin(false);
        window.localStorage.removeItem("token");
        navigate("/login");
    }, [navigate]);

    useEffect(() => {
        const autoLogin = async () => {
            const token = window.localStorage.getItem("token");

            if (!token) return;

            try {
                setError(null);
                setloading(true);

                const { url, options } = TOKEN_VALIDATE_POST(token);
                const response = await fetch(url, options);

                if (!response.ok) throw new Error("Token inválido");

                await getUser(token);
            } catch (err) {
                userLogout();
                setError(err.message);
            } finally {
                setloading(false);
            }
        };
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider
            value={{ userLogin, userLogout, data, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
