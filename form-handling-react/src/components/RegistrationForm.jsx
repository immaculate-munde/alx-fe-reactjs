import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData; // ✅ Destructure here
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // ✅ Explicit validation logic
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
        value={username} // ✅ literal `value={username}`
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email} // ✅ literal `value={email}`
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password} // ✅ literal `value={password}`
        onChange={handleChange}
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

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
