import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { BufferGeometry, Mesh, Vector3 } from 'three';

export interface PlayerProps {}

const Player: React.FC<PlayerProps> = () => {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 1, 0],
  }));

  const position = useRef([0, 0, 0]);
  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => {
      position.current = p;
    });
  }, [api.position]);

  useEffect(() => {
    api.velocity.subscribe((v) => {
      velocity.current = v;
    });
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(new Vector3(...position.current));
  });

  return <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}></mesh>;
};

export default Player;
