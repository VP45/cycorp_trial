import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative flex flex-col h-screen overflow-hidden">
      {/* <div className="hidden md:block">
        <div className="relative flex flex-col h-screen overflow-hidden">
          <div className="flex justify-center h-full">
            <Navbar />
            <video
              autoPlay
              loop
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="relative flex flex-col h-screen bg-[url(https://res.cloudinary.com/dgccztjql/image/upload/v1697723974/products/cycorp/bg_coll_zjmgz4.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="flex justify-center h-full">
            <Navbar />
          </div>
        </div>
      </div> */}
      <div className="hidden md:block">
      <div className="relative flex flex-col h-screen bg-[url(https://res.cloudinary.com/dgccztjql/image/upload/v1700855604/products/cycorp/cycorp_colage_pc_cyvrpb.png)] bg-cover bg-center bg-no-repeat">

          <div className="flex justify-center h-full">
            <Navbar />

          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="relative flex flex-col h-screen bg-[url(https://res.cloudinary.com/dgccztjql/image/upload/v1697723974/products/cycorp/bg_coll_zjmgz4.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="flex justify-center h-full">
            <Navbar />
          </div>
        </div>
      </div>
    </main>
  );
}
