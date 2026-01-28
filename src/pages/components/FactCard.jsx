import { Html, Float } from "@react-three/drei";

export default function FactCard({ fact }) {
  return (
    <Float speed={1.2} floatIntensity={0.5}>
      <Html position={[0, 2.6, 0]} center>
        <div className="w-64 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-xl">
          <h4 className="text-lg font-semibold">{fact.title}</h4>
          <p className="text-sm text-white/70 mt-1">{fact.value}</p>
        </div>
      </Html>
    </Float>
  );
}
