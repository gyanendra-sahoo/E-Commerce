import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Term", searchTerm);
        setIsOpen(false);
    }

    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
            {isOpen ? (
                <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-gray-100 px-4 py-2 w-full rounded-lg focus:outline-none placeholder:text-gray-700"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                            <HiMagnifyingGlass className="h-6 w-6" />
                        </button>
                    </div>
                    {/* Close icons */}
                    <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                        onClick={handleSearchToggle}>
                        <HiMiniXMark className="w-6 h-6" />
                    </button>
                </form>
            ) : (
                <button onClick={handleSearchToggle} className="text-gray-600 hover:text-black">
                    <HiMagnifyingGlass className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
