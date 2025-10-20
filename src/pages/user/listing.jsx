import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/ui/PrimaryButton";

const cars = [
  {
    id: 1,
    name: "Rolls-Royce Phantom",
    price: "$460,000",
    img: "https://i.pinimg.com/736x/da/18/4c/da184c40a0e5b9739b64a38300ffa19f.jpg",
    description:
      "The ultimate expression of luxury handcrafted excellence with timeless sophistication and power.",
  },
  {
    id: 2,
    name: "Rolls-Royce Ghost",
    price: "$345,000",
    img: "https://i.pinimg.com/736x/61/88/77/61887736365920322a6ad86726fb162d.jpg",
    description:
      "A blend of dynamic design and smooth performance for those who move in silence and style.",
  },
  {
    id: 3,
    name: "Rolls-Royce Cullinan",
    price: "$410,000",
    img: "https://i.pinimg.com/736x/c4/61/65/c461659e96b949e782d7323523288f15.jpg",
    description:
      "A masterpiece SUV luxury, presence, and strength united for the elite who demand perfection.",
  },
];

const ListingPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectCar = (car) => {
    navigate("/order", { state: { car } });
  };

  return (
    <div className="min-h-screen w-full bg-black text-gray-300 flex flex-col justify-between overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-24 md:py-32 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent uppercase tracking-widest">
            Rolls-Royce Collection
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the fusion of timeless craftsmanship, power, and elegance where black meets silver perfection.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-16 w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for a Rolls-Royce model..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-gray-900 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
          />
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car.id}
                onClick={() => handleSelectCar(car)}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:shadow-[0_0_80px_rgba(255,255,255,0.1)] cursor-pointer transition-all duration-700 hover:scale-[1.03]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>

                {/* Text */}
                <div className="p-8 text-center relative z-10">
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent uppercase tracking-wide">
                    {car.name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                    {car.description}
                  </p>
                  <p className="text-gray-500 mb-6 text-lg">{car.price}</p>
                  <PrimaryButton
                    label="Order Now →"
                    onClick={() => handleSelectCar(car)}
                    type="primary"
                  />
                </div>

                {/* Metallic Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg col-span-full">
              No cars found matching your search.
            </p>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-24 text-center">
          <PrimaryButton
            label="← Return to Home"
            onClick={() => navigate("/")}
            type="secondary"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-500 text-center py-8 border-t border-gray-800">
        <p className="text-sm sm:text-base">
          © 2025 Rolls-Royce Luxury Motors. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ListingPage;
