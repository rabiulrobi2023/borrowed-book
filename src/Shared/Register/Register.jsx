import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom";
import { auth, authContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'

const Register = () => {
    const  {signUpWithPass,loginWithGoogle} = useContext(authContext)

    const [errorInput, setErrorInput] = useState(null)
    const navigate=useNavigate()

    const handleSubmitRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
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

        signUpWithPass(email, password)
            .then(res => {
                const user=res.user
                console.log(user)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                .then(res=>{
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Registration Successfull',
                        showConfirmButton: false,
                        timer: 2000,
                    })
                })
                navigate("/login")
            })
            .catch(error => {
                setErrorInput("The Email Already Used")
            })
    }

    const handleLoginWithGoogle=()=>{
        loginWithGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user)
            
            navigate("/")
        })
        .then(error=>{
            console.error(error)
        })
        
    }



    return (
        <div className="hero mt-[120px]">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-base-100 gap-4">
                <p className="text-2xl font-bold text-center  pt-5">Register Your Account</p>
                <form onSubmit={handleSubmitRegister} className="card-body mt-0 pt-5 pb-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
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
                        errorInput?
                        <p className="text-red-600 text-sm">{errorInput}</p>:
                        ''
                    }
                  
                    <div className="form-control mt-6">
                        <input type="submit" value="Register" className="btn btn-primary bg-[#F3A847] border-none" />
                    </div>
                </form>
                <div className="px-5">
                    <div className="text-center text-lg ">Already have an Account?<Link to="/login " className="text-blue-600 font-bold hover:text-blue-500"> Sign In </Link></div>
                    <p className="text-center text-lg mt-2">OR</p>
                    <div className="form-control w-full mt-3 mb-10">
                        <button onClick={handleLoginWithGoogle} className="btn btn-primary bg-transparent text-black font-bold space-x-4 hover:bg-[#F3A847] border-1 border-[#F3A847] "><FcGoogle className="mr-7 text-xl"></FcGoogle> Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;