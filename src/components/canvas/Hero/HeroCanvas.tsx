import { ReactElement, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "@/components/canvas";
import { OrbitControls, Preload } from "@react-three/drei";
import HeroModel from "./HeroModel";

export default function HeroCanvas(): ReactElement {
  const [isMobile, setIsMobile] = useState();

  return (
    <Canvas
      frameloop="demand"
      shadows={true}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <HeroModel isMobile={isMobile} />
      </Suspense>
      <Preload all={true} />
    </Canvas>
  );
}
