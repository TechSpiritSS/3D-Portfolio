'use client';

import { Euler, Vector3 } from 'three';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';

import HomeInfo from '@/components/HomeInfo';
import Loader from '@/components/Loader';
import Bird from '@/models/Bird';
import Island from '@/models/Islands';
import Plane from '@/models/Plane';
import Sky from '@/models/Sky';

const MOBILE_SCREEN_WIDTH = 768;
const INITIAL_SCREEN_POSITION = new Vector3(0, -6.5, -43);
const INITIAL_ROTATION = new Euler(0.1, 4.7, 0);
const MOBILE_SCREEN_SCALE = new Vector3(0.9, 0.9, 0.9);
const DESKTOP_SCREEN_SCALE = new Vector3(1, 1, 1);

const Home: React.FC = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  const adjustIsland = () => {
    if (typeof window === 'undefined') {
      return {
        screenScale: DESKTOP_SCREEN_SCALE,
        screenPosition: INITIAL_SCREEN_POSITION,
        rotation: INITIAL_ROTATION,
      };
    }

    const isMobile = window.innerWidth < MOBILE_SCREEN_WIDTH;

    const screenScale = isMobile ? MOBILE_SCREEN_SCALE : DESKTOP_SCREEN_SCALE;
    const screenPosition = INITIAL_SCREEN_POSITION;
    const rotation = INITIAL_ROTATION;

    return { screenScale, screenPosition, rotation };
  };

  const adjustPlane = () => {
    if (typeof window === 'undefined') {
      return {
        planeScreenScale: DESKTOP_SCREEN_SCALE,
        planeScreenPosition: INITIAL_SCREEN_POSITION,
      };
    }

    const isMobile = window.innerWidth < MOBILE_SCREEN_WIDTH;

    const screenScale = isMobile
      ? new Vector3(1.5, 1.5, 1.5)
      : new Vector3(3, 3, 3);
    const screenPosition = isMobile
      ? new Vector3(0, -1.5, 0)
      : new Vector3(0, -4, -4);

    return {
      planeScreenScale: screenScale,
      planeScreenPosition: screenPosition,
    };
  };

  const { screenScale, screenPosition, rotation } = adjustIsland();
  const { planeScreenScale, planeScreenPosition } = adjustPlane();

  const planeRotation = new Euler(0, 20, 0);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight color={'#b1e1ff'} groundColor={'#000000'} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            scale={screenScale}
            position={screenPosition}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScreenScale}
            position={planeScreenPosition}
            isRotating={isRotating}
            rotation={planeRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
