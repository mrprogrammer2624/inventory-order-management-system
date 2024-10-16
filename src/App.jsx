import { RouterProvider } from "react-router-dom";
import IOMRoutes from "./Routes";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <RouterProvider router={IOMRoutes} />
      </main>
    </div>
  );
}

export default App;
