"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { Code, Smartphone, Monitor, Activity } from "react-feather";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [controls]);

  return (
    <main className="bg-[#030712]">
      <Navbar />
      <Hero />

      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <motion.div
          className="mx-auto max-w-xl text-center animate-on-scroll"
          variants={fadeInUp}
        >
          <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              Why Choose Us?
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Excellence in Digital Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            At Argon, we specialize in creating outstanding digital experiences
            that drive results. Our team is dedicated to delivering innovative
            solutions tailored to your business needs.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 animate-on-scroll"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Code className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Expert Web Development
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Our experienced developers build responsive, high-performance
              websites that enhance your online presence.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Smartphone className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Innovative App Solutions
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              We create intuitive and engaging mobile applications that offer
              seamless user experiences across all devices.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Monitor className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Creative Ad Campaigns
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Our creative team designs compelling ad campaigns that capture
              attention and drive conversions.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Activity className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Strategic Consulting
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Leverage our expertise to develop effective strategies that align
              with your business goals and accelerate growth.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
