import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-hot-toast";
import bgImage from "../../assets/pexels-pixabay-259698.jpg";


const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();
    const [error, setError] = useState('');
    console.log(emailRef.current?.value);

    // Get the email from state if passed
    const emailFromState = location.state?.email || "";

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        if (!email) {
            setError("Please provide an email address.");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent! Redirecting to Gmail...");
                setTimeout(() => {
                    window.location = "https://mail.google.com/";
                }, 2000);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex justify-center items-center" style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="card bg-base-200 shadow-2xl p-5 max-w-sm w-full">
                    <h2 className="text-2xl font-semibold text-center">Forgot Password</h2>
                    <form onSubmit={handleResetPassword} className="mt-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                ref={emailRef}
                                defaultValue={emailFromState}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-blue-700 text-white hover:bg-blue-500">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ForgotPassword;
