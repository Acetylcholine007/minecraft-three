import dirtImg from 'public/images/textures/dirt.png';
import glassImg from 'public/images/textures/glass.png';
import grassImg from 'public/images/textures/grass.png';
import logImg from 'public/images/textures/log.png';
import woodImg from 'public/images/textures/wood.png';
import { NearestFilter, TextureLoader } from 'three';

export const textureImages = {
  dirt: dirtImg,
  glass: glassImg,
  grass: grassImg,
  log: logImg,
  wood: woodImg,
  ground: grassImg,
};

export const textureSelector = (textureName: keyof typeof textureImages) => {
  const texture = new TextureLoader().load(textureImages[textureName].src);
  texture.magFilter = NearestFilter;

  return texture;
};
