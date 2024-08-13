"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <div className="relative w-full bg-[#030712] text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <motion.div
          className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="lg:mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
            Elevate Your Digital Presence
          </h1>
          <p className="mt-8 text-lg text-gray-300">
            Welcome to Argon, where we bring your ideas to life. We specialize
            in creating stunning websites, innovative apps, engaging ads, and
            much more. Let us help you stand out in the digital world.
          </p>
          <div className="mt-8 flex items-start space-x-2">
            <div>
              <button
                type="button"
                className="bg-black px-10 rounded-full py-5 text-md font-semibold bg-gradient-to-br from-violet-700 to-pink-700 via-purple-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 hover:shadow-lg"
              >
                Our Services
              </button>
            </div>
            <div>
              <button
                type="button"
                className="rounded-full px-10 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black border-2 border-gray-500 hover:border-purple-500"
              >
                Book a Call
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }} // Adds a slight delay for the image animation
        >
          <img
            className="h-[300px] w-[270px] m-auto lg:h-[500px] lg:w-[500px] mt-8 lg:ml-30 rounded-2xl"
            src="/hero3.svg"
            alt="Digital Agency"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
