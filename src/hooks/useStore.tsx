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
}

const useStore = create<IStore>((set) => ({
  texture: 'dirt',
  blocks: [
    { key: nanoid(), position: [1, 1, 1], texture: 'dirt' },
    { key: nanoid(), position: [2, 1, 1], texture: 'wood' },
  ],
  addBlock: (x: number, y: number, z: number) => {
    set((prev) => ({
      blocks: [
        ...prev.blocks,
        { key: nanoid(), position: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeBlock: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));

export default useStore;
