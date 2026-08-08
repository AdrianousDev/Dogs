import { NavLink, useNavigate } from "react-router-dom";
import useUser from "../../contexts/user/useUser";
import MinhasFotos from "../../assets/feed.svg?react";
import Estatisticas from "../../assets/estatisticas.svg?react";
import AdicionarFoto from "../../assets/adicionar.svg?react";
import Sair from "../../assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import { useState } from "react";

const UserHeaderNav = () => {
    const [mobile, setMobile] = useState(null);
    const { userLogout } = useUser();
    const navigate = useNavigate();

    const handleUserLogout = () => {
        userLogout();
        navigate("/login");
    };

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <MinhasFotos />
                {mobile && "Minhas Fotos"}
            </NavLink>

            <NavLink to="/conta/estatisticas">
                <Estatisticas />
                {mobile && "Estatísticas"}
            </NavLink>

            <NavLink to="/conta/postar">
                <AdicionarFoto />
                {mobile && "Adicionar Foto"}
            </NavLink>

            <button onClick={handleUserLogout}>
                <Sair />
                {mobile && "Sair"}
            </button>
        </nav>
    );
};

export default UserHeaderNav;
