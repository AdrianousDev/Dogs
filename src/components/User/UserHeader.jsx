import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
    const { pathname } = useLocation();

    let title;

    switch (pathname) {
        case "/conta":
            title = "Conta";
            break;

        case "/conta/estatisticas":
            title = "Estatísticas";
            break;

        case "/conta/postar":
            title = "Poste Sua Foto";
            break;

        default:
            title = "Minha Conta";
    }

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    );
};

export default UserHeader;
