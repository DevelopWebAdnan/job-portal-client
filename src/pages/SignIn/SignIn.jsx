import React, { useContext, useState } from 'react';
import loginLottieJSON from '../../assets/lottie/Login.json'
import Lottie, { useLottie } from 'lottie-react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState("");
        const [success, setSuccess] = useState(false);

        const options = {
                animationData: loginLottieJSON
            };
        
            const { View } = useLottie(options);
    
        const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // reset error and status
        setErrorMessage('');
        setSuccess(false);

        signInUser(email, password)
        .then(result => {
            console.log('sign in', result.user);
            setSuccess(true);
        })
        .catch(error => {
            setErrorMessage(error.message);
            setSuccess(false);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    {/* <Lottie animationData={loginLottieJSON} loop={true}></Lottie> */}
                    {View}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        {
                            errorMessage && <p className='text-red-700'>{errorMessage}</p> 
                        }
                        {
                            success && <p className='text-green-600'>User login is successful.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;