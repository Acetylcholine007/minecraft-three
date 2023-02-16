import { textureImages, textureSelector } from '@/assets/textures';
import { useBox } from '@react-three/cannon';
import { BufferGeometry, Mesh } from 'three';

export interface BlockProps {
  position: [x: number, y: number, z: number];
  texture: keyof typeof textureImages;
}

const Block: React.FC<BlockProps> = (props) => {
  const { position, texture } = props;

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const activeTexture = textureSelector(texture);

  return (
    <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};

export default Block;
