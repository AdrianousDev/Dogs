import { Navigate } from "react-router-dom";
import useUser from "../../contexts/user/useUser";

const User = () => {
    const { login } = useUser();

    if (!login) return <Navigate to="/login" />;

    return <div>Conta do usuário</div>;
};

export default User;
