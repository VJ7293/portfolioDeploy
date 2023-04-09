import React from "react";
import heroImage from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = (props) => {
  const greetings = () => {
    const today = new Date();
    // const day = today.getDate();
    // let month = today.getMonth() + 1;
    // let year = today.getFullYear();
    const hours = today.getHours();

    let result = "";
    if (hours >= 0 && hours <= 11) {
      result = `Godd Morning visitor🌅  `;
    } else if (hours >= 12 && hours <= 17) {
      result = `Good AfterNoon visitor 🕛 `;
    } else if (hours >= 18) {
      result = "Good Evening visitor 🌇 ";
    }
    return result;
  };
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
          <div className="m-10">
            <h3 className="text-2xl mt-9 sm:text-2xl font-bold text-white   motion-safe:animate-bounce w-6 h-6 delay-1000 duration-900 ease-in-out ">{`${greetings()}`}</h3>
          </div>
          <h2 className="text-4xl mt-9 sm:text-7xl font-bold text-white ">
            {/* change the text to white */}
            {` I am a Front-end developer`}
          </h2>
          <p className="text-xl mt-9 sm:text-xl font-bold text-white ">
            {` i have done course in react front-end i have built this Portfolio
            for learning `}
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
              <span className="  group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1 " />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <h1>{greetings} </h1>
        </div>
        <div>
          <img
            src={heroImage}
            alt="vijay"
            className=" opacity-40 drop-shadow-2xl backdrop-opacity-10 backdrop-invert bg-white/30 shadow-white rounded-2xl mx-auto w-2/3 fill-transparent md:w-full shadow-white-10 mb-36"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
