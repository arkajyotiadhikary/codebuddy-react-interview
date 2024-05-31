import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gradient-to-l from-blue-700 to-blue-900">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white sm:text-2xl">
            <Link to="/">CodeBuddy</Link>
          </h1>
          <div className="hidden space-x-4 sm:flex">
            <Link
              to="/posts"
              className="text-lg font-medium text-white transition duration-300 hover:text-gray-200"
            >
              Posts
            </Link>
            <Link
              to="/form"
              className="text-lg font-medium text-white transition duration-300 hover:text-gray-200"
            >
              Register
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
