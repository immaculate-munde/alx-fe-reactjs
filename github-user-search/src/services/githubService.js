const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

import axios from "axios";

const BASE_URL = "https://api.github.com";

// This function will be implemented in Task 1
export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
}
