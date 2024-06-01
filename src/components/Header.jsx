import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

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
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                className=" bg-white hover:bg-blue-600"
              />
              <MenuList>
                <MenuItem icon={<ExternalLinkIcon />} onClick={() => handleNavigation("/posts")}>
                  Posts
                </MenuItem>
                <MenuItem icon={<AddIcon />} onClick={() => handleNavigation("/form")}>
                  Register
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
