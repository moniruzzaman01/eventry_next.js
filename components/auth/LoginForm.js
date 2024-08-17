"use client";

import { loginUser } from "@/app/serverActions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const { setAuth } = useAuth();
  const [error, setError] = useState("");

  async function onsubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await loginUser(formData);

      if (response) {
        setAuth(response);
        router.push("/");
      }
    } catch (err) {
      setError(err?.message);
    }
  }

  return (
    <>
      {error && (
        <div className=" bg-red-400 text-center my-4 py-2 rounded-lg">
          {error}
        </div>
      )}
      <form className="login-form" onSubmit={onsubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
}
