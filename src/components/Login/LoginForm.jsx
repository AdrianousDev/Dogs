import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { useEffect } from "react";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const getUser = async (token) => {
        const { url, options } = USER_GET(token);

        const response = await fetch(url, options);

        const json = await response.json();

        console.log(json);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            const { url, options } = TOKEN_POST({
                username: username.value,
                password: password.value,
            });

            const response = await fetch(url, options);

            const json = await response.json();

            window.localStorage.setItem("token", json.token);

            getUser(json.token);
        }
    };

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (!token) return;

        getUser(token);
    }, []);

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />

                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />

                <Button>Entrar</Button>
            </form>

            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
};

export default LoginForm;
