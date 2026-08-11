import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        const fetchPhotos = async () => {
            const total = 3;

            const { url, options } = PHOTOS_GET({
                page: page,
                total: total,
                user: user ?? 0,
            });

            const { response, json } = await request(url, options);

            if (response && response.ok && json.length < total) {
                setInfinite(false);
            }
        };
        fetchPhotos();
    }, [request, user, page, setInfinite]);

    if (error) return <Error error={error} />;

    if (loading) return <Loading />;

    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhotos;
