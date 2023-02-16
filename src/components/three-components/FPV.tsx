import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export interface FPVProps {}

const FPV: React.FC<FPVProps> = () => {
  const { camera, gl } = useThree();

  return <PointerLockControls args={[camera, gl.domElement]} />;
};

export default FPV;
