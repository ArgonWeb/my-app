import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#030712] text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="lg:mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
            Unlock Your SIH Success{" "}
            <span className="text-2xl  md:text-3xl lg:text-5xl">🥇</span>
          </h1>
          <p className="mt-8 text-lg text-gray-300">
            Welcome to your ultimate resource for SIH success! I am Atharva, the
            SIH 2023 winner. With my experience and expertise, I am here to
            guide you through your journey to victory.
          </p>
          <div className="mt-8 flex items-start space-x-2">
            <div>
              <button
                type="button"
                className=" bg-black px-10 rounded-full py-5 text-md font-semibold bg-gradient-to-br from-violet-700 to-pink-700 via-purple-700 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 hover:shadow-lg "
              >
                Get the Guide
              </button>
            </div>
            <div>
              <button
                type="button"
                className="rounded-full  px-10 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border-2 border-gray-500 hover:border-purple-500 "
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className=" bg-gray-50 h-[300px] w-[270px] m-auto lg:h-[500px] lg:w-[400px] mt-8 lg:ml-40 rounded-2xl"
            src="/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
