import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import StripeLine from "./StripeLine";

const DATA = [
  { title: "10+ Years Experience", value: "ERP expertise", color: "#8b5cf6" },
  { title: "500+ Businesses", value: "Trusted globally", color: "#3b82f6" },
  { title: "1M+ Candidates", value: "Processed via ERP", color: "#22c55e" },
  { title: "Global Presence", value: "Across continents", color: "#eab308" },
];

export default function Scene() {
  const globeRef = useRef();
  const texture = useTexture("/textures/earth.jpg");



  // 🌍 Rotate globe
  useFrame(() => {
    globeRef.current.rotation.y += 0.0015;
  });


  return (
    <>
      {/* 🌍 Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2.4, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

    

     
    </>
  );
}
