import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className="bg-[#78B3CE]">
            <div className="navbar w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to='/donation-campaign'>Donation Campaign</NavLink></li>
                            <li><NavLink to='/how-to-help'>How To Help</NavLink></li>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'}><a className="btn btn-ghost text-xl">CoverTheCold</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/donation-campaign'>Donation Campaign</NavLink></li>
                        <li><NavLink to='/how-to-help'>How To Help</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <h4 className="text-xl mr-2 md:mr-5">
                        {user && user?.email ? (
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src={user.photoURL} alt="User" />
                            </div>
                        ) : ''}
                    </h4>
                    <div>
                        {
                            user && user?.email ?
                                <button onClick={logout} className="btn">Logout</button>
                                :
                                <NavLink to={'/login'}>
                                    <button className="btn">Log in</button>
                                </NavLink>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;