import { Canvas } from "@react-three/fiber";
import { ReactElement, Suspense } from "react";
import { CanvasLoader } from "@/components/canvas";
import { OrbitControls, Preload } from "@react-three/drei";

export default function HeroCanvas(): ReactElement {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all={true} />
    </Canvas>
  );
}
