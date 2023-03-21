import { Float, Decal, useTexture } from "@react-three/drei";
import { ReactElement } from "react";

export default function BallModel({ icon }: { icon?: string }): ReactElement {
  const [decal] = useTexture([icon ?? ""]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={true} receiveShadow={true} scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset={true}
          polygonOffsetFactor={-5}
          flatShading={true}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading={true}
          map={decal}
        />
      </mesh>
    </Float>
  );
}
