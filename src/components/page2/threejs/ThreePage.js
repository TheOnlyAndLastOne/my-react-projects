import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Iphone from "./Iphone";

const ThreePage = () => {
  return (
    <div>
      <Canvas style={{ height: "400px" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreePage;
