import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ERP_FEATURES } from "../data/erpFeatures";

export default function FeaturesSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % ERP_FEATURES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const feature = ERP_FEATURES[active];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section className="relative  bg-gradient-to-br from-cyan-950 via-cyan-900 to-blue-950 overflow-hidden">
      {/* BACKGROUND ELEMENTS (REDUCED) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -top-32 left-1/4 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute -bottom-32 right-1/4 w-[380px] h-[380px] bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* HEADER */}
      <div className="relative max-w-7xl mx-auto px-10 mb-7 text-center">
       

        <h1 className="text-3xl md:text-4xl pt-5 font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
          Efficient ERP Solutions
          <br />
          <span className="text-2xl md:text-3xl">
            for Streamlined Operations
          </span>
        </h1>

        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          One unified ERP system for{" "}
          <span className="text-blue-400 font-semibold">Sales</span>,{" "}
          <span className="text-purple-400 font-semibold">Purchase</span>,{" "}
          <span className="text-cyan-400 font-semibold">Inventory</span> &{" "}
          <span className="text-indigo-400 font-semibold">Accounting</span>.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-5 items-center">
          {/* LEFT CONTENT */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={feature.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45 }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold text-white">
                  Featured Module
                </div>

                <h2 className="text-4xl font-bold text-white">
                  {feature.name}
                </h2>

                <p className="text-lg text-slate-300">
                  {feature.smallDescription}
                </p>

                <ul className="space-y-3 mt-5">
                  {feature.facts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 mt-2 bg-blue-500 rounded-full" />
                      <span className="text-slate-200 text-base">{fact}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={feature.link}
                  className="inline-flex items-center gap-2 mt-6 px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition"
                >
                  Learn more →
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={feature.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-75 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* LOGO SELECTOR */}
      <div className="relative max-w-7xl mx-auto px-6 mt-14">
        <div className="flex justify-around items-center py-4">
          {ERP_FEATURES.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleFeatureClick(i)}
              className={`transition ${
                active === i ? "scale-110 opacity-100" : "opacity-50"
              }`}
            >
              <img src={item.logo} alt={item.name} className="h-12" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
