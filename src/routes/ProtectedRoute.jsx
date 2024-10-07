
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Asumimos que el contexto está en /context

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    alert("registrese para poder ver su perfil")
    // Si no está autenticado, redirigir a login
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza el contenido (el dashboard en este caso)
  return children;
}
