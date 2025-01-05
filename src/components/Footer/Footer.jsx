import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">

                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                    <div className='text-gray-400'>
                        <p>Address: 123 Nazrul Avenue, Dhaka, Bangladesh</p>
                        <p>Email: contact@coverthecold.com</p>
                        <p>Phone: +88 01252365289</p>
                    </div>

                </div>

                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-6">
                        <a href="" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                            <FaFacebook size={24} />
                        </a>
                        <a href="" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                            <FaTwitter size={24} />
                        </a>
                        <a href="" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className=" w-full text-center">
                <p className="text-sm font-semibold">© 2024 CoverTheCold. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
