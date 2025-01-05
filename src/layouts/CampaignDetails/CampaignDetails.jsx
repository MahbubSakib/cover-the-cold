import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CampaignDetails = () => {
    const campaign = useLoaderData()


    const navigate = useNavigate();

    // Redirect to login if the user is not authenticated
    //   if (!user?.loggedIn) {
    //     navigate("/login");
    //   }

    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        additionalNotes: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            additionalNotes: "",
        });
    };



    return (
        <div className="bg-[#C9E6F0]">
            <Navbar></Navbar>
            <div className="hero bg-base-200 w-10/12 mx-auto p-12 rounded-2xl my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={campaign.image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">{campaign.title}</h1>
                        <p className="py-3 text-gray-500">
                            {campaign.description}
                        </p>
                        <div className="badge badge-secondary">{campaign.status}</div>
                        <p className=" pt-3">
                            <span className="font-semibold">Email:</span> {campaign.contactInfo}
                        </p>
                        <p>
                            <span className="font-semibold">Division:</span> {campaign.division}
                        </p>
                    </div>
                </div>
            </div>

            {/* Donation Form */}
            <div className="w-10/12 mx-auto mt-20 mb-10">
                <h1 className="text-4xl font-bold text-center">Make Your Contribution</h1>
                <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Make Your Contribution</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Quantity */}
                        <div className="form-control">
                            <label className="label font-semibold">Quantity of Items</label>
                            <input
                                type="text"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                placeholder="E.g., 2 jackets, 3 blankets"
                                required
                            />
                        </div>

                        {/* Item Type */}
                        <div className="form-control">
                            <label className="label font-semibold">Item Type</label>
                            <select
                                name="itemType"
                                value={formData.itemType}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Select an Item Type</option>
                                <option value="blanket">Blanket</option>
                                <option value="jacket">Jacket</option>
                                <option value="sweater">Sweater</option>
                            </select>
                        </div>

                        {/* Pickup Location */}
                        <div className="form-control">
                            <label className="label font-semibold">Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                placeholder="E.g., House 12, Road 5, Dhanmondi, Dhaka"
                                required
                            />
                        </div>

                        {/* Additional Notes */}
                        <div className="form-control">
                            <label className="label font-semibold">Additional Notes (Optional)</label>
                            <textarea
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                className="textarea textarea-bordered w-full"
                                placeholder="Write any additional details here..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Submit Donation
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CampaignDetails;