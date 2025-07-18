// components/property/PropertyDetail.tsx
import React from "react";

interface PropertyProps {
  property: {
    id: number;
    title: string;
    description: string;
    price: number;
    location: string;
    image: string;
    // add any other expected fields here
  };
}

export default function PropertyDetail({ property }: PropertyProps) {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-xl font-semibold text-indigo-600 mb-4">${property.price}</p>
      <p className="text-gray-800">{property.description}</p>
    </div>
  );
}
