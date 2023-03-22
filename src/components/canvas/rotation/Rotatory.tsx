import { useGLTF } from "@react-three/drei";
import { ReactElement } from "react";

export default function Earth(): ReactElement {
  const planet = useGLTF("./phone_booth/scene.gltf");
  return <primitive object={planet.scene} scale={0.4} position-y={-1} rotation-y={0} />;
}
