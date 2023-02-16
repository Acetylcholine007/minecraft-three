import useStore from '@/hooks/useStore';

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <div className="fixed top-0 left-0 flex p-4 gap-1">
      <button
        onClick={saveWorld}
        className="px-2 py-1 text-sm rounded-sm bg-neutral-700 hover:bg-neutral-800"
      >
        Save
      </button>
      <button
        onClick={resetWorld}
        className="px-2 py-1 text-sm rounded-sm bg-neutral-700 hover:bg-neutral-800"
      >
        Reset
      </button>
    </div>
  );
};

export default Menu;
