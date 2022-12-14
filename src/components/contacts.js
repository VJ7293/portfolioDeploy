import React from "react";
import ScrollToTop from "react-scroll-to-top";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-gradient-to-b
     from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex  justify-center items-center">
          <form
            action="https://getform.io/f/d57d6c32-dcbb-4530-8c92-97d53cd1b425"
            method="post"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 
              rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 
              rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 
              rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              //   className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
              // items-center rounded-md hover:scale-110 duration-300"
              className="text-cyan-900 bg-gradient-to-t from-cyan-800 to-blue-300  px-6 py-3 my-8 mx-auto flex
            items-center rounded-md hover:scale-110 duration-300"
            >
              <img
                src="https://img.icons8.com/3d-fluency/24/000000/paper-plane.png"
                alt="paper plane"
              />
              lets talk
            </button>
          </form>
        </div>
        <iframe
          title="share,Like"
          className="fixed top-[35%] right-0  md:mr-auto opacity-50"
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fgrand-salmiakki-ec9d6f.netlify.app&width=188&layout=button&action=recommend&size=large&share=true&height=65&appId"
          width="250"
          height="auto"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <ScrollToTop smooth />
    </div>
  );
};

export default Contacts;
