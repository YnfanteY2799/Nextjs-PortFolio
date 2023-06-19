import { ReactElement, Suspense } from "react";
import { Preload, useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";

export default function RotationCanvas(): ReactElement {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 40, position: [-3, 2, 5] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Phone_booth />
        <Preload all={true} />
      </Suspense>
    </Canvas>
  );
}

function Phone_booth(): ReactElement {
  const phone = useGLTF("./3D/phone_booth/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="gray" />
      <primitive object={phone.scene} scale={0.4} position-y={-1.9} rotation-y={0} />
    </mesh>
  );
}
