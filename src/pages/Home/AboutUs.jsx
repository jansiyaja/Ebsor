import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ===================== 3D STORY CORE ===================== */

function StoryCore({ progress }) {
  const mesh = useRef();

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x += 0.001;
    mesh.current.scale.setScalar(1.15 + progress * 0.5);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[1.3, 64, 64]}>
        <meshStandardMaterial
          color="#0ea5e9"
          roughness={0.25}
          metalness={0.85}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

/* ===================== MAIN SECTION ===================== */

export default function AboutUs() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.35]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const sections = [
    {
      id: "01",
      title: "Where It All Began",
      content:
        "Founded in 2012, EBSOR Infosystems started with one belief — technology should simplify decisions, not complicate them.",
    },
    {
      id: "02",
      title: "Listening Before Building",
      content:
        "By understanding client challenges deeply, we aligned IT with business intent — creating solutions that scale naturally.",
    },
    {
      id: "03",
      title: "Expertise That Evolves",
      content:
        "Our strength is a team that never stops learning — delivering innovation with precision, reliability, and trust.",
    },
    {
      id: "04",
      title: "Transformation at Scale",
      content:
        "Today, we lead organizations through digital transformation — transferring skills, clarity, and confidence.",
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      {/* ===================== BACKGROUND 3D ===================== */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <StoryCore progress={scrollYProgress.get()} />
        </Canvas>

        {/* Soft cinematic glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-indigo-100/40"
        />
      </div>

      {/* ===================== CONTENT ===================== */}
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-sky-900 mb-24 max-w-3xl"
        >
          A Journey Shaped by Vision, Trust & Transformation
        </motion.h2>

        {/* ===================== TIMELINE ===================== */}
        <div className="relative grid grid-cols-[60px_1fr] gap-x-12">
          {/* Vertical line */}
          <div className="relative flex justify-center">
            <div className="w-px bg-gray-200 h-full" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 w-px bg-sky-600"
            />
          </div>

          {/* Story blocks */}
          <div className="space-y-32">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative"
              >
                {/* Chapter Badge */}
                <div className="absolute -left-[92px] top-2 w-14 h-14 rounded-2xl bg-sky-900 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                  {section.id}
                </div>

                {/* Content */}
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
