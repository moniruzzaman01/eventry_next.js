"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default function SignInOut() {
  const { auth, setAuth } = useAuth();

  function logout() {
    setAuth(null);
  }

  return auth ? (
    <div>
      <span className=" text-orange-400">{auth.name}</span>
      <span className=" mx-1">|</span>
      <span onClick={logout}>Logout</span>
    </div>
  ) : (
    <Link href="/login">Login</Link>
  );
}
