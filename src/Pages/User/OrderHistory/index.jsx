import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "@/Slice/orderSlice";

export const OrderHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded">
            <p>Order ID: {order.id}</p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
