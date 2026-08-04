import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from "../assets/dogs.svg?react";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={`container ${styles.nav}`}>
                <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
                    <Dogs />
                </Link>
                <Link to="/login" className={styles.login}>
                    Login / Criar
                </Link>
            </nav>
        </header>
    );
};

export default Header;
