import Awards from "@/components/Awards";
import Carousel from "@/components/Carousel";
import Navbar1 from "@/components/Navbar1";
import React from "react";

const page = () => {
  return (
    <div className="md:h-screen flex flex-col items-center overflow-auto">
      <Navbar1 />
      <p className="py-2 flex  text-red-600 text-5xl font-extrabold">
          {/* tabular-nums animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)] */}
          {/* <span className="sr-only text-red-600">17</span>+  */}
          <span className="text-white">Accolades</span>
        </p>
      {/* <Carousel></Carousel> */}
      <Awards />
    </div>
  );
};

export default page;
