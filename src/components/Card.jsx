import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product, ecoScore, carbonFootprint, allProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const [comparedProduct, setComparedProduct] = useState(null);
  const navigate=useNavigate();
  const handleViewDetails = () => {
    const pair = getComparisonProduct(product, allProducts);
    setComparedProduct(pair);
    setShowModal(true);
  };

  // const handleKeepChosen = () => {
  //   alert(`${product.title} chosen!`);
  //   setShowModal(false);
  // };

  const handleClickChosen = () => {
  const isEcoFriendly = ecoScore >= 7 || carbonFootprint <= 500;

  navigate('/pd', {
    state: {
      product,
      isEcoFriendly,
    },
  });
  setShowModal(false); // Optional: hide modal on navigate
};

  // Comparison logic
  const getComparisonProduct = (mainProduct, products) => {
    const pairs = {
      "Plastic Bottle": "Steel Bottle",
      "Steel Bottle": "Plastic Bottle",
      "Plastic bags": "Paper Bags",
      "Paper Bags": "Plastic bags",
    };

    const matchTitle = pairs[mainProduct.title];
    return products.find((p) => p.title === matchTitle);
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain rounded-lg" />
        <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>

        {/* Eco Score */}
        <div className="mt-4">
          
          <div className="flex flex-col items-start space-y-2">
            Ecoscore
            <div className="flex items-center space-x-2 w-full">
              <div className={`h-2 ${ecoScore >= 7 ? 'bg-green-500' : ecoScore >= 4 ? 'bg-yellow-500' : 'bg-red-500'} w-32`}></div>
              <span className="text-sm text-gray-700">{ecoScore}</span>
            </div>

            {/* Carbon Footprint */}
            Carbon Footprint
            <div className="flex items-center space-x-2 w-full">
              
              <div className={`h-2 ${carbonFootprint <= 500 ? 'bg-green-500' : carbonFootprint <= 1000 ? 'bg-yellow-500' : 'bg-red-500'} w-32`}></div>
              <span className="text-sm text-gray-700">{carbonFootprint} gCO2</span>
            </div>
          </div>
        </div>

        {/* View Details */}
        <button onClick={handleViewDetails} className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
          View Details
        </button>
      </div>

      {/* Modal */}
      {showModal && comparedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 space-y-4">
            <h4 className="text-xl font-semibold text-center">Comparison</h4>
            <h3 className='text-2xl font-bold text-green-400'>Choose which benefits the Mother Earth</h3>
            <div className="flex justify-between space-x-4">
              {/* Selected Product */}
              <div className="w-1/2 text-center">
                <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto object-contain" />
                <h4 className="font-bold mt-2">{product.title}</h4>
                <p className="text-sm">{product.description}</p>
                <p><strong>Eco Score:</strong> {ecoScore}</p>
                <p><strong>Carbon:</strong> {carbonFootprint} gCO2</p>
              </div>

              {/* Compared Product */}
              <div className="w-1/2 text-center">
                <img src={comparedProduct.image} alt={comparedProduct.title} className="w-32 h-32 mx-auto object-contain" />
                <h4 className="font-bold mt-2">{comparedProduct.title}</h4>
                <p className="text-sm">{comparedProduct.description}</p>
                <p><strong>Eco Score:</strong> {getEco(comparedProduct.material).ecoScore}</p>
                <p><strong>Carbon:</strong> {getEco(comparedProduct.material).carbonFootprint} gCO2</p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Got it
              </button>
              <button
                onClick={handleClickChosen}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Keep Chosen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Helper to get eco stats from material
const getEco = (material) => {
  switch (material.toLowerCase()) {
    case "steel": return { ecoScore: 9, carbonFootprint: 0.5 };
    case "plastic": return { ecoScore: 2, carbonFootprint: 1000 };
    case "paper": return { ecoScore: 6, carbonFootprint: 400 };
    default: return { ecoScore: 5, carbonFootprint: 500 };
  }
};

export default Card;
