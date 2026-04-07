import { useLottie } from 'lottie-react';
import registerLottieData from '../../assets/lottie/register.json';

const Register = () => {

    const options = {
        animationData: registerLottieData
    };

    const { View } = useLottie(options);

    // console.log('Register:', Register);
    // console.log('registerLottieData:', registerLottieData);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        // password validation
        function validatePassword(password) {
            const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
            return regex.test(password);
        }

        console.log(validatePassword(password));
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    {/* <Lottie animationData={registerLottieData} loop={true}></Lottie> */}
                    {View}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;