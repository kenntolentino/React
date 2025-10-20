// src/pages/user/order.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/ui/PrimaryButton";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const car = location.state?.car || {
    name: "Custom Rolls-Royce",
    price: "Price on request",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your order for ${car.name} has been submitted!`);
    navigate("/");
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-gray-300 flex flex-col items-center justify-center px-6 py-16 sm:py-24 overflow-hidden">
      {/* Metallic Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]"></div>

      {/* Title Section */}
      <div className="relative text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent uppercase tracking-wide">
          Order Your {car.name}
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
          Begin your journey toward timeless elegance. Complete your details below and experience Rolls-Royce luxury.
        </p>
      </div>

      {/* Form Card */}
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-950 to-black border border-gray-800 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_80px_rgba(255,255,255,0.1)] transition-all duration-700 p-8 sm:p-10 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <div className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black border border-gray-700 rounded-xl px-4 py-3 w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-black border border-gray-700 rounded-xl px-4 py-3 w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300"
              required
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="bg-black border border-gray-700 rounded-xl px-4 py-3 w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300"
              required
            />
            <textarea
              placeholder="Special Requests (optional)"
              className="bg-black border border-gray-700 rounded-xl px-4 py-3 w-full h-32 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-6 flex justify-center">
            <PrimaryButton
              label="Submit Order"
              type="primary"
              onClick={handleSubmit}
              className="w-full sm:w-auto px-10 py-3 text-base tracking-wide"
            />
          </div>
        </form>
      </div>

      {/* Back Button */}
      <div className="relative mt-10 text-center">
        <PrimaryButton
          label="← Back to Listing"
          onClick={() => navigate("/listing")}
          type="secondary"
          className="px-6 py-2 text-sm sm:text-base"
        />
      </div>

      {/* Footer */}
      <footer className="relative w-full text-center text-gray-500 text-sm sm:text-base mt-20 border-t border-gray-800 pt-8">
        © 2025 Rolls-Royce Luxury Motors. All rights reserved.
      </footer>
    </div>
  );
};

export default OrderPage;
