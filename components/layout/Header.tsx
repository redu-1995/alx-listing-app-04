import React from "react";

const Header: React.FC = () => {
  const categories = ["Rooms", "Mansion", "Countryside", "Beachfront", "Mountain View", "City Center"];

  return (
    <header className="bg-white shadow-lg p-5 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-600 tracking-tight">StayFinder</div>

        {/* Search Bar */}
        <div className="flex-grow max-w-lg w-full">
          <input
            type="text"
            placeholder="Search for places..."
            className="w-full px-5 py-2.5 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3 text-sm">
          <button className="text-blue-600 font-medium hover:underline transition">Sign In</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 font-medium transition duration-200">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="mt-5 flex flex-wrap gap-3 justify-center text-sm text-gray-600">
        {categories.map((category) => (
          <span
            key={category}
            className="px-4 py-1.5 border border-gray-300 rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition duration-150"
          >
            {category}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Header;
