import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Laptop,
  Server,
  Palette,
  Wrench,
  Smartphone,
  Cloud,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Customized Software",
    subtitle: "Made-to-order | Specialized | Personalized",
    description:
      "Empower your business with software solutions designed to drive success.",
    icon: Laptop,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Hardware & Networking",
    subtitle: "Equipment | Connectivity | Infrastructure",
    description:
      "Unlock the power of seamless hardware and networking solutions.",
    icon: Server,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 3,
    title: "Website Designing",
    subtitle: "Web Development | UX/UI Design | Web Design",
    description:
      "Designing the future of your online presence, creativity meets functionality in website design.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Maintenance & Support",
    subtitle: "Upkeep | Assistance | Service",
    description:
      "Keep your business running smoothly and ensure your business is always up.",
    icon: Wrench,
    color: "from-teal-500 to-green-500",
  },
  {
    id: 5,
    title: "Mobile App Development",
    subtitle: "Process tracking | Wages calculation",
    description:
      "Revolutionize your business & delivering innovation to your fingertips.",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    title: "Cloud Solutions",
    subtitle: "Scalable | Secure | Reliable",
    description:
      "Deploy and scale your applications with enterprise-grade cloud infrastructure.",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
  },
];


const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const Icon = service.icon;

  // Anti-clockwise rotation based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [15, -15]);

  // Scale effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Opacity effect
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Vertical movement - bottom to top on scroll down
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotate,
        scale,
        opacity,
        y,
      }}
      className="w-full"
    >
      <motion.div
        className={`relative bg-gradient-to-br ${service.color} rounded-2xl p-8 shadow-2xl overflow-hidden h-full min-h-[320px] flex flex-col justify-between`}
        whileHover={{
          scale: 1.05,
          rotate: -2,
          transition: { duration: 0.3 },
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-6"
            animate={{
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Icon className="w-16 h-16 text-white" />
          </motion.div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-white mb-3">
            {service.title}
          </h3>

          {/* Subtitle */}
          <p className="text-white/80 text-sm mb-4 font-medium">
            {service.subtitle}
          </p>

          {/* Description */}
          <p className="text-white/90 text-base leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Learn More Button */}
        <motion.button
          className="relative z-10 mt-6 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors w-fit"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More →
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const ServicePage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effect for the title
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-gradient-to-br from-slate-150 via-blue-50 to-indigo-50 min-h-screen">

      {/* Services Grid Section */}
      <div ref={containerRef} className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Sticky Description */}
            <div className="lg:sticky lg:top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our Expertise
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  From custom software development to comprehensive cloud
                  solutions, we deliver innovative technology services that
                  drive business growth and digital transformation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        Expert Team
                      </h4>
                      <p className="text-gray-600">
                        Certified professionals with years of experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        24/7 Support
                      </h4>
                      <p className="text-gray-600">
                        Round-the-clock assistance for your business
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        Quality Assured
                      </h4>
                      <p className="text-gray-600">
                        Rigorous testing and quality control processes
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side - Scrolling Service Cards */}
            <div className="space-y-16">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our services can help you achieve your goals
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
