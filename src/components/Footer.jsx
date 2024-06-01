const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-white">
        <div className="flex flex-col items-center justify-between sm:flex-row">
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
          <div className="mt-2 text-center text-sm text-gray-400 sm:mt-0 sm:text-end">
            © {new Date().getFullYear()} CodeBuddy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
