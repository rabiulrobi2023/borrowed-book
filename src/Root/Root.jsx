import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen mx-auto">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;