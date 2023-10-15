"use client";

import { RxCross2 } from "react-icons/rx";
import YouPNG from "../../public/you.jpg";
import YMSCL from "../../public/ymsLogo.png";
import BNSA from "../../public/image1.jpeg";
import YMSCLPICKER from "../../public/yms_picker.png";
import BNAPICKER from "../../public/bnsa_picker.png";
import Select from "react-select";

import {
  useJsApiLoader,
  GoogleMap,
  InfoBox,
  MarkerF,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Option from "./Option";
import { StaticImageData } from "next/image";

const data = [
  {
    name: "Bandra",
    lat: 19.0596,
    lng: 72.8295,
    sites: 22,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Khar",
    lat: 19.0699,
    lng: 72.8374,
    sites: 22,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Vile Parle",
    lat: 19.0968,
    lng: 72.8517,
    sites: 9,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Mulund",
    lat: 19.1765,
    lng: 72.9475,
    sites: 5,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Andheri",
    lat: 19.1136,
    lng: 72.8697,
    sites: 11,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Sanatacruz",
    lat: 19.0843,
    lng: 72.836,
    sites: 20,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Juhu",
    lat: 19.1075,
    lng: 72.8263,
    sites: 5,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Jogeshwari",
    lat: 19.1439,
    lng: 72.8428,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Goregaon",
    lat: 19.1663,
    lng: 72.8526,
    sites: 7,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Ghatkopar",
    lat: 19.079,
    lng: 72.908,
    sites: 4,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Malad",
    lat: 19.1874,
    lng: 72.8484,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Kurla",
    lat: 19.0726,
    lng: 72.8845,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Versova",
    lat: 19.1351,
    lng: 72.8146,
    sites: 1,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Kalina",
    lat: 19.0763,
    lng: 72.8654,
    sites: 4,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Kandivali",
    lat: 19.2029,
    lng: 72.8518,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Mahim",
    lat: 19.0354,
    lng: 72.8423,
    sites: 9,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Mazgaon",
    lat: 18.9644,
    lng: 72.8421,
    sites: 7,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Byculla",
    lat: 18.975,
    lng: 72.8295,
    sites: 5,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Parel",
    lat: 18.9977,
    lng: 72.8376,
    sites: 9,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Dadar",
    lat: 19.0178,
    lng: 72.8478,
    sites: 10,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Matunga",
    lat: 19.0269,
    lng: 72.8553,
    sites: 35,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Walkeshwar",
    lat: 18.9508,
    lng: 72.8021,
    sites: 1,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Andheri",
    lat: 19.1136,
    lng: 72.8697,
    sites: 6,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Fort",
    lat: 18.9345,
    lng: 72.8371,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Tardeo",
    lat: 18.9676,
    lng: 72.8141,
    sites: 3,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Marine Drive",
    lat: 18.9555,
    lng: 72.8126,
    sites: 1,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Babulnath",
    lat: 18.9593,
    lng: 72.8087,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Mulund",
    lat: 19.1765,
    lng: 72.9475,
    sites: 1,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Wadala",
    lat: 19.0149,
    lng: 72.8631,
    sites: 4,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Shivaji Park",
    lat: 19.0303,
    lng: 72.8384,
    sites: 6,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Carmichael Road",
    lat: 18.9722,
    lng: 72.8113,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Malabar Hill",
    lat: 18.9548,
    lng: 72.7985,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Sion",
    lat: 19.039,
    lng: 72.8619,
    sites: 10,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Worli",
    lat: 18.9986,
    lng: 72.8174,
    sites: 3,
    company: "BNSA+SC",
    img: BNSA,
  },
];

type OptionType = {
  lng: number;
  lat: number;
  sites: number;
  name: string;
  img?: StaticImageData;
  company?: string;
  label?: string;
  value?: number;
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(
    /** @type google.maps.Map */ null
  );

  const [activeMarker, setActiveMarker] = useState(-1);
  const [infoDomReady, setInfoDomReady] = useState(false);

  const [markers, setMarkers] = useState<OptionType[]>(
    data.map((marker, index) => ({
      ...marker,
      label: marker?.name,
      value: index + 1,
    }))
  );

  const [userCoords, setUserCoords] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 19.0645,
    lng: 72.8359,
  });

  async function getLatLong(address: string) {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC_A5HGA5UD40AEDoh-cU_z2zOrCA3Ie9U`
    );
    const data = await res.json();
    console.log(data.results[0].geometry.location);
    return data.results[0].geometry.location;
  }

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    if (map && infoDomReady && activeMarker !== -1) {
      map.panTo(markers[activeMarker - 1]);
    }
  }, [activeMarker, infoDomReady, map]);

  if (!isLoaded) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex relative flex-col items-center h-screen w-screen">
      <aside className="hidden md:flex absolute left-0 top-0 h-full w-[30%] flex-col items-center bg-white p-4">
        <div className="w-full flex flex-col gap-2 p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-black">Search Places 🔍</h2>

          <Select
            options={markers.map((marker, index) => {
              return {
                ...marker,
                label: marker?.name + ` (${marker?.company})`,
              };
            })}
            onChange={(e) => {
              console.log(e);
              if (e?.value === undefined) return;
              map?.panTo(markers[e?.value - 1]);
              handleActiveMarker(e?.value);
            }}
            className="w-full"
            classNamePrefix="select"
            isClearable={true}
            isSearchable={true}
            name="modelIndex"
            styles={{
              option: (base) => ({
                ...base,
                color: "black",
              }),
            }}
          />
        </div>
        <ul className="flex flex-col gap-2 border-b border-gray-700 overflow-y-auto noscr w-full">
          {markers
            .sort((a, b) => (a.sites > b.sites ? -1 : 1))
            .map((marker, index) => (
              <li
                key={index}
                className={`flex items-center justify-between w-full p-4 cursor-pointer ${
                  activeMarker === index + 1
                    ? "bg-gray-700 text-white"
                    : "text-black"
                }`}
                onClick={() => {
                  handleActiveMarker(index + 1);
                  map?.panTo(markers[index]);
                }}
              >
                <div className="flex items-center gap-2">
                  <img src={marker?.img?.src} alt="CAT" className="w-8 h-8" />
                  <span className="text-sm font-semibold">
                    {marker.name + ` (${marker.company})`}
                  </span>
                </div>
                <span className="text-sm font-semibold">{marker.sites}</span>
              </li>
            ))}
        </ul>
      </aside>

      <nav className="z-10 flex absolute top-4 w-[95%] m-auto md:hidden bg-white shadow-xl p-4 rounded-md">
        <Select
          options={markers.map((marker, index) => {
            return {
              ...marker,
              label: marker?.name + ` (${marker?.company})`,
            };
          })}
          onChange={(e) => {
            console.log(e);
            if (e?.value === undefined) return;
            map?.panTo(markers[e?.value - 1]);
            handleActiveMarker(e?.value);
          }}
          className="w-full"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          name="modelIndex"
          styles={{
            option: (base) => ({
              ...base,
              color: "black",
            }),
          }}
        />
      </nav>

      <div className="absolute right-0 top-0 h-full w-full md:w-[70%]">
        <GoogleMap
          onClick={() => setActiveMarker(-1)}
          center={userCoords}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => {
            setMap(map);
          }}
        >
          <MarkerF
            onClick={() => handleActiveMarker(0)}
            position={{
              lat: userCoords?.lat || 19.0645,
              lng: userCoords?.lng || 72.8359,
            }}
            icon={
              YouPNG.src ||
              "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            }
          />

          {markers.map((marker, index) => (
            <MarkerF
              key={index}
              onClick={() => handleActiveMarker(index + 1)}
              position={{ lat: marker.lat, lng: marker.lng }}
              // icon={(marker.company === "YMSCL" ?  marker?.img?.src : marker?.img?.src) || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              icon={{
                url:
                  marker.company === "YMSCL"
                    ? YMSCLPICKER.src
                    : marker.company === "BNSA+SC"
                    ? BNAPICKER.src
                    : "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                scaledSize: new google.maps.Size(50, 50),
                origin: new google.maps.Point(0, 0),
              }}
            >
              {/* Infobox */}
              {activeMarker === index + 1 && (
                <InfoBox
                  options={{ closeBoxURL: ``, enableEventPropagation: true }}
                  onDomReady={() => setInfoDomReady(true)}
                  onUnmount={() => setInfoDomReady(false)}
                >
                  <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-xl">
                    {/* <div className="flex items-center justify-center">
                                                    <img src={YouPNG.src || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"} alt="You" className="w-8 h-8" />
                                                    <span className="text-sm font-semibold text-black">You</span>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                    <span className="text-xs font-semibold text-black">Lat: {center.lat.toFixed(4)}</span>
                                                    <span className="text-xs font-semibold text-black">Lng: {center.lng.toFixed(4)}</span>
                                                    </div> */}

                    <div className="absolute right-2 top-2 cursor-pointer bg-white p-1">
                      <RxCross2
                        className="w-6 h-6 text-black"
                        onClick={() => handleActiveMarker(-1)}
                      />
                    </div>
                    <Option marker={marker} />
                  </div>
                </InfoBox>
              )}
            </MarkerF>
          ))}
          {/* {
            polMarkers?.map((marker, index) => (
              <Marker
                key={index}
                onClick={() => handleActiveMarker(index + 1)}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                icon={PoliceCar.src || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              >
                {
                  activeMarker === index + 1 && (
                    <InfoBox
                      options={{ closeBoxURL: ``, enableEventPropagation: true }}
                      onDomReady={() => setInfoDomReady(true)}
                      onUnmount={() => setInfoDomReady(false)}
                    >
                      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-xl">
                        <div className="flex items-center justify-center">
                          <img src={CAT.src || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"} alt="You" className="w-32 h-32" />
                          <span className="text-sm font-semibold text-black">You</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="text-xs font-semibold text-black">Lat: {userCoords.lat.toFixed(4)}</span>
                          <span className="text-xs font-semibold text-black">Lng: {userCoords.lng.toFixed(4)}</span>
                        </div>

                        <div className='absolute right-2 top-2 cursor-pointer bg-white p-1'>
                          <RxCross2 className='w-6 h-6 text-black' onClick={() => handleActiveMarker(-1)} />
                        </div>
                      </div>
                    </InfoBox>
                  )
                }
              </Marker>
            ))
          } */}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Map;
