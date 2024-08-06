import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { DollarSign, Zap, Moon, Filter } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Navbar />
      <Hero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-black">
              Why Choose Me?
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Proven Success and Personalized Guidance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            With my firsthand experience of winning SIH 2023, I am here to
            provide you with the insights, strategies, and support you need to
            achieve your goals.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <DollarSign className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Affordable Guidance
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Get top-notch guidance at a price that won’t break the bank.
              Investing in your success has never been more accessible.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Zap className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Quick and Effective Strategies
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Learn the quickest paths to success with tried-and-true strategies
              that have proven to work in real-world scenarios.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Moon className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Experience and Expertise
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Benefit from the experience and expertise of an SIH winner who
              knows what it takes to succeed.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <Filter className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Personalized Support
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Receive personalized support tailored to your unique needs,
              ensuring you get the most out of our sessions.
            </p>
          </div>
        </div>
      </div>

      {/* pricing component */}
      <section
        id="plans"
        className="scroll-smoothrelative overflow-hidden py-10 mt-24"
      >
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-24 max-w-2xl text-center lg:max-w-5xl">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Choose Your Path to SIH Success
            </h1>
            <p className="text-lg text-gray-500">
              Select the service that best fits your needs and start your
              journey to winning SIH today!
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full lg:w-1/3 px-2 mb-8 lg:mb-0">
                <div className="mx-auto max-w-sm rounded-lg border border-gray-200 bg-white pb-12 px-5 pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">
                    PDF GUIDE
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      ₹99
                    </span>
                    <span className="text-sm font-semibold">/one-time</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Comprehensive Guide
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Proven Strategies
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Expert Tips
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-2 mb-8 lg:mb-0 mt-5 lg:mt-0">
                <div className="relative mx-auto max-w-sm rounded-lg bg-white pb-12 px-5 pt-6">
                  <div className="absolute  left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-purple-600 p-1">
                    <div className="flex-shrink-0 rounded-full bg-[#030712] px-5 py-4 text-sm font-semibold uppercase text-white">
                      Most Popular
                    </div>
                  </div>
                  <span className="mb-2 block pt-10 text-sm font-semibold text-gray-400">
                    1-HOUR CALL
                  </span>
                  <span className="flex items-end text-gray-900">
                    <span className="text-4xl font-extrabold leading-none">
                      ₹499
                    </span>
                    <span className="text-sm font-semibold">/session</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Personalized Strategies
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Direct Interaction
                        </span>
                      </li>{" "}
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Direct Interaction
                        </span>
                      </li>{" "}
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Direct Interaction
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Expert Advice
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-2 mb-8 lg:mb-0">
                <div className="mx-auto max-w-sm rounded-lg border border-gray-200 bg-white pb-12 px-5 pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">
                    COMPLETE HANDHOLDING
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      ₹999
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Full Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Step-by-Step Guidance
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Regular Check-ins
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Custom Plans
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Continuous Improvement
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src="/myImage.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I am Atharva Joshi
            </h1>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Hello👋, I’m Atharva Joshi, winner of SIH 2023. As the leader of
              my winning team, I navigated the challenges and triumphs of the
              competition with dedication and strategic insight. My passion for
              innovation and technology extends beyond the competition as I am
              also recognized as a top voice in the software community on
              LinkedIn. I’m here to share my expertise and guide you through
              your own journey with exclusive resources, personalized
              consultations, and comprehensive handholding to help you achieve
              success in SIH 2024 and beyond.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/atharva-joshi-138a8a224/"
                target="blank"
                className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Faq />
    </main>
  );
}
