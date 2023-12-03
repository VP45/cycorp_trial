import Design from "@/components/Design";
import Image from "next/image";
import React from "react";
import Slider from "@/components/Slider";
import Navbar1 from "@/components/Navbar1";

const page = () => {
  // const slides1 = ["/image2.jpeg,","/image3.jpeg", "/image4.png", "/image5.png"];
  // // const slides2 = ["/image3.jpeg", "/image4.png", "/image5.png"];
  // const slides3 = ["/image6.jpg", "/image7.jpeg"];
  // const slides4 = ["/image8.jpeg"];
  // const slides5 = ["/image9.png", "/image10.jpeg"];
  // const slides6 = ["/image11.jpeg"];
  // const slides7 = ["/image12.jpeg"];
  // const slides8 = ["/image13.jpeg"];
  // const slides9 = ["/image14.png"];
  // const slides10 = ["/image15.png"];
  // const slides11 = ["/image16.jpeg"];
  // const slides12 = ["/image17.jpeg"];
  // const slides13 = ["/image18.jpeg", "/image19.jpeg"];
  // const slides14 = ["/image20.jpeg"];
  // const slides15 = ["/image21.jpeg"];
  // const slides16 = ["/image22.jpeg"];
  // const slides17 = ["/image23.png"];
  // const slides18 = ["/image24.jpeg"];
  // const slides19 = ["/image25.jpeg"];
  // const slides20 = ["/image26.jpeg"];
  // const slides21 = ["/image27.png", "/image28.png", "/image29.png"];
  // const slides22 = ["/image30.png", "/image31.jpeg"];
  // const slides23 = ["/image32.jpeg"];
  // const slides24 = ["/image33.png", "/image34.png"];
  // const slides25 = ["/image35.jpeg"];
  // const slides26 = ["/image36.jpeg"];
  // const slides27 = ["/image37.jpeg"];
  // const slides28 = ["/image38.jpeg"];
  // const slides29 = ["/image39.jpeg"];
  // const slides30 = ["/image40.png", "/image41.png"];
  // const slides31 = ["/image42.jpeg"];
  // const slides32 = ["/image43.jpeg"];
  // const slides33 = ["/image44.jpeg"];
  // const slides34 = ["/image45.png", "/image46.png"];
  // const slides35 = ["/image47.png", "/image48.png"];
  // const slides36 = ["/image49.jpeg", "/image50.jpeg"];
  // const slides37 = ["/image51.jpeg", "/image52.png"];
  // const slides38 = ["/image53.png", "/image54.jpeg"];
  // const slides39 = ["/image55.jpeg", "/image56.png"];
  // const slides40 = ["/image57.png", "/image58.png"];
  // const slides41 = ["/image59.png", "/image60.png"];
  // const slides42 = ["/image61.jpeg", "/image62.jpeg"];
  // const slides43 = [
  //   "/image63.jpeg",
  //   "/image64.jpeg",
  //   "/image65.jpeg",
  //   "/image66.jpeg",
  // ];
  // const content1 = "ZINNIA PRINCECARE | G+20 | MAHIM";
  // // const content2 = "ZINNIA RRINCECARE | G+20 | MAHIM";
  // const content3 = "SUKRUT TECHNO | G+18 | SHIVAJI PARK TECHNO";
  // const content4 = "TULASI TECHNO | G+19 | MULUND";
  // const content5 = "MEHTA RESIDENCY | G+18 | SION";
  // const content6 = "MITTAL COMMERCIA | ANDHERI EAST";
  // const content7 = "TMGL SKYE | G+45 | DADAR";
  // const content8 = "ANTARIKSH  REX REALTY | G+20 | HINDMATA";
  // const content9 = "SIGNARE | DADAR | TEJUKAYA";
  // const content10 = "SIGNARE | DADAR | TEJUKAYA";
  // const content11 = "ZEPHYR |  WADALA | AURA CREATORS";
  // const content12 = "ROYAL ARC | SHIVAJI PARK | DIPTI BUILDERS";
  // const content13 = "OCEAN TERRACES | SHIVAJI PARK | DIPTI BUILDERS";
  // const content14 = "CHANDRAMANI | MATUNGA";
  // const content15 = "PLOT 102 | MATUNGA";
  // const content16 = "VERSATILE HEIGHTS | MATUNGA";
  // const content17 = "QUEENS BOULEVARD | WALKESHWAR";
  // const content18 = "AVISHA| GIRGAON | NANDIVARDHAN";
  // const content19 = "BROOKLYN | MATUNGA";
  // const content20 = "RIVIERA | MATUNGA  | TIRDHAATU";
  // const content21 = "THE PAVILLION | SHIVAJI PARK | CHHEDDA GROUP";
  // const content22 = "THE PAVILLION | SHIVAJI PARK | CHHEDDA GROUP";
  // const content23 = "RITA VILLA | DIPTI GROUP";
  // const content24 = "RITA VILLA | DIPTI GROUP";
  // const content25 = "SHWESH CHAMPARAN |  MATUNGA";
  // const content26 = "KALPANA | MATUNGA | TECHNO";
  // const content27 = "BLUEWAVES | SHIVAJI PARK | BLUESTONE";
  // const content28 = "ORCHID SCHOOL | MASJID BUNDER | CVOD";
  // const content29 = "BELVEDERE | SION | JK ESTATES";
  // const content30 = "VIVA | MUMBAI CENTRAL | LIVING STONE";
  // const content31 = "BAY GARDENS | DOCKYARD | NDW";
  // const content32 = "PUROHIT - MAHALAKSHMI";
  // const content33 = "BEACON ROSE | FORT";
  // const content34 = "TRAMBAK BHAVAN REDEVELOPMENT | MATUNGA";
  // const content35 = "AVA | LIVINGSTONE | ALTAMOUND ROAD";
  // const content36 = "BLISS | LIVINGSTONE | BREACH CANDY";
  // const content37 = "EMERALD ISLE | PAWNA | 80 ACRES";
  // const content38 = "EMERALD ISLE | PAWNA";
  // const content39 = "EMERALD ISLE | PAWNA";
  // const content40 = "ALLAY |  ANCHOR | PAREL";
  // const content41 = "MITTAL GARDENIA | PAREL";
  // const content42 = "HILL HOUSE | PAWN";
  // const content43 = "VILLA  | PAWNA";

  const content1 = "ZINNIA PRINCECARE | G+20 | MAHIM"
  const content2 = "TMGL SKYE | G+45 | DADAR"
  const content3 = "ANTARIKSH REX REALTY | G+20 | HINDMATA"
  const content4 = "SIGNARE | DADAR | TEJUKAYA"
  const content5 = "OCEAN TERRACES | SHIVAJI PARK | DIPTI BUILDERS"
  const content6 = "ZEPHYR | WADALA | AURA CREATORS"
  const content7 = "BEACON ROSE | FORT"
  const content8 = "BLISS | LIVINGSTONE | BREACH CANDY"
  const content9 = "KALPANA | MATUNGA |TECHNO"
  const content10 = "ALLAY | ANCHOR | PAREL"
  const content11 = "THE PAVILLION | SHIVAJI PARK | CHHEDDA GROUP"
  const content12 = "AVA | LIVINGSTONE | ALTAMOUND ROAD"
  const content13 = "MITTAL GARDENIA | PAREL"
  const content14 = "EMERALD ISLE | PAWNA | 80 ACRES"
  const content15 = "PUROHIT - MAHALAKSHMI"
  const content16 = "VIVA | MUMBAI CENTRAL | LIVING STONE"
  const content17 = "BAY GARDENS | DOCKYARD | NDW"
  const content18 = "QUEENS BOULEVARD | WALKESHWAR"
  const content19 = "BELVEDERE | SION | JK ESTATES"
  const content20 = "BLUEWAVES | SHIVAJI PARK | BLUESTONE"
  const content21 = "SHWESH CHAMPARAN | MATUNGA"
  const content22 = "AVISHA| GIRGAON | NANDIVARDHAN"
  const content23 = "RITA VILLA | DIPTI GROUP"
  const content24 = "PLOT 102 | MATUNGA"
  const content25 = "ROYAL ARC | SHIVAJI PARK | DIPTI BUILDERS"
  const content26 = "HILL HOUSE | PAWNA"

  const slides1 = ["/image2.jpg", "/image1.jpg", "/image3.png"];
  const slides2 = ["/image5.jpg"];
  const slides3 = ["/image6.jpg"];
  const slides4 = ["/image7.png","/image8.png"]
  const slides5 = ["/image9.jpg","/image10.jpeg"]
  const slides6 = ["/image11.jpg"]
  const slides7 = ["/image12.jpeg"]
  const slides8 = ["/image13.jpg", "/image14.jpg"]
  const slides9 = ["/image15.jpg"]
  const slides10 = ["/image16.jpg", "/image17.jpg", "/image18.jpeg"]
  const slides11 = ["/image19.jpeg"]
  const slides12 = ["/image20.png","/image21.png"]
  const slides13 = ["/image22.jpeg"]
  const slides14 = ["/image23.jpg"]
  const slides15 = ["/image24.jpg"]
  const slides16 = ["/image25.jpg", "/image26.jpg"]
  const slides17 = ["/image27.jpg"]
  const slides18 = ["/image28.jpg", "/image29.jpg"]
  const slides19 = ["/image30.jpg"]
  const slides20 = ["/image31.jpg", "/image32.jpg"]
  const slides21 = ["/image33.jpg"]
  const slides22 = ["/image34.jpg"]
  const slides23 = ["/image35.jpg"]
  const slides24 = ["/image36.jpg"]
  const slides25 = ["/image37.jpg"]
  const slides26 = ["/image38.png"]
  
  return (
    <div className="flex flex-col max-w-max">
      <Navbar1 />
      <div className="hidden md:block">
        <div className="grid grid-cols-3 w-[100vw]">
          <Slider slides={slides1} content={content1} />
          <Slider slides={slides2} content={content2} />
          <Slider slides={slides3} content={content3} />
          <Slider slides={slides4} content={content4} />
          <Slider slides={slides5} content={content5} />
          <Slider slides={slides6} content={content6} />
          <Slider slides={slides7} content={content7} />
          <Slider slides={slides8} content={content8} />
          <Slider slides={slides9} content={content9} />
          <Slider slides={slides10} content={content10} />
          <Slider slides={slides11} content={content11} />
          <Slider slides={slides12} content={content12} />
          <Slider slides={slides13} content={content13} />
          <Slider slides={slides14} content={content14} />
          <Slider slides={slides15} content={content15} />
          <Slider slides={slides16} content={content16} />
          <Slider slides={slides17} content={content17} />
          <Slider slides={slides18} content={content18} />
          <Slider slides={slides19} content={content19} />
          <Slider slides={slides20} content={content20} />
          <Slider slides={slides21} content={content21} />
          <Slider slides={slides22} content={content22} />
          <Slider slides={slides23} content={content23} />
          <Slider slides={slides24} content={content24} />
          <Slider slides={slides25} content={content25} />
          <Slider slides={slides26} content={content26} />
        </div>
        {/* <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div>
        <div className="grid grid-cols-3 w-[100vw]">
          
        </div> */}
      </div>
      <div className="md:hidden">
        <div className="flex flex-col w-[100vw]">
          <Slider slides={slides1} content={content1} />
          <Slider slides={slides2} content={content2} />
          <Slider slides={slides3} content={content3} />
          <Slider slides={slides4} content={content4} />
          <Slider slides={slides5} content={content5} />
          <Slider slides={slides6} content={content6} />
          <Slider slides={slides7} content={content7} />
          <Slider slides={slides8} content={content8} />
          <Slider slides={slides9} content={content9} />
          <Slider slides={slides10} content={content10} />
          <Slider slides={slides11} content={content11} />
          <Slider slides={slides12} content={content12} />
          <Slider slides={slides13} content={content13} />
          <Slider slides={slides14} content={content14} />
          <Slider slides={slides15} content={content15} />
          <Slider slides={slides16} content={content16} />
          <Slider slides={slides17} content={content17} />
          <Slider slides={slides18} content={content18} />
          <Slider slides={slides19} content={content19} />
          <Slider slides={slides20} content={content20} />
          <Slider slides={slides21} content={content21} />
          <Slider slides={slides22} content={content22} />
          <Slider slides={slides23} content={content23} />
          <Slider slides={slides24} content={content24} />
          <Slider slides={slides25} content={content25} />
          <Slider slides={slides26} content={content26} />
        </div>
      </div>
    </div>
  );
};

export default page;
