import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex-grow">
        <div className="mx-4 md:mx-8">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
