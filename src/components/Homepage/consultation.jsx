import React from "react";

const Consultation = () => {
  return (
    <div className="container mx-auto py-12 flex justify-center items-center">
      <div className=" p-6 rounded-lg   w-[650px]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Book a Consultation Call
        </h2>
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="example@example.com"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md  focus:outline-none  focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
