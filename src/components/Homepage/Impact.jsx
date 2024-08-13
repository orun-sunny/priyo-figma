import React from "react";
import Image from "next/image";

const Impact = () => {
  return (
    <div className="bg-[#E08C23] px-6 lg:px-24 container mx-auto py-6">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-6">
          Impact & Coverage
        </h2>

        {/* Text Section */}
        <div className="text-white text-base lg:text-lg text-center mb-8">
          <p className="mb-4">
            Serving the bustling neighborhoods of Uttara, Mirpur, Mohammadpur,
            and Dhanmondi, we <br /> are positioned to deliver over 1 Billion
            impressions monthly.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 items-center justify-center">
          {/* Stack images vertically on small devices */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              alt="impact-image"
              src="/assests/last.png" // Replace with your image path
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
            <div className="relative bg-[#4C4C4D] lg:bg-transparent py-8 px-6">
              <Image
                alt="impact-image"
                src="/assests/table.png" // Replace with your image path
                width={500}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right side image, aligns on large screens */}
          <div className="flex justify-center lg:justify-end">
            <Image
              alt="impact-image"
              src="/assests/mainmap.png" // Replace with your image path
              width={400}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Additional Text Section */}
        <div className="text-white text-base lg:text-lg text-center">
          <p>
            Reach close to 70% of target residents with an effective ad
            frequency, ensuring high recall <br /> and brand safety within a
            trusted and transparent platform.es.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
