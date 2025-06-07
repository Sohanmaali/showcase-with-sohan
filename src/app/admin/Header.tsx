const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="w-full bg-gray-800 text-white flex items-center justify-between p-4 md:hidden">
      <button onClick={toggleSidebar} className="text-white">
        {/* <AiOutlineMenu className="w-6 h-6" /> */}
        sohan
      </button>
      <h1 className="text-lg font-bold">My App</h1>
    </header>
  );
};

export default Header;
