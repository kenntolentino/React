import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Navbar from "../../components/ui/navbar";
import PrimaryButton from "../../components/ui/PrimaryButton";

const LandingPage = () => {
  const navigate = useNavigate();

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/order");

  const openSidePanel = () => setIsSidePanelOpen(true);
  const closeSidePanel = () => setIsSidePanelOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Prevent scrolling when side panel or modal is open
  useEffect(() => {
    const locked = isSidePanelOpen || isModalOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidePanelOpen, isModalOpen]);

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
    <>

      {/* ✅ SIDE PANEL BACKDROP */}
      {isSidePanelOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300"
          onClick={closeSidePanel}
        />
      )}

      {/* ✅ DESKTOP SIDE PANEL */}
      <div
        className={`hidden md:block fixed top-0 left-0 h-full w-96 bg-gray-900 border-r border-gray-700 shadow-2xl z-[110] overflow-y-auto`}
        style={{
          transform: isSidePanelOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 500ms ease-in-out",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-gray-900">
            <h4 className="text-lg font-semibold text-gray-200">Featured Cars</h4>
            <button
              onClick={closeSidePanel}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
          <div className="p-4 space-y-4">
            {/* Car 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.BfBpLI8qfkUFqydUHYMO0QHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Rolls Royce Phantom"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h5 className="text-white font-semibold">Phantom</h5>
                <p className="text-gray-400 text-sm">The pinnacle of luxury</p>
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"
                alt="Rolls Royce Ghost"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h5 className="text-white font-semibold">Ghost</h5>
                <p className="text-gray-400 text-sm">Contemporary elegance</p>
              </div>
            </div>

            {/* Car 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c3dec3806?w=400&h=300&fit=crop"
                alt="Rolls Royce Cullinan"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h5 className="text-white font-semibold">Cullinan</h5>
                <p className="text-gray-400 text-sm">Supreme SUV experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE SIDE PANEL */}
      <div
        className={`md:hidden fixed left-0 top-0 h-full w-full sm:w-80 bg-gray-900 border-r border-gray-700 shadow-2xl z-[110] overflow-y-auto`}
        style={{
          transform: isSidePanelOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 500ms ease-in-out",
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-gray-900">
          <h4 className="text-lg font-semibold text-gray-200">Featured Cars</h4>
          <button
            onClick={closeSidePanel}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-4">
          {/* Car 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.BfBpLI8qfkUFqydUHYMO0QHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Rolls Royce Phantom"
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h5 className="text-white font-semibold">Phantom</h5>
              <p className="text-gray-400 text-sm">The pinnacle of luxury</p>
            </div>
          </div>

          {/* Car 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"
              alt="Rolls Royce Ghost"
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h5 className="text-white font-semibold">Ghost</h5>
              <p className="text-gray-400 text-sm">Contemporary elegance</p>
            </div>
          </div>

          {/* Car 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c3dec3806?w=400&h=300&fit=crop"
              alt="Rolls Royce Cullinan"
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h5 className="text-white font-semibold">Cullinan</h5>
              <p className="text-gray-400 text-sm">Supreme SUV experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen w-full font-sans text-gray-300 flex flex-col relative">
      {/* ✅ Navbar: top on desktop, fixed bottom on mobile */}
      <nav className="md:static md:top-0 w-full flex justify-between items-center px-6 md:px-12 lg:px-20 py-5 bg-white shadow-md md:sticky md:top-0 md:z-50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          MyCarBrand
        </h1>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">
            Contact
          </a>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={openSidePanel}
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            ☰ Menu
          </button>
          <button
            onClick={openModal}
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Car Modal
          </button>
          <PrimaryButton label="Get Started" onClick={() => alert("Get Started!")} />
        </div>
      </nav>

      {/* ✅ HERO SECTION */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-32 gap-12 md:gap-20 flex-grow">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-100">
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
              Luxury
            </span>{" "}
            & Performance
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed max-w-lg">
            Discover the world of Rolls-Royce — where timeless craftsmanship
            meets cutting-edge engineering. Drive a masterpiece that defines
            prestige and perfection.
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <PrimaryButton
              label="Explore Models →"
              onClick={handleExplore}
              type="primary"
            />
            <PrimaryButton
              label="Order Now"
              onClick={handleOrder}
              type="secondary"
            />
          </div>

          {/* ✅ Extra buttons for side panel and modal */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={openSidePanel}
              className="bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              ☰ Open Menu
            </button>
            <button
              onClick={openModal}
              className="bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              Car Modal
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.BfBpLI8qfkUFqydUHYMO0QHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Rolls Royce"
            className="rounded-3xl w-full max-w-md md:max-w-lg object-cover grayscale hover:grayscale-0 brightness-75 hover:brightness-100 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.2)]"
          />
        </div>
      </section>

      {/* ✅ FEATURES */}
      <section
        className="relative z-10 py-24 border-t border-gray-800 border-b bg-black"
        id="features"
      >
        <div className="text-center mb-14 px-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-600 bg-clip-text text-transparent uppercase tracking-wide">
            Why Rolls-Royce?
          </h3>
          <p className="text-gray-500 text-base sm:text-lg">
            Elegance. Power. Perfection. Every detail crafted beyond excellence.
          </p>
        </div>

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
            </div>
          ))}
        </div>
      </section>

      {/* ✅ CALL TO ACTION */}
      <section
        className="relative z-10 w-full bg-black text-center py-24 px-6 sm:px-10 md:px-20"
        id="contact"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-600 bg-clip-text text-transparent uppercase">
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

      {/* ✅ FOOTER */}
      <footer className="relative z-10 w-full bg-black text-gray-500 text-center py-8 border-t border-gray-800 px-4 mt-auto">
        <p className="text-sm sm:text-base">
          © 2025 Rolls-Royce Luxury Motors. All rights reserved.
        </p>
      </footer>

      {/* ✅ SIDE PANEL BACKDROP */}
      {isSidePanelOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300"
          onClick={closeSidePanel}
        />
      )}

      {/* ✅ DESKTOP SIDE PANEL */}
      <div
        className={`hidden md:block fixed top-0 left-0 h-full w-96 bg-gray-900 border-r border-gray-700 shadow-2xl z-[110] overflow-y-auto`}
        style={{
          transform: isSidePanelOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 500ms ease-in-out",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-gray-900">
            <h4 className="text-lg font-semibold text-gray-200">Featured Cars</h4>
            <button
              onClick={closeSidePanel}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
          <div className="p-4 space-y-4">
            {/* Car 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.BfBpLI8qfkUFqydUHYMO0QHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Rolls Royce Phantom"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h5 className="text-white font-semibold">Phantom</h5>
                <p className="text-gray-400 text-sm">The pinnacle of luxury</p>
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"
                alt="Rolls Royce Ghost"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h5 className="text-white font-semibold">Ghost</h5>
                <p className="text-gray-400 text-sm">Contemporary elegance</p>
              </div>
            </div>

            {/* Car 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c3dec3806?w=400&h=300&fit=crop"
                alt="Rolls Royce Cullinan"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h5 className="text-white font-semibold">Cullinan</h5>
                <p className="text-gray-400 text-sm">Supreme SUV experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE SIDE PANEL */}
      <div
        className={`md:hidden fixed left-0 top-0 h-full w-full sm:w-80 bg-gray-900 border-r border-gray-700 shadow-2xl z-[110] overflow-y-auto`}
        style={{
          transform: isSidePanelOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 500ms ease-in-out",
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-gray-900">
          <h4 className="text-lg font-semibold text-gray-200">Featured Cars</h4>
          <button
            onClick={closeSidePanel}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-4">
          {/* Car 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.BfBpLI8qfkUFqydUHYMO0QHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Rolls Royce Phantom"
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h5 className="text-white font-semibold">Phantom</h5>
              <p className="text-gray-400 text-sm">The pinnacle of luxury</p>
            </div>
          </div>

          {/* Car 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop"
              alt="Rolls Royce Ghost"
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h5 className="text-white font-semibold">Ghost</h5>
              <p className="text-gray-400 text-sm">Contemporary elegance</p>
            </div>
          </div>

          {/* Car 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c3dec3806?w=400&h=300&fit=crop"
              alt="Rolls Royce Cullinan"
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h5 className="text-white font-semibold">Cullinan</h5>
              <p className="text-gray-400 text-sm">Supreme SUV experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[70]">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-sm w-full mx-4">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold text-gray-100">Car Models</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-400 mt-3">
              Browse the latest Rolls-Royce lineup: Phantom, Ghost, Cullinan,
              and more.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <PrimaryButton
                label="Explore →"
                onClick={() => {
                  closeModal();
                  handleExplore();
                }}
                type="primary"
              />
              <PrimaryButton label="Close" onClick={closeModal} type="secondary" />
            </div>
          </div>
        </div>
      )}
    </div>
      </>
  );
};

export default LandingPage;
