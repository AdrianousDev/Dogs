import { lazy, Suspense, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Head from "../Helper/Head";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        const getData = async () => {
            const token = window.localStorage.getItem("token");

            const { url, options } = STATS_GET(token);

            await request(url, options);
        };
        getData();
    }, [request]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (data)
        return (
            <Suspense fallback={<div></div>}>
                <Head title="Estatísticas" />
                <UserStatsGraphs data={data} />
            </Suspense>
        );
    else return null;
};

export default UserStats;
