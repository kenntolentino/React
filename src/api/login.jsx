export const login = async (formData) => {
  try {
    // Get CSRF token cookie (required by Sanctum)
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true });

    // Login (Laravel will set the session cookie automatically)
    const response = await axios.post("http://localhost:8000/login", formData, { withCredentials: true });

    return response.data; // returns user or message from backend
  } catch (error) {
    if (error.response) {
      console.error("Login failed:", error.response.data);
      throw error.response.data;
    } else {
      throw error;
    }
  }
};