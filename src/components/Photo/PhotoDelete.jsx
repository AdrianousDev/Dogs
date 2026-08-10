import { PHOTO_DELETE } from "../../api";
import useFetch from "../../hooks/useFetch";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
    const { request, loading } = useFetch();

    const handleClick = async () => {
        const confirm = window.confirm("Tem certeza que deseja deletar?");

        if (!confirm) return;

        const token = window.localStorage.getItem("token");

        const { url, options } = PHOTO_DELETE(id, token);

        const { response } = await request(url, options);

        if (response.ok) window.location.reload();
    };

    return (
        <>
            {loading ? (
                <button className={styles.delete} disabled>
                    Carregando...
                </button>
            ) : (
                <button className={styles.delete} onClick={handleClick}>
                    Deletar
                </button>
            )}
        </>
    );
};

export default PhotoDelete;
