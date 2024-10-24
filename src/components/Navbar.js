import React, { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
];

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);  // Navbar visibility state

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    // Handle scroll to show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {  // Navbar appears after scrolling 50px
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);  // Clean up listener on component unmount
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="karapatan ko logo" loading="lazy" className="h-10 w-10 mr-2" />
                        <span className="text-xl tracking-tight">Karapatan Ko</span> 
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-gray-300 transition">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="fixed top-0 right-0 z-20 bg-neutral-900 w-full h-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className="hover:text-gray-300 transition">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
