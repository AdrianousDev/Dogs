import { useEffect, useState } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
    const [login, setLogin] = useState("");
    const [key, setKey] = useState("");
    const password = useForm();
    const { loading, error, request } = useFetch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!password.validate()) return;

        const { url, options } = PASSWORD_RESET({
            login,
            key,
            password: password.value,
        });

        const { response } = await request(url, options);

        if (response.ok) navigate("/login");
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("key");
        const login = params.get("login");

        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    return (
        <section className="animeLeft">
            <Head title="Resete a senha" />

            <h1 className="title">Resete a Senha</h1>

            <form onSubmit={handleSubmit}>
                <Input
                    label="Nova Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Resetar</Button>
                )}
            </form>

            <Error error={error} />
        </section>
    );
};

export default LoginPasswordReset;
