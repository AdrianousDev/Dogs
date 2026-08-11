import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import useUser from "../../contexts/user/useUser";

const User = () => {
    const { data } = useUser();

    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/postar" element={<UserPhotoPost />} />
                <Route path="/estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    );
};

export default User;
