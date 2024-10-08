import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

export default function PrivateRoute({ children }) {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return children;
  }

  return <Navigate to="/" />;
}
