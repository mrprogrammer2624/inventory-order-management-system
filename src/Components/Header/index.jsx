import { logout } from "@/Slice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Inventory System
        </Link>
        <nav>
          {user ? (
            <>
              <Link to="/products" className="mr-4">
                Products
              </Link>
              <Link to="/orders" className="mr-4">
                Orders
              </Link>
              {user.role === "admin" && (
                <Link to="/admin" className="mr-4">
                  Admin
                </Link>
              )}
              <button onClick={() => dispatch(logout())} className="text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
