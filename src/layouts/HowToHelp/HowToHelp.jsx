import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const HowToHelp = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-10/12 mx-auto py-10">
                <h1 className="text-4xl font-bold text-center mb-8">How to Help</h1>

                <div className="bg-gray-200 rounded-lg p-6">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Donate Clothing</h2>
                        <p>
                            Donating is simple! Choose an active campaign, fill out the donation
                            form, and schedule a drop-off or pickup. We accept jackets, blankets,
                            sweaters, scarves, gloves, and other winter essentials.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Become a Volunteer</h2>
                        <p>
                            Join our team of volunteers and help collect, sort, and distribute
                            donated items to those in need. Sign up today to make a meaningful
                            impact in your community.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Spread the Word</h2>
                        <p>
                            Support our campaigns by sharing them on social media or organizing
                            donation drives in your school, office, or neighborhood.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Financial Contributions</h2>
                        <p>
                            Unable to donate clothing? You can still contribute by making a
                            financial donation to cover logistics, transportation, and
                            distribution costs.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p>
                            Have questions? Email us at{' '}
                            <a href="" className="text-blue-600 underline">
                                contact@coverthecold.com
                            </a>{' '}
                            or call us at +88 01252365289.
                        </p>
                    </section>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HowToHelp;