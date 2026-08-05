import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const api = import.meta.env.VITE_API_BASE_URL;

        if (username.validate() && password.validate()) {
            const response = await fetch(`${api}/jwt-auth/v1/token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                }),
            });

            console.log(response);

            const json = await response.json();

            console.log(json);
        }
    };

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
