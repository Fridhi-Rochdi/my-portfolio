import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';

    import { Macbook } from './Macbook';
import { OrbitControls, Stage } from '@react-three/drei';
const MacbookContainer= () => {
  return (
   <Canvas >
    <Suspense fallback="loading..">
        <Stage environment="night" intensity={0.5} >
        <Macbook /> 
        </Stage>
        
         <OrbitControls enableZoom={false} autoRotate/>
         <perspectiveCamera position={[0, 0, 6]} zoom={3} makeDefault />

    </Suspense>
   </Canvas>
  );
}

export default MacbookContainer;
