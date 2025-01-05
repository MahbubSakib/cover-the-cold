import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CampaignCard from "../../components/CampaignCard/CampaignCard";

const DonationCampaign = () => {
    const campaigns = useLoaderData();


    return (
        <div className="bg-[#C9E6F0]">
            <Navbar></Navbar>
            <div className="my-10">

                <CampaignCard campaigns={campaigns}></CampaignCard>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DonationCampaign;