import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useState } from "react";

export default function StripeLine({
  color = "#8b5cf6",
  radius = 2.5,
  speed = 0.006,
  tailLength = 80,
}) {
  const progress = useRef(Math.random());
  const headRef = useRef();
  const endPointRef = useRef();
  const [seed, setSeed] = useState(0);

  /* 🔀 Random curved route */
  const curve = useMemo(() => {
    const pts = [];

    // Function to generate a random point on a sphere
    const getRandomPointOnSphere = (radius) => {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    const start = getRandomPointOnSphere(radius);
    const end = getRandomPointOnSphere(radius);

    pts.push(start);

    // Add intermediate points for curve
    for (let i = 0; i < 3; i++) {
      const intermediate = start
        .clone()
        .lerp(
          new THREE.Vector3(
            THREE.MathUtils.randFloatSpread(radius * 2),
            THREE.MathUtils.randFloatSpread(radius * 2),
            THREE.MathUtils.randFloatSpread(radius * 2),
          ),
          0.3 + i * 0.2,
        )
        .normalize()
        .multiplyScalar(radius + 0.8);

      pts.push(intermediate);
    }

    // Add final endpoint
    pts.push(end);

    return new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.5);
  }, [seed, radius]);

  const points = useMemo(() => curve.getPoints(350), [curve]);

  /* 🟣 Stripe geometry */
  const stripeGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points);
    g.setDrawRange(0, 0);
    return g;
  }, [points]);

  useFrame(() => {
    progress.current += speed;

    if (progress.current >= 1) {
      progress.current = 0;
      setSeed((s) => s + 1);
    }

    const index = Math.floor(progress.current * points.length);

    stripeGeometry.setDrawRange(Math.max(0, index - tailLength), tailLength);

    // 🔴 moving active point
    headRef.current.position.copy(curve.getPoint(progress.current));
  });

  return (
    <>
      {/* faint base path */}
      <line>
        <bufferGeometry attach="geometry" setFromPoints={points} />
        <lineBasicMaterial color={color} transparent opacity={0.12} />
      </line>

      {/* moving stripe */}
      <line geometry={stripeGeometry}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </line>

      {/* 🔥 moving head (ACTIVE POINT) */}
      <mesh ref={headRef}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.5}
        />
      </mesh>

      {/* 📍 destination point (PASSIVE, NOT GLOWING) */}
      <mesh ref={endPointRef} position={points[points.length - 1]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </>
  );
}
