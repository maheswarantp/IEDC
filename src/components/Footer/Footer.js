import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black	w-full py-8 mt-10" id="Contact-Page">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-white w-full text-center text-3xl">Want to Know More ?</h1>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-evenly">
          <a
            href="https://instagram.com/fisatiedc?igshid=YmMyMTA2M2Y="
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 50 50"
              width="30"
              height="30"
            >
              {" "}
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
            </svg>
          </a>
          <a
            href="https://t.me/+8HosW0PAYfc5MWQ1"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <svg
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 50 50" 
              width="30" 
              height="30">
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/>
              </svg>
          </a>
        </div>
        <div className="flex flex-col w-full text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <h3 className="text-white text-2xl mt-5 mb-5 ">Reach Us at </h3>
          <form className="flex flex-col w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center" name="contact" method="post">
            <div className="">
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="email"
                name="email"
                id=''
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
              <input
                type="text"
                name="message"
                id=''
                className="mt-5 h-48 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Message"
              />
              <button
                className="mt-5 flex-shrink-0 px-4 py-2 text-base font-semibold text-white border-white border-2 rounded-lg shadow-md hover:bg-white hover:text-black duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          IEDC | FISAT
        </div>
      </div>
    </footer>
  );
}
