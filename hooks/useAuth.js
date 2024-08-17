import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

export function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);
  return { auth, setAuth };
}
