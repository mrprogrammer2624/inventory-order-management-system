import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Link to={"/admin"}>admin</Link>
      <br />
      <Link to={"product-catalog"}>Product Catalog</Link>
      <br />
      <Link to={"order-history"}>Order History</Link>
    </>
  );
};
