import { addToCart, fetchProducts } from "@/Slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProductCatalog = () => {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>In Stock: {product.stock}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Shopping Cart</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
