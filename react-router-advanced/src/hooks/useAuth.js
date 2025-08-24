// src/hooks/useAuth.js
import { useState } from "react";

export default function useAuth() {
  // Simulate authentication status
  const [user] = useState({ loggedIn: true }); // change to false to test redirect
  return user;
}
