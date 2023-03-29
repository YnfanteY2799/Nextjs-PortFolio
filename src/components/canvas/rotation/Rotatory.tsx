import { useGLTF } from "@react-three/drei";
import { ReactElement } from "react";

export default function Earth(): ReactElement {
  const planet = useGLTF("./phone_booth/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="white" />

      <primitive object={planet.scene} scale={0.4} position-y={-1.9} rotation-y={0} />
    </mesh>
  );
}
