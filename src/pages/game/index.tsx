import BlocksLoader from '@/components/three-components/BlocksLoader';
import FPV from '@/components/three-components/FPV';
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
        <FPV />
        <Physics>
          <Player />
          <BlocksLoader />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        +
      </div>
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
