import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/Auth";

export default function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);

      // Example: Adjust according to backend response
      if (response.status === 200 || response.success) {
        navigate("/cars");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError(error?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}