import React from "react";
import { contractAddress } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="text-center font-stopbuck mt-16 pb-5 pt-8">
        <div>
          <p className="text-md/relaxed text-gray-500">
            © &nbsp; <span className="text-duis text-shadow">JIATs</span>{" "}
            community 2025.
          </p>
          <p className="text-black mt-4 px-3 text-base sm:text-lg md:text-2xl opacity-30 break-words">
            {contractAddress}
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
