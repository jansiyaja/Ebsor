import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

function ImageCube() {
  const textures = useLoader(TextureLoader, [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&q=80",
  ]);

  return (
    <>
      <mesh scale={2}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        {textures.map((texture, i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            map={texture}
          />
        ))}
      </mesh>

      {/* Allows manual rotation */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default ImageCube;
