import { textureImages, textureSelector } from '@/assets/textures';
import useStore from '@/hooks/useStore';
import { useBox } from '@react-three/cannon';
import { ThreeEvent } from '@react-three/fiber';
import { useCallback, useState } from 'react';
import { BufferGeometry, Mesh } from 'three';

export interface BlockProps {
  position: [x: number, y: number, z: number];
  texture: keyof typeof textureImages;
}

const Block: React.FC<BlockProps> = (props) => {
  const { position, texture } = props;
  const [isHovered, setIsHovered] = useState(false);
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
    [ref, addBlock, removeBlock]
  );

  const onPointerMoveHandler = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      event.stopPropagation();
      setIsHovered(true);
    },
    []
  );

  const onPointerOutHandler = useCallback((event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
  }, []);

  return (
    <mesh
      onClick={meshClickHandler}
      onPointerMove={onPointerMoveHandler}
      onPointerOut={onPointerOutHandler}
      ref={ref as React.RefObject<Mesh<BufferGeometry>>}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={activeTexture}
        color={isHovered ? 'grey' : 'white'}
        transparent={texture === 'glass'}
        opacity={texture === 'glass' ? 0.6 : 1}
      />
    </mesh>
  );
};

export default Block;
