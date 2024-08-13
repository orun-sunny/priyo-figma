import React from "react";
import Image from "next/image";

const Engage = () => {
  return (
    <div className=" relative container mx-auto py-6 bg-[#ECECEC] mb-8">
      <div className="absolute hidden lg:block  top-36 right-24 transform translate-x-1/2 -translate-y-1/2 rotate-0 lg:rotate-0">
        <Image
          alt="top-right-corner"
          src="/assests/rightside.png" // Replace with your image path
          width={200}
          height={200}
          className="object-cover "
        />
      </div>

      {/* Bottom Left Corner Image */}
      <div className="absolute  hidden lg:block bottom-36 left-24 transform -translate-x-1/2 translate-y-1/2 rotate-180">
        <Image
          alt="bottom-left-corner"
          src="/assests/rightside.png" // Replace with your image path
          width={200}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="absolute block lg:hidden -top-36 left-28 transform -translate-x-1/2 translate-y-1/2 -rotate-90">
        <Image
          alt="top-left-corner"
          src="/assests/rightside.png" // Replace with your image path
          width={200}
          height={150}
          className="object-cover px-8"
        />
      </div>

      {/* Bottom Right Corner Image - Small Devices */}
      <div className="absolute block lg:hidden -bottom-36 right-24 transform translate-x-1/2 -translate-y-1/2 rotate-90">
        <Image
          alt="bottom-right-corner"
          src="/assests/rightside.png" // Replace with your image path
          width={200}
          height={150}
          className="object-cover px-8"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center  lg:space-x-4 py-36 ">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
          <Image
            alt="engage-image"
            src="/assests/rounded.png" // Replace with your image path
            width={300}
            height={300}
            className="object-cover w-full lg:w-3/4 rounded-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/4 flex flex-col justify-center items-center lg:items-start space-y-4  lg:p-0 text-center lg:text-left">
          <p className="text-base lg:text-lg">
            Our DOOH solutions have proven incredibly effective, with nearly
            two-thirds of viewers taking a measurable action, such as visiting
            the  website or making a purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Engage;
