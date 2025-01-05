import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-[#C9E6F0]">
            <Navbar></Navbar>
            <h2 className="text-2xl font-semibold my-6 w-10/12 mx-auto text-center">Welcome, {user && user.displayName}!</h2>

            <div className="w-10/12 mx-auto my-5">
                <div className="card bg-base-200 w-96 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img
                            src={user.photoURL}
                            alt="profile pic"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: {user.displayName}</h2>
                        <p>Email: {user.email}</p>
                        <div className="card-actions">
                            <NavLink to={'/my-profile'}>
                                <button className="btn btn-primary">Update Pofile</button>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;