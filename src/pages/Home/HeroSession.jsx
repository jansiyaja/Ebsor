import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    subtitle: "Smart ERP Solutions for Modern Teams",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    subtitle: "Seamless Business Connectivity",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    subtitle: "Scale Faster with Intelligent Systems",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#113f5e]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt="Hero Slide"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/70" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <h1 className="relative inline-block text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
                Powering Connected Businesses
              </h1>

              <AnimatePresence mode="wait">
                <motion.p
                  key={slides[index].subtitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-200 text-lg sm:text-xl"
                >
                  {slides[index].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
