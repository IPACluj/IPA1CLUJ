"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="bg-primary/25 px-2 py-1 rounded-md border-1 border-primary/95"
      onClick={() => signIn()}
    >
      Log In
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="bg-primary/25 px-2 py-1 rounded-md border-1 border-primary/95"
      onClick={() => signOut()}
    >
      Log Out
    </button>
  );
};
