import { useMemo } from "react";

export default function GlobePoints() {
  const positions = useMemo(() => {
    const pts = [];
    const r = 2.38;

    for (let i = 0; i < 400; i++) {
      const lat = Math.random() * Math.PI - Math.PI / 2;
      const lon = Math.random() * Math.PI * 2;

      pts.push(
        r * Math.cos(lat) * Math.cos(lon),
        r * Math.sin(lat),
        r * Math.cos(lat) * Math.sin(lon)
      );
    }
    return new Float32Array(pts);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#6366f1"
        transparent
        opacity={0.35}
      />
    </points>
  );
}
