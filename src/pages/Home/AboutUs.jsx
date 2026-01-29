import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ===================== 3D IMAGE CUBE ===================== */

function ImageCube({ progress }) {
  const cubeRef = useRef();

  const textures = useLoader(TextureLoader, [
    // Vision
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    // Clients
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    // Team
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    // Growth
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  ]);

  useFrame(() => {
    if (!cubeRef.current) return;

    // Scroll-based rotation (storytelling feel)
    cubeRef.current.rotation.y = progress * Math.PI * 1.5;
    cubeRef.current.rotation.x = progress * Math.PI * 0.25;
  });

  return (
    <mesh ref={cubeRef} scale={2.2}>
      <boxGeometry args={[1.6, 1.6, 1.6]} />
      {textures.map((texture, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={texture}
        />
      ))}
    </mesh>
  );
}

/* ===================== MAIN STORY SECTION ===================== */

export default function AboutStoryCube() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative bg-white overflow-hidden"
    >
      {/* ===================== STICKY 3D SCENE ===================== */}
      <div className="sticky top-0 h-screen -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[4, 4, 6]} intensity={1.5} />
          <ImageCube progress={scrollYProgress.get()} />
        </Canvas>

        {/* Soft cinematic overlay */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-sky-100/40 via-transparent to-indigo-100/40"
        />
      </div>

      {/* ===================== STORY CONTENT ===================== */}
      <div className="relative max-w-6xl mx-auto px-6 py-[120vh]">
        <div className="space-y-40 max-w-2xl">
          {[
            {
              title: "Our Vision",
              text:
                "We started with one belief — technology should simplify complexity and unlock better decisions.",
            },
            {
              title: "Built on Trust",
              text:
                "Every partnership is shaped by transparency, collaboration, and long-term value creation.",
            },
            {
              title: "People Behind Progress",
              text:
                "A passionate team of thinkers, builders, and innovators driving meaningful solutions.",
            },
            {
              title: "Scaling the Future",
              text:
                "We help organizations evolve digitally with confidence, clarity, and sustainable growth.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-sky-900 mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
