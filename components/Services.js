"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Services = () => {
  return (
    <section
      id="plans"
      className="scroll-smooth relative overflow-hidden py-10 mt-24 bg-[#030712] text-white"
    >
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Services
          </h1>
          <p className="text-lg text-gray-500">
            We understand businesses and aid them in solving problems for the
            world – a pivotal trait in the ever-evolving digital landscape. With
            each sector presenting unique challenges, our cross-industry
            exposure has enabled us to cultivate a holistic understanding of
            user behavior and preferences.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-wrap items-center justify-center">
            <motion.div
              className="w-full lg:w-1/3 px-2 mb-8 lg:mb-0"
              variants={fadeInUp}
            >
              <div className="relative h-[400px] w-[300px] rounded-md">
                <img
                  src="/web.png"
                  alt="Website Building"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold">Website Building</h1>
                  <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/3 px-2 mb-8 lg:mb-0"
              variants={fadeInUp}
            >
              <div className="relative h-[400px] w-[300px] rounded-md">
                <img
                  src="/social.png"
                  alt="Social Media Management"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold">
                    Social Media Management
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/3 px-2 mb-8 lg:mb-0"
              variants={fadeInUp}
            >
              <div className="relative h-[400px] w-[300px] rounded-md">
                <img
                  src="/ads.png"
                  alt="Paid Ads"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold">Paid Ads</h1>
                  <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
