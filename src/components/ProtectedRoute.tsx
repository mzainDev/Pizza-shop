import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }: { element: any }) => {
  const cartItems = useSelector((state: any) => state.cart.cart);

  return cartItems.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
