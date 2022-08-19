import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import usestate from "../assets/portfolio/usestate.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      // here  to add the links and add onClick( to the button)
      // add link here
      link: "https",
    },
    {
      id: 2,
      src: arrayDestruct,
    },
    {
      id: 3,
      src: usestate,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
       to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto
       flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 pt-3">
          <p className="text-4xl md:mt-20 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* looping  */}
          {portfolios.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 " />
                <div className="flex justify-between items-center ">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200  hover:scale-x-105 ">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
