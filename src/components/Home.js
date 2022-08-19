import React from "react";
import heroImage from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = (props) => {
  return (
    <div
      name="home"
      // className="h-screen w-full bg-gradient-to-b
      //  from-black via-black to-gray-800"
      className="text-white bg-gradient-to-b
        from-black via-black to-gray-800 sm:h-auto md:h-auto lg:h-auto w-auto"
    >
      <div
        className="max-w-screen-lg mx-auto flex 
      flex-col items-center
       justify-center h-full px-4 md:flex-row py-4 "
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl mt-9 sm:text-7xl font-bold text-white ">
            {/* change the text to white */}I am a Front-end developer
          </h2>
          <p className="text-gray-500 py-4">
            i have done course in react front-end i have built this Portfolio
            for learning
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-4  
              flex items-center rounded-md   bg-gradient-to-r 
            from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="  group-hover:rotate-180 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1 " />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="vijay"
            className="rounded-2xl mx-auto w-2/3 fill-transparent md:w-full shadow-white-10 mb-36"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
