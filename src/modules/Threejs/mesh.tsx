import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";

function MyScene() {
  const meshRef = useRef(null);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function MeshScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MyScene />
    </Canvas>
  );
}

export default MeshScene;
