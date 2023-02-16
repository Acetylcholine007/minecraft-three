import { textureImages, textureSelector } from '@/assets/textures';
import useStore from '@/hooks/useStore';
import { useBox } from '@react-three/cannon';
import { ThreeEvent } from '@react-three/fiber';
import { useCallback } from 'react';
import { BufferGeometry, Mesh } from 'three';

export interface BlockProps {
  position: [x: number, y: number, z: number];
  texture: keyof typeof textureImages;
}

const Block: React.FC<BlockProps> = (props) => {
  const { position, texture } = props;
  const [addBlock, removeBlock] = useStore((state) => [
    state.addBlock,
    state.removeBlock,
  ]);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const activeTexture = textureSelector(texture);

  const meshClickHandler = useCallback(
    // eslint-disable-next-line no-undef
    (event: ThreeEvent<globalThis.MouseEvent>) => {
      event.stopPropagation();
      const clickedFace = Math.floor(event.faceIndex! / 2);
      const { x, y, z } = ref.current!.position;
      if (event.altKey) {
        removeBlock(x, y, z);
        return;
      }
      switch (clickedFace) {
        case 0:
          addBlock(x + 1, y, z);
          return;
        case 1:
          addBlock(x - 1, y, z);
          return;
        case 2:
          addBlock(x, y + 1, z);
          return;
        case 3:
          addBlock(x, y - 1, z);
          return;
        case 4:
          addBlock(x, y, z + 1);
          return;
        case 5:
          addBlock(x, y, z - 1);
          return;
      }
    },
    [addBlock]
  );

  return (
    <mesh
      onClick={meshClickHandler}
      ref={ref as React.RefObject<Mesh<BufferGeometry>>}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};

export default Block;
