import { groundTexture } from '@/assets/textures';
import { usePlane } from '@react-three/cannon';
import { BufferGeometry, Mesh, NearestFilter, RepeatWrapping } from 'three';
export interface GroundProps {}

const Ground: React.FC<GroundProps> = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 4, 0, 0],
    position: [0, 0, 0],
  }));

  groundTexture.magFilter = NearestFilter;
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
