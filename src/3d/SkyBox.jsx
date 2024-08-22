import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export default function SkyBox() {
  const texture = useTexture("/assets/bg1-optimised.jpg");
  texture.flipY = false; // Ensure the texture is flipped vertically

  return (
    <mesh rotation={[Math.PI, 0, 0]}>
      <sphereGeometry
        castShadow={false}
        receiveShadow={false}
        args={[120, 64, 64]}
      />
      <meshBasicMaterial toneMapped={false} map={texture} side={BackSide} />
    </mesh>
  );
}
