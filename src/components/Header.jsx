import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-4">
      <h1 className="text-2xl font-bold text-white">
        <Link to="/">CodeBuddy</Link>
      </h1>
      <div className="flex space-x-4">
        <Link to="/posts" className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Posts
        </Link>
        <Link
          to="/form"
          className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
