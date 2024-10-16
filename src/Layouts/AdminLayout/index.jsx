import { Link, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Outlet />
    </>
  );
};
