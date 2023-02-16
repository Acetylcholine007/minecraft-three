import Ground from '@/components/three-components/Ground';
import Player from '@/components/three-components/Player';
import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { GetServerSideProps } from 'next';

export interface GamePageProps {}

const GamePage: React.FC<GamePageProps> = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<GamePageProps> = async (
  context
) => {
  return {
    props: {},
  };
};

export default GamePage;
