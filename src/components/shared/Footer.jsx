import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

const Footer = () => {
  return (
    <footer className="footer  text-base-content p-6 bg-[#3D3D3D]">
      <aside className="flex flex-col items-center md:items-start">
        {/* Logo - Only visible on mobile devices */}
        <div className="block  mb-4">
          <Image
            src="/assests/footer.png" // Replace with the correct path to your logo
            alt="Company Logo"
            width={200}
            height={200}
            className="object-contain "
          />
        </div>
      </aside>

      <nav className="hidden md:flex flex-row space-x-8 py-4">
        <h6 className="footer-title text-white">Why DOOH</h6>
        <h6 className="footer-title text-white">Benefits DOOH</h6>
        <h6 className="footer-title text-white">Impact & Coverage</h6>
        <h6 className="footer-title text-white">Contact</h6>
      </nav>
    </footer>
  );
};

export default Footer;
