import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const sections = [
  {
    title: 'About Us',
    items: ['KarapatanKo@gmail.com', 'Address', '09666303644', 'Mission', 'Vision']
  },
  {
    title: 'Partnerships',
    items: ['Official Gazette', 'Government of Baguio', 'Department of Justice', 'Non-government organizations', 'Hall of Justice']
  },
  {
    title: 'Solutions',
    items: ['Law Resources', 'Legal Matching', 'AI Virtual Assistance', 'Interactive Quiz']
  },
  {
    title: 'Legal',
    items: ['Terms', 'Conditions', 'FAQs']
  }
];

const items = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://www.facebook.com/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/'
  },
  {
    name: 'Github',
    icon: FaGithub,
    link: 'https://www.github.com/'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://www.twitter.com/'
  },
];

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-black text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {
          sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">
                {section.title}
              </h6>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}
                    className="hover:text-white py-1 text-gray-500 hover:text-gray-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">
            Quiz Pro
          </p>
          <p className="py-4">
            Get Quiz Pro for exclusive levels and challenges
          </p>
          <form className="flex flex-col sm:flex-row">
            <input type="email" placeholder="Enter email address" className="w-full p-2 mr-4 rounded-md mb-4 text-black" required />
          </form>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 cursor-pointer">
            <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Learn It</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-left text-gray-500">
        <p className="py-4">
          2024 Karapatan Ko All Rights Reserved.
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {
            items.map((x, index) => (
              <a href={x.link} key={index} target="_blank" rel="noopener noreferrer">
                <x.icon className="hover:text-white cursor-pointer" />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
