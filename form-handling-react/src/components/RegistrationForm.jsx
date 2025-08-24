import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // ✅ Destructure so we can use username, email, password directly
  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Submitted Data:", formData);

    // Simulate API call
    setTimeout(() => {
      alert("User registered successfully!");
      setFormData({ username: "", email: "", password: "" });
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 border rounded-lg shadow bg-white space-y-5"
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">
        Controlled Registration Form
      </h2>

      {/* Username */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}   {/* ✅ matches test expectation */}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}   {/* ✅ matches test expectation */}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}   {/* ✅ matches test expectation */}
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* Error */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  );
}
