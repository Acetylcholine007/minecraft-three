import useStore from '@/hooks/useStore';
import Block from './Block';

export interface BlocksLoaderProps {}

const BlocksLoader: React.FC<BlocksLoaderProps> = () => {
  const [blocks] = useStore((state) => [state.blocks]);

  return (
    <>
      {blocks.map(({ key, position, texture }) => (
        <Block key={key} position={position} texture={texture} />
      ))}
    </>
  );
};

export default BlocksLoader;
