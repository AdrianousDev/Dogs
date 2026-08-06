import { useState } from "react";
import { UserContext } from "./UserContext";
import { TOKEN_POST, USER_GET } from "../../api";

const UserProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    const getUser = async (token) => {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
    };

    const userLogin = async (username, password) => {
        const { url, options } = TOKEN_POST({ username, password });
        const tokenResponse = await fetch(url, options);
        const { token } = await tokenResponse.json();

        window.localStorage.setItem("token", token);

        getUser(token);
    };

    return (
        <UserContext.Provider value={{ userLogin, data }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
