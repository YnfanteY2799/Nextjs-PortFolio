import { ReactElement, Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Rotatory from "./Rotatory";
import Loader from "../Loader";

export default function RotationCanvas(): ReactElement {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Rotatory />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
