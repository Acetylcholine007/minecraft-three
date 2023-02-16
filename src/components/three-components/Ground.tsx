import { textureSelector } from '@/assets/textures';
import useStore from '@/hooks/useStore';
import { usePlane } from '@react-three/cannon';
import { ThreeEvent } from '@react-three/fiber';
import { useCallback } from 'react';
import { BufferGeometry, Mesh, RepeatWrapping } from 'three';

export interface GroundProps {}

const Ground: React.FC<GroundProps> = () => {
  const [addBlock] = useStore((state) => [state.addBlock]);

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const groundTexture = textureSelector('ground');
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);

  const meshClickHandler = useCallback(
    // eslint-disable-next-line no-undef
    (event: ThreeEvent<globalThis.MouseEvent>) => {
      event.stopPropagation();
      const [x, y, z] = Object.values(event.point).map((value) =>
        Math.ceil(value)
      );
      addBlock(x, y, z);
    },
    [addBlock]
  );

  return (
    <mesh
      onClick={meshClickHandler}
      ref={ref as React.RefObject<Mesh<BufferGeometry>>}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
