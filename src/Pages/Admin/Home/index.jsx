import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "@/Slice/productSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    setNewProduct({ name: "", price: "", stock: "" });
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    dispatch(updateProduct({ id, ...updatedProduct }));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <form onSubmit={handleAddProduct} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: e.target.value })
          }
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>In Stock: {product.stock}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() =>
                  handleUpdateProduct(product.id, {
                    ...product,
                    stock: product.stock + 10,
                  })
                }
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Restock (+10)
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
