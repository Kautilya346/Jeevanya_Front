import React from 'react';
import logo from '../assests/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="flex justify-between px-5">
                <div className="flex-col px-5">
                    <div className="flex-col border-b-2 pb-3">
                            <h2 className="text-xl font-bold">Jeevanya</h2>
                            <p className="">©  All rights reserved.</p>
                    </div>
                    
                    <div className="footer-section w-xl mt-5">
                        <h2 className="text-xl font-bold">Newsletter</h2>
                        <form className="mt-2">
                            <input type="email" placeholder="Your email address" className="p-2 rounded w-full" />
                            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded w-full">Subscribe</button>
                        </form>
                    </div>
                </div>

                <img src={logo} alt="" className="w-40 h-40 " />
                {/* <div className="footer-section links px-10 pt-8 w-md">
                    <h2 className="text-xl font-bold">Quick Links</h2>
                    <ul className="mt-2">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section links px-10 bg-white text-black pt-8 w-md">
                    <h2 className="text-xl font-bold">Follow Us</h2>
                    <ul className="mt-2">
                        <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
                        <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
                        <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
                    </ul>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;