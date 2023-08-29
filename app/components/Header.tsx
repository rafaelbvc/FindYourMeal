import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]   p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold bm-2">
          Find Your Meal For Any Occasion
        </h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
