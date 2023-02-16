import { useCallback, useEffect, useState } from 'react';

const keyActionMap = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  Digit1: 'dirt',
  Digit2: 'grass',
  Digit3: 'glass',
  Digit4: 'wood',
  Digit5: 'log',
};

export default function useKeyboard() {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const action = keyActionMap[event.code as keyof typeof keyActionMap];
    if (action) {
      setActions((prev) => ({ ...prev, [action]: true }));
    }
  }, []);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    const action = keyActionMap[event.code as keyof typeof keyActionMap];
    if (action) {
      setActions((prev) => ({ ...prev, [action]: false }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  });

  return actions;
}
