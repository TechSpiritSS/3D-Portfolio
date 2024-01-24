import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

interface SkyProps {
  isRotating: boolean;
}

const Sky: React.FC<SkyProps> = ({ isRotating }) => {
  const sky = useGLTF('/3d/sky.glb');
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) sky.scene.rotation.y += 0.15 * delta;
  });

  return (
    // @ts-ignore
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
