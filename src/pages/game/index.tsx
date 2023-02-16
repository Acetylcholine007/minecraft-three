import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export interface GamePageProps {}

const GamePage: React.FC<GamePageProps> = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
      </Canvas>
    </div>
  );
};

export default GamePage;
