import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log (email, password)
        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            const user = {
                email: loggedUser.email
            }
            console.log(user)
            form.reset()
            fetch('http://localhost:4000/jwt', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log('jwt response', data);
                localStorage.setItem('car-access-token', data.token);
                navigate(from, {replace: true});
            })
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={img} alt="" className='w-[700px] ' />
                    </div>
                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login now!</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary bg-[#FF3811] border-0 hover:bg-[#FF3811]" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center mt-4 font-semibold'>Or Sign In With</p>
                            <div className='flex justify-center gap-4 mt-4'>
                                <button className="btn btn-circle bg-slate-200 border-0 hover:bg-slate-200">
                                    <FcGoogle className='text-xl'></FcGoogle>
                                </button>
                                <button className="btn btn-circle bg-slate-200 border-0 hover:bg-slate-200">
                                    <FaFacebookF className='text-[#3B5998] text-xl'></FaFacebookF>
                                </button>
                                <button className="btn btn-circle bg-slate-200 border-0 hover:bg-slate-200">
                                    <FaLinkedinIn className='text-[#0A66C2] text-xl'></FaLinkedinIn>
                                </button>
                            </div>
                            <p className='text-center mt-4'>New to Car Doctors? <Link to='/signUp' className='text-[#FF3811] font-bold'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;