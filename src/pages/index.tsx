import Link from 'next/link';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-screen h-screen bg-green-300 flex items-center justify-center gap-4">
      <Link
        href="/game"
        className="bg-green-800 hover:bg-green-900 p-4 text-2xl text-white rounded-md shadow-md shadow-green-500"
      >
        Play Minecraft
      </Link>
    </div>
  );
};

export default HomePage;
