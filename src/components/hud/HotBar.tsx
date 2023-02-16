import { textureImages } from '@/assets/textures';
import useKeyboard from '@/hooks/useKeyboard';
import useStore from '@/hooks/useStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface HotBarProps {}

const HotBar: React.FC<HotBarProps> = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const textures = { dirt, grass, glass, wood, log };
    const pressedTexture = Object.entries(textures).find((item) => item[1]);
    if (pressedTexture) {
      setTexture(pressedTexture[0] as keyof typeof textureImages);
    }
  }, [dirt, glass, grass, log, wood, setTexture]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [dirt, grass, glass, wood, log]);

  return (
    <div
      className={`fixed flex bottom-0 left-1/2 -translate-x-1/2 ${
        !visible && 'hidden'
      }`}
    >
      {Object.entries(textureImages)
        .slice(0, 5)
        .map(([name, image]) => (
          <Image
            key={name}
            src={image}
            alt={name}
            height={40}
            width={40}
            className={`border-4 ${
              activeTexture === name
                ? 'border-neutral-400'
                : 'border-neutral-800'
            }`}
          />
        ))}
    </div>
  );
};

export default HotBar;
