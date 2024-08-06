// SVGIcon Component
const SVGIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="block w-5 h-5 text-purple-600 mb-4"
    viewBox="0 0 975.036 975.036"
  >
    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
  </svg>
);

// Testimonials Data
const testimonials = [
  {
    id: 1,
    quote:
      "The PDF guide was incredibly detailed and gave me the confidence to prepare for SIH. Thanks to this guide, I feel ready to tackle any challenge!",
    name: "Amit Sharma",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    quote:
      "The one-hour call with the SIH 2023 winner was eye-opening. The insights and tips shared were invaluable and gave me a clear path to follow for SIH 2024.",
    name: "Priya Rao",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    quote:
      "The complete handholding service was a game-changer. From the initial stages to the final preparations, I received constant support and guidance that kept me on track.",
    name: "Vikram Patel",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    quote:
      "I highly recommend the PDF guide to anyone serious about winning SIH. It's packed with useful information and strategies that you won't find anywhere else.",
    name: "Neha Gupta",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    quote:
      "The one-hour call was worth every penny. The personalized advice and encouragement helped me refine my approach and boosted my confidence.",
    name: "Rajesh Kumar",
    rating: "⭐⭐⭐",
  },
  {
    id: 6,
    quote:
      "The handholding service provided a structured and comprehensive approach to SIH preparation. The support I received was exceptional and made a huge difference.",
    name: "Sneha Menon",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    quote:
      "This PDF guide is a must-have for anyone aiming to win SIH. It's clear, concise, and covers everything you need to know.",
    name: "Anil Joshi",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 8,
    quote:
      "The one-hour call provided me with the clarity and direction I needed. The advice given was practical and tailored to my needs.",
    name: "Kavita Singh",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    quote:
      "The complete handholding service was exceptional. Having a mentor who has already won SIH made all the difference in my preparation.",
    name: "Suresh Iyer",
    rating: "⭐⭐⭐",
  },
];

const Testimonials = () => (
  <div id="testimonials">
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="mb-24 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-[#0a0f1d] p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-purple-600 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6 text-gray-400">
                  {testimonial.quote}
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col ">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {testimonial.rating}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
