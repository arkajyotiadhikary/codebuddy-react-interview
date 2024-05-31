import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="mx-4 md:mx-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
