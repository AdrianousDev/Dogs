import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import useUser from "../../contexts/user/useUser";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const { userLogin } = useUser();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username.validate() && !password.validate()) return;

        userLogin(username.value, password.value);
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
