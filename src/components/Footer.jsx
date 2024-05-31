const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="mr-4 text-lg font-bold">CodeBuddy</p>
            <div className="flex space-x-4">
              <a href="https://github.com/arkajyotiadhikary" className="text-white hover:underline">
                GitHub
              </a>
              <a href="mailto:kaybardev@gmail.com" className="text-white hover:underline">
                Email
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} CodeBuddy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
