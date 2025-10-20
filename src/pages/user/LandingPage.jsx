import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Navbar from "../../components/ui/navbar";
import PrimaryButton from "../../components/ui/PrimaryButton";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/order");

  const features = [
    {
      icon: "💎",
      title: "Unmatched Craftsmanship",
      desc: "Hand-built by master artisans, every Rolls-Royce is a symphony of precision and grace.",
    },
    {
      icon: "⚙️",
      title: "Advanced Engineering",
      desc: "Effortless power with whisper-quiet precision redefining smooth and silent performance.",
    },
    {
      icon: "🛋️",
      title: "Bespoke Luxury",
      desc: "From the leather to the starlight roof every inch tailored exclusively to your vision.",
    },
  ];

  return (
    <div className="bg-black min-h-screen w-full font-sans text-gray-300 overflow-x-hidden flex flex-col">
      <Navbar />

      {/* 🏁 Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-32 gap-12 md:gap-20 flex-grow">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-100">
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              Luxury
            </span>{" "}
            & Performance
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-10 leading-relaxed max-w-lg">
            Discover the world of Rolls-Royce where timeless craftsmanship meets
            cutting-edge engineering. Drive a masterpiece that defines prestige
            and perfection.
          </p>

          {/* 🎯 Small Left-Aligned Buttons */}
          <div className="flex flex-row gap-3">
            <PrimaryButton
              label="Explore Models →"
              onClick={handleExplore}
              type="primary"
              className="text-sm px-4 py-2 sm:px-5 sm:py-2.5"
            />
            <PrimaryButton
              label="Order Now"
              onClick={handleOrder}
              type="secondary"
              className="text-sm px-4 py-2 sm:px-5 sm:py-2.5"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.BfBpLI8qfkUFqydUHYMO0QHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Rolls Royce"
            className="rounded-3xl w-full max-w-md md:max-w-lg object-cover grayscale hover:grayscale-0 brightness-75 hover:brightness-100 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)]"
          />
        </div>
      </section>

      {/* 🌟 Brand Highlights */}
      <section className="py-24 border-t border-gray-800 border-b bg-black">
        <div className="text-center mb-14 px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent uppercase tracking-wide">
            Why Rolls-Royce?
          </h3>
          <p className="text-gray-500 text-base sm:text-lg">
            Elegance. Power. Perfection. Every detail crafted beyond excellence.
          </p>
        </div>

        {/* 🚘 Metallic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10 md:px-20">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-[1px] rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-500"
            >
              <div className="relative z-10 flex flex-col items-center text-center p-10 h-full rounded-2xl bg-gradient-to-b from-black to-gray-950 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] transition-all duration-500">
                <div className="text-5xl mb-6 text-gray-400 group-hover:text-gray-200 transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* ✨ Silver Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* 🟣 CTA Section */}
      <section className="w-full bg-black text-center py-24 px-6 sm:px-10 md:px-20">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent uppercase">
          Drive the Definition of Prestige
        </h3>
        <p className="mb-10 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          Schedule a test drive today and step into a world of timeless
          elegance.
        </p>
        <PrimaryButton
          label="View Collection →"
          onClick={handleExplore}
          type="primary"
        />
      </section>

      {/* ⚫ Footer */}
      <footer className="w-full bg-black text-gray-500 text-center py-8 border-t border-gray-800 px-4 mt-auto">
        <p className="text-sm sm:text-base">
          © 2025 Rolls-Royce Luxury Motors. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
