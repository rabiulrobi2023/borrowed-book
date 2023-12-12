import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, authContext } from "../../Context/AuthContext";

import Swal from 'sweetalert2'


const Login = () => {

    const  {loginWithPass,loginWithGoogle} = useContext(authContext)

    const [errorInput, setErrorInput] = useState(null)
    const navigate=useNavigate()
    const location=useLocation()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        setErrorInput('')
        if (password.length < 6) {
            setErrorInput("Password must be at least 6 characters long.")
            return
        }

        if (!/[A-Z]/.test(password)) {
            setErrorInput("Include at least one uppercase letter in your password.")
            return
        }
        if (!/[a-z]/.test(password)) {
            setErrorInput("Include at least one lowercase letter in your password.")
            return
        }

        loginWithPass(email,password)
        .then(result=>{
            const user= result.user
            console.log(user)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successfull',
                showConfirmButton: false,
                timer: 2000,
            })
            navigate(location?.state ? location.state : "/")

        })
        .catch(error=>{
            
            const errorMessage =error.message
            setErrorInput("Email or Password is Worng")
        })
    }

    const handleLoginWithGoogle=()=>{
        loginWithGoogle()
        .then(result=>{
            const user=result.user;
            navigate(location?.state ? location.state : "/")
        })
        .then(error=>{
            console.error(error)
        })
        
    }
    return (
        <div className="hero mt-[120px] ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100 gap-4">
                <p className="text-3xl font-bold text-center  pt-5">Login</p>
                <form onSubmit={handleLogin} className="card-body mt-0 pt-0 pb-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    {
                        errorInput ?
                            <p className="text-red-600 text-sm">{errorInput}</p> :
                            ''
                    }

                    <div className="form-control mt-6">
                        <input type="submit" value="Sign In" className="btn btn-primary bg-[#F3A847] border-none" />
                    </div>
                </form>
                <div className="px-5">
                    <div className="text-center text-lg ">Do not have Account?<Link to="/register " className="text-blue-600 font-bold hover:text-blue-500"> Sign Up Here </Link></div>
                    <p className="text-center text-lg mt-2">OR</p>
                    <div className="form-control w-full mt-3 mb-10">
                        <button onClick={handleLoginWithGoogle} className="btn btn-primary bg-transparent text-black font-bold space-x-4 hover:bg-[#F3A847] border-1 border-[#F3A847] "><FcGoogle className="mr-7 text-xl"></FcGoogle> Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;