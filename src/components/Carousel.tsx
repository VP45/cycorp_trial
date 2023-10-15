"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 300;
const PADDING_X = 10;
// props:{imageData:string[]}
const Carousel = () => {
  const imageData = [
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285028/products/cycorp/img1_qhqdgx.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285029/products/cycorp/img2_gdfctf.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285028/products/cycorp/img3_uvuvq6.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285029/products/cycorp/img4_xaxptr.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285030/products/cycorp/img5_s947zd.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285030/products/cycorp/img6_c8ifke.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285030/products/cycorp/img7_gne2qr.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285031/products/cycorp/img8_jg7dz4.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285030/products/cycorp/img9_irvzp2.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285028/products/cycorp/img10_suk5gb.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285028/products/cycorp/img11_cnfrbl.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285030/products/cycorp/img12_p0oagr.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285030/products/cycorp/img13_z1bgqg.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285031/products/cycorp/img14_i5zxv3.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285031/products/cycorp/img15_g7xi3f.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285032/products/cycorp/img16_gjoxeh.jpg",
    "https://res.cloudinary.com/dgccztjql/image/upload/v1697285033/products/cycorp/img17_emeryp.jpg",
  ];
  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);

  // Reference to gallery container
  const el = useRef<HTMLDivElement>(null);

  // Apply select effect on item
  const doSelect = (targetIndex: number) => {
    const children = el.current!.children;

    if (selectedIndex.current !== -1) {
      const currentEl = children[selectedIndex.current] as HTMLDivElement;
      currentEl.style.transform = "scale(1)";
      currentEl.style.zIndex = "0";
    }

    const targetEl = children[targetIndex] as HTMLDivElement;
    if (!targetEl) return;
    targetEl.style.transform = "scale(1.75)";
    targetEl.style.zIndex = "999";
    selectedIndex.current = targetIndex;

    // Update container position
    const theWidth = ITEM_WIDTH + PADDING_X;
    el.current!.style.transform = `translateX(calc(50% - ${
      theWidth * targetIndex + theWidth * 0.5
    }px))`;
  };

  useEffect(() => {
    doSelect(0);
  });

  // Render the items
  const renderedList = imageData.map((it, index) => (
    <div
      className="absolute duration-700 top-48 ease-out origin-center rounded-lg bg-no-repeat bg-contain bg-center my-2 cursor-pointer"
      key={index}
      onClick={(e) => doSelect(index)}
      style={{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        boxShadow: "2px 10px 77px -6px rgba(0,0,0,0.85)",
        left: (ITEM_WIDTH + PADDING_X) * index,
        backgroundImage: `url(${it})`,
      }}
    />
  ));

  return (
    <div>
      <div
        className="hidden md:block relative transition-all duration-700 w-screen my-4"
        ref={el}
      >
        {renderedList}
      </div>
      <div className="md:hidden">
        <div className="flex flex-col gap-2">
        <Image src='/img1.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img2.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img3.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img4.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img5.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img6.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img7.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img8.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img9.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img10.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img11.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img12.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img13.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img14.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img15.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img16.jpg' alt="img" width={1000} height={1000}/>
        <Image src='/img17.jpg' alt="img" width={1000} height={1000}/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
