import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-7xl mx-auto">
        <div
          className=" relative w-full bg-cover bg-center"
          style={{
            height: "36rem", // Adjusted height to ensure responsiveness
            backgroundImage: "url('/assests/background.png')",
            opacity: 1,
          }}
        >
          {/* Top-left image */}
          <div className="absolute top-0 left-0">
            <Image
              src="/assests/about2.png" // Replace with your actual image path
              alt="Top Left"
              width={250}
              height={150}
              className="object-cover"
            />
          </div>

          {/* Bottom-right image */}
          <div className="absolute bottom-0 right-0">
            <Image
              src="/assests/about1.png" // Replace with your actual image path
              alt="Bottom Right"
              width={250}
              height={150}
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center max-w-xl px-4">
              <h1 className="text-white text-lg font-semibold  md:text-xl font-inter">
                ChutneyAds pioneers the transformation from traditional
                Out-of-Home to Digital Out-of-Home advertising, with a network
                of 100+ Digital Display Panels strategically placed across
                Dhaka.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
