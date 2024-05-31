const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-white">
        <div className="flex justify-between">
          <div className="flex items-center">
            <p className="text-lg font-bold">CodeBuddy</p>
          </div>
          <div className="flex items-center">
            <a href="https://github.com/KayBar">
              <p className="text-white hover:underline">GitHub</p>
            </a>
            <a href="mailto:kaybardev@gmail.com">
              <p className="ml-4 text-white hover:underline">Email</p>
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center">
        <p className="text-white">&copy; 2023 CodeBuddy</p>
      </div>
    </footer>
  );
};

export default Footer;
