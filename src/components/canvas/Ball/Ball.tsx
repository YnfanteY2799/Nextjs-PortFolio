import { ReactElement, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Ball from "./BallModel";

export default function BallCanvas({ icon }: { icon?: string }): ReactElement {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
