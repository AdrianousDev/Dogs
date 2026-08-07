import { Navigate } from "react-router-dom";
import useUser from "../../contexts/user/useUser";

const loadingContainerStyle = {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
};

const loadingStyle = {
    width: "40px",
    height: "40px",
    border: "4px solid #e5e5e5",
    borderTopColor: "#333",
    borderRadius: "50%",
    animation: "loading-spin 0.8s linear infinite",
};

const ProtectedRoute = ({ children }) => {
    const { login } = useUser();

    if (login === true) {
        return children;
    } else if (login === false) {
        return <Navigate to="/login" />;
    } else {
        return (
            <div style={loadingContainerStyle}>
                <div style={loadingStyle} aria-label="Carregando"></div>
            </div>
        );
    }
};

export default ProtectedRoute;
