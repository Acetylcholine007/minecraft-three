import { textureImages } from '@/assets/textures';
import { nanoid } from 'nanoid';
import { create } from 'zustand';

export interface IStore {
  texture: keyof typeof textureImages;
  blocks: {
    key: string;
    position: [x: number, y: number, z: number];
    texture: keyof typeof textureImages;
  }[];
  addBlock: (x: number, y: number, z: number) => void;
  removeBlock: (x: number, y: number, z: number) => void;
  setTexture: (texture: keyof typeof textureImages) => void;
}

const useStore = create<IStore>((set) => ({
  texture: 'dirt',
  blocks: [],
  addBlock: (x, y, z) => {
    set((prev) => ({
      blocks: [
        ...prev.blocks,
        { key: nanoid(), position: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeBlock: (x, y, z) => {
    set((prev) => ({
      blocks: [
        ...prev.blocks.filter(
          ({ position }) =>
            x !== position[0] || y !== position[1] || z !== position[2]
        ),
      ],
    }));
  },
  setTexture: (texture) => {
    set(() => ({ texture }));
  },
  saveWorld: () => {},
  resetWorld: () => {},
}));

export default useStore;
