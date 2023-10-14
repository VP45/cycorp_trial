import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center overflow-hidden p-2">
      <Navbar />
      <p className="py-2 flex tabular-nums text-red-600 text-5xl font-extrabold animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
          <span className="sr-only text-red-600">17</span>+ <span className="text-white">Accolades</span>
        </p>
      <Carousel></Carousel>
    </div>
  );
};

export default page;
