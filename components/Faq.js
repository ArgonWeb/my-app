"use client";
import { useState } from "react";
const faqs = [
  {
    id: 1,
    question: "What is the SIH PDF Guide?",
    answer:
      "The SIH PDF Guide is a comprehensive document that contains strategies, tips, and detailed information to help you prepare for and succeed in the Smart India Hackathon (SIH). It is designed by the SIH 2023 winner, leveraging their experience and insights.",
  },
  {
    id: 2,
    question: "What topics are covered in the SIH PDF Guide?",
    answer:
      "The SIH PDF Guide covers a wide range of topics, including ideation, team formation, project development, presentation skills, and tips for the final hackathon. It also includes case studies and examples of successful projects.",
  },
  {
    id: 3,
    question: "How can I schedule a one-hour call?",
    answer:
      "To schedule a one-hour call, you can visit the '1 Hour Call' section on the website and follow the instructions to book a slot. Once the booking is confirmed, you will receive a link for the call.",
  },
  {
    id: 4,
    question: "What will be discussed during the one-hour call?",
    answer:
      "During the one-hour call, you can discuss any aspects of SIH preparation, seek personalized advice, and get answers to your specific questions. The session is tailored to your needs to help you prepare effectively for SIH.",
  },
  {
    id: 5,
    question: "What is included in the Complete Handholding service?",
    answer:
      "The Complete Handholding service includes personalized guidance and support throughout your SIH preparation journey. This includes regular check-ins, feedback on your project, help with presentation skills, and continuous mentorship until the final hackathon.",
  },
  {
    id: 6,
    question: "How do I sign up for the Complete Handholding service?",
    answer:
      "To sign up for the Complete Handholding service, visit the 'Complete Handholding' section on the website and fill out the registration form. You will be contacted shortly with further details and next steps.",
  },
  {
    id: 7,
    question: "Is there a refund policy for any of the services?",
    answer:
      "Yes, there is a refund policy. If you are not satisfied with the services provided, you can request a refund within a specified period. Please refer to our refund policy page for detailed information.",
  },
  {
    id: 8,
    question: "Can I get a discount if I purchase multiple services?",
    answer:
      "Yes, we offer discounts for purchasing multiple services. Please check our pricing page for bundle offers and discounts.",
  },
  {
    id: 9,
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support by visiting the 'Contact Us' page on the website. You can reach out via email or phone, and our support team will assist you with any queries or issues.",
  },
  {
    id: 10,
    question: "Are the services available for individuals or teams?",
    answer:
      "The services are available for both individuals and teams. Whether you are preparing solo or with a team, our resources and guidance are designed to help you succeed in SIH.",
  },
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  return (
    <div id="faq">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-wrap -m-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="p-4 w-full">
                <div
                  className="bg-[#0a0f1d] p-8 rounded-lg cursor-pointer"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h2 className="text-xl font-medium text-white mb-4 flex justify-between items-center">
                    {faq.question}
                    <span className="text-gray-500 text-2xl">
                      {openFaq === faq.id ? "-" : "+"}
                    </span>
                  </h2>
                  {openFaq === faq.id && (
                    <p className="leading-relaxed text-gray-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
