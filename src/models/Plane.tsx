import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Euler, Vector3 } from 'three';

interface PlaneProps {
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
  isRotating: boolean;
}

const Plane: React.FC<PlaneProps> = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF('/3d/plane.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) actions['Take 001']?.play();
    else actions['Take 001']?.stop();
  }, [actions, isRotating]);

  return (
    // @ts-ignore
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
