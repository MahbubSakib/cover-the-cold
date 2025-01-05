import { NavLink } from "react-router-dom";

const CampaignCard = ({ campaigns }) => {
    const { title } = campaigns;
    return (
        <div className=" w-10/12 mx-auto ">
            <h2 className="text-xl font-semibold text-center mb-10">
                <span className="inline-block border-b-2 border-gray-500 p-2">Our Running Donation Campaigns</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    campaigns.map(campaign =>
                        <div key={campaign.id} className="">
                            <div className="card bg-purple-100 shadow-xl">
                                <figure>
                                    <img className="mt-2 rounded-lg"
                                        src={campaign.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{campaign.title}</h2>
                                    <p className="text-gray-500">{campaign.description}</p>
                                    <p className="font-semibold">Division: {campaign.division}</p>
                                    <div className="card-actions justify-end">
                                        <NavLink to={`/campaign/${campaign.id}`}>
                                            <button className="btn btn-primary">Donate Now</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CampaignCard;