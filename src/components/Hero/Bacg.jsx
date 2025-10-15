import React, { useEffect } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const Bacg = () => {
  

  return (
    <>
      {/* Lumières pour l'éclairage de la scène */}
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />

      {/* Sphère animée avec effet de distorsion */}
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial color="#ffffff" distort={0.5} speed={2} />
      </Sphere>
    </>
  );
};

export default Bacg;
