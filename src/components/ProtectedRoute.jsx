import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

    // 🔹 Still checking auth status
    if (loading) {
        return <div>Loading...</div>;
    }

  // ❌ Not logged in → redirect
  if (!user) {
    return (
        <Navigate 
            to="/" 
            state={{ from: location }}
            replace 
        />
    );
  }

  // ✅ Logged in → allow access
  return children;
};

export default ProtectedRoute;