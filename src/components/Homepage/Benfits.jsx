import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="container mx-auto py-6 ">
      {/* Grid Container for First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:px-48 items-center">
        {/* Left Side - Image */}
        <div className="order-1 flex justify-center">
          <Image
            alt="benefits-image"
            src="/assests/benifits.png"
            width={400}
            height={406}
            className="object-contain w-full max-w-[420px] h-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div className="order-2 text-center lg:text-left lg:pl-24 xl:pl-24">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "DIN Alternate, sans-serif" }}
          >
            Your Title Here
          </h2>
          <p className="text-base sm:text-sm lg:text-base mb-4">
            Your first paragraph here. It should describe the benefits in a
            concise manner.
          </p>
          <p className="text-base sm:text-sm lg:text-base">
            Your second paragraph here. This can provide additional details or
            emphasize the key points.
          </p>
        </div>
      </div>

      {/* Grid Container for Second Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:px-48 items-center py-6 ">
        {/* Left Side - Text */}
        <div className="order-2  px-46 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-24 xl:pl-46">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "DIN Alternate, sans-serif" }}
          >
            Your Title Here
          </h2>
          <p className="text-base sm:text-sm lg:text-base mb-4">
            Your first paragraph here. It should describe the benefits in a
            concise manner.
          </p>
          <p className="text-base sm:text-sm lg:text-base">
            Your second paragraph here. This can provide additional details or
            emphasize the key points.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className=" lg:order-2 flex justify-center lg:justify-center">
          <Image
            alt="benefits-image"
            src="/assests/benifit2.png"
            width={400}
            height={406}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
