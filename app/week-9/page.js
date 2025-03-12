"use client";
import { useState } from "react";
import { useUserAuth } from "./_utils/authContext";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const logIn = async () => {
    await gitHubSignIn();
  };

  const logOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      <h1>Week-9</h1>
      <div>
        {user ? (
          <div>
            <h2 className="text-cyan-700">
              Welcome, {user.providerData[0].displayName}
            </h2>
            <Link href="week-9/shopping-list">
              <p>Go to shopping list</p>
            </Link>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <div>
            <button onClick={logIn}>Log in with GitHub</button>
          </div>
        )}
      </div>
    </div>
  );
}
