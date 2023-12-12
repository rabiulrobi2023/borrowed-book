import { useContext } from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
const Navbar = () => {
    const { user, logOut } = useContext(authContext)
    
  

    const navLink = <>
        <NavLink to="/" className="text-lg focus:underline focus:text-[#F3A847] ">Home</NavLink>
        <NavLink to="/add-book " className="text-lg focus:underline focus:text-[#F3A847]">Add Book</NavLink>
        <NavLink to="/all-books" className="text-lg focus:underline focus:text-[#F3A847]">All Books</NavLink>
        <NavLink to="/borrowed-books" className="text-lg focus:underline focus:text-[#F3A847]">Borrowed Books</NavLink>
        <NavLink to="/goal" className="text-lg focus:underline focus:text-[#F3A847]">Our Goal</NavLink>
        
      
    </>
   
   
   
    const handleLogout = () => {
        logOut()
    }

    return (
        <div className="bg-[#232F3E] fixed top-0 left-0 w-full z-10 max-h-[7vh">
            <div className="navbar max-w-full m-auto text-white flex flex-col md:flex-row justify-center px-4  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navLink}
                        
                        </ul>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-10">
                        <Link to="/"><img className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]  rounded-full" src="https://i.ibb.co/jJV1Mtt/logo.jpg" alt="" /></Link>
                        <Link to="/"><p className="text-lg md:text-3xl font-bold">Book House</p></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal space-x-6 ">
                        {navLink}
                       
                    </ul>
                </div>
                <div className="navbar-end flex gap-10">

                    {
                        user ?
                            <div className="flex flex-col gap-2 items-center">
                                {
                                    user.photoURL ?
                                        <img className="w-[30px] rounded-full" src={`${user.photoURL}`} alt="" />
                                        :
                                        <AiOutlineUser></AiOutlineUser>
                                }
                                <p className="text-xs uppercase">{user.displayName}</p>

                            </div>
                            :
                            ''
                    }
                    {
                        user ?
                            <button onClick={handleLogout} className="text-[#F3A847] px-2 py-1 text-lg font-bold border-2 rounded-md">Logout</button>
                            :
                            <Link to="/login"><button className="text-base">Sign In</button></Link>
                    }




                </div>
            </div>

        </div>
    );
};

export default Navbar;