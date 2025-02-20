"use client";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { signIn, signUp, signOut, getSession } from "../../backend/auth";

export default function AuthPage() {
  const [mode, setMode] = useState("signin"); // or "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleAuth = async () => {
    try {
      if (mode === "signin") {
        await signIn(email, password);
        setMessage("Signed in successfully");
      } else {
        await signUp(email, password);
        setMessage("Signed up successfully");
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">
        {mode === "signin" ? "Sign In" : "Sign Up"}
      </h1>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2"
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      <Button onClick={handleAuth} className="mb-2">
        {mode === "signin" ? "Sign In" : "Sign Up"}
      </Button>
      <Button variant="ghost" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>
        Switch to {mode === "signin" ? "Sign Up" : "Sign In"}
      </Button>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
  );
}
