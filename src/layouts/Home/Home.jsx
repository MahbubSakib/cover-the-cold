import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import bannerImg from "../../assets/Designer.jpeg";
import 'animate.css';

const Home = () => {
    return (
        <div className="bg-[#C9E6F0]">
            <Navbar></Navbar>
            <div>
                <img className="w-screen h-screen object-cover" src={bannerImg} />
                <div className="absolute animate__animated animate__bounce top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-[#C6E7FF] text-center font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Together, we can make a difference.
                </div>
            </div>

            <div className="mt-5">
                {/* about section */}
                <section className="w-10/12 mx-auto bg-gray-100 shadow-2xl pb-5 rounded-xl">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 pt-5">About Us</h2>
                        <p className="text-lg leading-relaxed p-6 w-10/12 mx-auto">
                            The Winter Donation platform connects donors with volunteers to provide warm clothing to those in need across Bangladesh.
                            Our mission is to bring warmth and comfort to vulnerable communities during the harsh winter months.
                        </p>
                        <p className="mt-4">You can join us in this journey of kindness by donating your unused winter clothing.</p>
                    </div>
                </section>

                {/* how it works section */}
                <section className="w-10/12 mx-auto py-10 bg-base-300 mt-3 shadow-2xl rounded-xl">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12 mx-auto">
                            <div className="p-4">
                                <h3 className="text-2xl font-bold mb-2">1. Choose a Campaign</h3>
                                <p>Browse active donation campaigns in your division and select one to support.</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-bold mb-2">2. Donate</h3>
                                <p>Fill out the donation form to submit your contribution, and we’ll collect your items.</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-bold mb-2">3. Spread Warmth</h3>
                                <p>Your donated items will be distributed to those in need through our volunteers.</p>
                            </div>
                        </div>
                        <p className="mt-6"><span className="font-semibold">Supported Divisions:</span> Dhaka, Rajshahi, Sylhet, Chattogram, Khulna</p>
                    </div>
                </section>

                {/* volunteer */}
                <section className="py-10 bg-gray-100 w-10/12 mx-auto mt-3 shadow-2xl rounded-xl">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-6">Volunteer Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12 mx-auto">
                            <div className="bg-white p-4 shadow-md">
                                <p className="italic">"Distributing clothes to rural families was a humbling experience. Together, we made a difference."</p>
                                <h3 className="mt-4 text-lg font-bold">- Rubel Hossain</h3>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <p className="italic">"Seeing kids smile after receiving warm jackets is priceless. Join us and feel the joy of giving."</p>
                                <h3 className="mt-4 text-lg font-bold">- Taskin Ahmed</h3>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <p className="italic">"I volunteered for the Sylhet campaign, and the community response was overwhelming. Truly inspiring!"</p>
                                <h3 className="mt-4 text-lg font-bold">- Taijul Hasan</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* donation progress */}
                <section className="py-10 bg-base-300 w-10/12 mx-auto mt-3 shadow-2xl mb-5 rounded-xl">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Donation Progress</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12 mx-auto">
                            <div className="p-4">
                                <h3 className="text-2xl font-bold">Dhaka</h3>
                                <p className="text-lg">75% of the goal reached</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-bold">Sylhet</h3>
                                <p className="text-lg">50% of the goal reached</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-bold">Chattogram</h3>
                                <p className="text-lg">30% of the goal reached</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;