import dirtImg from 'public/images/textures/dirt.jpg';
import glassImg from 'public/images/textures/glass.png';
import grassImg from 'public/images/textures/grass.jpg';
import logImg from 'public/images/textures/log.jpg';
import woodImg from 'public/images/textures/wood.png';
import { TextureLoader } from 'three';

const dirtTexture = new TextureLoader().load(dirtImg.src);
const glassTexture = new TextureLoader().load(glassImg.src);
const grassTexture = new TextureLoader().load(grassImg.src);
const logTexture = new TextureLoader().load(logImg.src);
const woodTexture = new TextureLoader().load(woodImg.src);
const groundTexture = new TextureLoader().load(dirtImg.src);

export {
  dirtTexture,
  glassTexture,
  grassTexture,
  logTexture,
  woodTexture,
  groundTexture,
};
