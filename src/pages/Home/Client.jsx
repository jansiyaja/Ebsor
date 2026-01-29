import React, { useState } from "react";
import { motion } from "framer-motion";

const clients = [
  { logo: "clients/13.png" },
  { logo: "clients/14.png" },
  { logo: "clients/15.png" },
  { logo: "clients/16.png" },
  { logo: "clients/17.png" },
  { logo: "clients/18.png" },
  { logo: "clients/19.png" },
];

export default function Client() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="bg-white py-20 overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <h1
          id="clients-heading"
          className="text-center text-2xl  font-medium text-gray-500 uppercase tracking-widest mb-12"
        >
          Key Clientele
        </h1>

        {/* Logo Row */}
        <motion.div
          className="flex gap-20 w-max items-center"
          initial={{ x: "100%" }}
          animate={{ x: paused ? undefined : "-20%" }}
          transition={{
            duration: 14,
            ease: "linear",
          }}
          onHoverStart={() => setPaused(true)}
          onHoverEnd={() => setPaused(false)}
        >
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt="Client logo"
              className="h-12 md:h-14 transition duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
