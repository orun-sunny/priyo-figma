import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="hero container mx-auto text-slate-800">
      <div className="hero-content flex-col lg:flex-row  ">
        {/* This image will only show on large devices */}
        <Image
          className="hidden lg:block lg:pb-64"
          alt="left"
          src="/assests/baleft.png"
          height={1000}
          width={150}
        />

        <div className="w-full lg:w-1/2 space-y-5 p-4">
          <Image
            alt="logo"
            src="/assests/Logo.png"
            height={60}
            width={150}
            className="hidden lg:block"
          />
          <h1 className="text-2xl lg:text-3xl font-semibold  font-din leading-8">
            Amplify Your Brand’s Voice in the Heart of Bangladesh’s Marketplaces
          </h1>
          <p className="text-sm lg:text-base">
            Engage with Strategic, Real-Time DOOH Advertising
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
          <Image
            width={1000}
            height={1000}
            alt="Person image"
            src="/assests/banner.png"
            className="w-full lg:w-3/4 rounded-lg shadow-2xl"
          />
          <Image
            width={100}
            height={100}
            alt="Top Right Image"
            src="/assests/rightside.png"
            className="absolute top-0 right-0 m-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
