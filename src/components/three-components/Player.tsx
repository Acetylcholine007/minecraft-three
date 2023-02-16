import { JUMP_FORCE, MOVE_SPEED } from '@/constants/player';
import useKeyboard from '@/hooks/useKeyboard';
import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { BufferGeometry, Mesh, Vector3 } from 'three';

export interface PlayerProps {}

const Player: React.FC<PlayerProps> = () => {
  const { moveBackward, moveForward, moveLeft, moveRight, jump } =
    useKeyboard();

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

    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1]) < 0.05) {
      api.velocity.set(velocity.current[0], JUMP_FORCE, velocity.current[2]);
    }
  });

  return <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}></mesh>;
};

export default Player;
