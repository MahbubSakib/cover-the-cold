import { useContext, useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [name, setName] = useState(user.displayName || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");

    useEffect(() => {
        if (user) {
            setName(user.displayName);
            setPhotoURL(user.photoURL);
        }
    }, [user]);

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhotoURLChange = (e) => setPhotoURL(e.target.value);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Updated Name:", name);
        // console.log("Updated Photo URL:", photoURL);
        setError('');
        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                toast.success("Profile updated successfully!");
            }).catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="bg-[#C9E6F0]">
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto my-5">
                <div className="card bg-base-200 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo-URL</span>
                            </label>
                            <input
                                type="text"
                                value={photoURL}
                                onChange={handlePhotoURLChange}
                                placeholder="photo-url"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {
                            error && (
                                <p className="text-sm text-red-500">{error}</p>
                            )
                        }
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;
