import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: " Infosystems transformed our business. Their flagship product, They truly care about their clients and deliver outstanding results. I am very happy with the service received and look forward to continuing.",
    name: "Muhammed Shuaib",
    position: "Operations Manager",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    text: "Professional team with a strong understanding of business needs. Communication and delivery were excellent.",
    name: "Daniel Morris",
    position: "Product Lead",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  },
  {
    text: "Great experience working with them. The solutions provided helped us scale efficiently.",
    name: "Sophia Turner",
    position: "CEO & Founder",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Maersk_Logo.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fbf6f1] py-24 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Image */}
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Client Satisfaction"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Hear what our satisfied clients have to say about their
              experience.
            </h2>

            <p className="text-gray-600 mb-10">
              Honest testimonials that reflect our dedication to long-term
              client success and trust.
            </p>

            {/* Testimonial Slider */}
            <div className="relative h-64 overflow-hidden border-l border-gray-200 pl-8">
              <motion.div
                animate={{ y: ["100%", "-100%"] }}
                transition={{
                  duration: 19,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="space-y-14"
              >
                {testimonials.concat(testimonials).map((item, index) => (
                  <div key={index}>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      “{item.text}”
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.companyLogo}
                        alt="Company logo"
                        className="h-6 grayscale opacity-70"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
