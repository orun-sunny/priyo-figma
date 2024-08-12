import Image from "next/image";
import React from "react";

// Example card data
const cardData = [
  {
    id: 1,
    imageSrc: "/assests/card1.png",
    title: "Precision Targeting",
    text: "Ensure your message reaches those most likely to convert.",
  },
  {
    id: 2,
    imageSrc: "/assests/card2.png",
    title: "Innovative Reach",
    text: "Ensure your message reaches those most likely to convert.",
  },
  {
    id: 3,
    imageSrc: "/assests/card3.png",
    title: "Data-Driven Insights",
    text: "Ensure your message reaches those most likely to convert.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-[#FDFFCD] rounded-xl shadow-xl p-4 w-[352px] h-[453px] sm:w-80 mx-auto"
            >
              <figure className="relative p-8">
                {/* Background Circle */}
                <div className="absolute top-[56%] left-[50%] transform -translate-x-1/2 bg-[#FE451B] w-24 h-24 rounded-full flex items-center justify-center">
                  <Image
                    alt="icon"
                    src={card.imageSrc}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="text-center mt-36">
                <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                <p className="text-base mb-4">{card.text}</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
