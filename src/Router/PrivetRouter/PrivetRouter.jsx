import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
    const { user } = useContext(authContext)
    const location = useLocation()
    
    if (user) {
        return children
    } 
    else {
        return <Navigate state={location.pathname} to="/login" ></Navigate>
    }
};

export default PrivetRouter;