import { Link, Outlet } from "react-router-dom";export const AuthLayout = () => {
  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-center p-4">
        <Link to={"/"}>Logo</Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
