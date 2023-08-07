import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
// import AI from "../assets/portfolio/TaeJune15.jpg";
import NotesApp from "../assets/portfolio/notesApp.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
      // here  to add the links and add onClick( to the button)
      // add link here
      codelink: "https://github.com/VJ7293/React_weather_App.git",
      demolink: "https://vijayweatherapp.netlify.app",
    },
    // {
    //   id: 2,
    //   src: AI,
    //   demolink: "https://vj-open-ai.vercel.app",
    // },
    {
      id: 3,
      src: NotesApp,
      demolink: "https://vjnotes.netlify.app",
      codelink: "https://github.com/VJ7293/Notes_App.git  ",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black
       to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto
       flex flex-col justify-center w-full h-auto"
      >
        <div className="pb-8 pt-3">
          <p className="text-4xl md:mt-20 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-4 md:grid-cols-5 gap-8 px-12 sm:px-0">
          {/* looping  */}
          {portfolios.map(({ id, src, codelink, demolink }) => {
            return (
              <div
                key={id}
                className="mt-8 shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md overflow-auto w-full h-full  duration-200 "
                />
                <div className="flex justify-between items-center ">
                  <button className="w-1/2 px-6 py-3 duration-200  hover:scale-105">
                    <a
                      href={demolink}
                      target="_blank"
                      key={id}
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200  hover:scale-x-105 ">
                    <a
                      href={codelink}
                      target="_blank"
                      key={id}
                      rel="noreferrer"
                    >
                      Code
                    </a>
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
