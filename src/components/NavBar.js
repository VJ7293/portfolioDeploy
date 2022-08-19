import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // this is the nav bar links
  // const links = [
  //   {
  //     id: 1,
  //     link: "Home",
  //   },
  //   {
  //     id: 2,
  //     link: "About",
  //   },
  //   {
  //     id: 3,
  //     link: "Portfolio",
  //   },
  //   {
  //     id: 4,
  //     link: "Experience",
  //   },
  //   {
  //     id: 5,
  //     link: "Contact",
  //   },
  // ];
  return (
    <div
      className="flex  justify-between items-center
      h-24 px-4  text-white bg-black" // here navcol color is added in tailwind.config.js
    >
      <div>
        <h1
          className=" text-5xl font-signature ml-2 text-gradient-to-r 
          hover:motion-safe:animate-ping w-6 h-6
              from-cyan-500 to-blue-500 cursor-pointer"
          // hover:text-orange-600
        >
          Vijay{" "}
        </h1>
      </div>
      <ul className=" hidden md:flex">
        {/* {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer captalize 
             text-white font-medium hover:scale-105
              duration-250 no-underline hover:underline underline-offset-8 hover:decoration-1 decoration-sky-500 duration-500"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })} */}
        <li>
          <Link
            to="home"
            className="px-4 cursor-pointer captalize 
             text-white font-medium hover:scale-105
              duration-250 no-underline hover:underline
               underline-offset-8 hover:decoration-1
                decoration-sky-500 duration-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="px-4 cursor-pointer captalize 
             text-white font-medium hover:scale-105
              duration-250 no-underline hover:underline
               underline-offset-8 hover:decoration-1
                decoration-sky-500 duration-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            className="px-4 cursor-pointer captalize 
             text-white font-medium hover:scale-105
              duration-250 no-underline hover:underline
               underline-offset-8 hover:decoration-1
                decoration-sky-500 duration-500"
          >
            portfolio
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            className="px-4 cursor-pointer captalize 
             text-white font-medium hover:scale-105
              duration-250 no-underline hover:underline
               underline-offset-8 hover:decoration-1
                decoration-sky-500 duration-500"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="px-4 py-4 cursor-pointer captalize 
             text-white font-medium hover:scale-105
              duration-250 no-underline hover:underline
               underline-offset-8 hover:decoration-1
                decoration-sky-500 duration-500"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4  z-10 text-gray-500 md:hidden"
      >
        {/* hamburger menu bar active inactive */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* if nav is true  show ul  */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left w-full h-screen 
        bg-gradient-to-b  from-black via-black to-cyan-800 text-white "
        >
          {/* {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                
                className="px-4 cursor-pointer capitalize py-6 text-4xl no-underline hover:underline underline-offset-8 hover:decoration-1 decoration-sky-500"
              >
                <Link to={link}>{link}</Link>
              </li>
            );
          })} */}
          <div>
            <li
              className=" cursor-pointer capitalize py-6 
            text-4xl no-underline hover:underline 
            underline-offset-8 hover:decoration-1 decoration-sky-500"
            >
              <Link to="home">Home</Link>
            </li>
            <li
              className=" cursor-pointer capitalize py-6 
            text-4xl no-underline hover:underline 
            underline-offset-8 hover:decoration-1 decoration-sky-500"
            >
              <Link to="about">About</Link>
            </li>
            <li
              className=" cursor-pointer capitalize py-6 
            text-4xl no-underline hover:underline 
            underline-offset-8 hover:decoration-1 decoration-sky-500"
            >
              <Link to="portfolio">portfolio</Link>
            </li>
            <li
              className=" cursor-pointer capitalize py-6 
            text-4xl no-underline hover:underline 
            underline-offset-8 hover:decoration-1 decoration-sky-500"
            >
              <Link to="experience">Experience</Link>
            </li>
            <li
              className=" cursor-pointer capitalize py-6 
            text-4xl no-underline hover:underline 
            underline-offset-8 hover:decoration-1 decoration-sky-500"
            >
              <Link to="contact">Contact</Link>
            </li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
