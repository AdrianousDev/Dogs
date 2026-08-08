import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../contexts/user/useUser";
import MinhasFotos from "../../assets/feed.svg?react";
import Estatisticas from "../../assets/estatisticas.svg?react";
import AdicionarFoto from "../../assets/adicionar.svg?react";
import Sair from "../../assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import { useEffect, useState } from "react";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
    const mobile = useMedia("(max-width: 40rem)");
    const [mobileMenu, setMobileMenu] = useState(false);
    const { pathname } = useLocation();

    const { userLogout } = useUser();
    const navigate = useNavigate();

    const handleUserLogout = () => {
        userLogout();
        navigate("/login");
    };

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button
                    atia-label="Menu"
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() =>
                        setMobileMenu((currentValue) => !currentValue)
                    }
                ></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}
            >
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
        </>
    );
};

export default UserHeaderNav;
