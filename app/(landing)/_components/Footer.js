import React from "react";
import Image from "next/image";

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
      <div class="overflow-hidden relative h-24">
        <img className="absolute bottom-0 w-full" src="grass.svg" alt="grass" />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between px-5 lg:justify-around">
          <div className="flex">
            <div>
              <Image
                className=""
                src="https://placehold.co/200x200"
                width={200}
                height={200}
                alt="placeholder 1"
              />
            </div>
            <div>
              <Image
                className=""
                src="https://placehold.co/200x200"
                width={200}
                height={200}
                alt="placeholder 2"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                className=""
                src="https://placehold.co/200x200"
                width={200}
                height={200}
                alt="placeholder 4"
              />
            </div>
            <div>
              <Image
                className=""
                src="https://placehold.co/200x200"
                width={200}
                height={200}
                alt="placeholder 3"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
