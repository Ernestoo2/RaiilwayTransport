import "../App.css";
import React from "react";
import { IoIosSend } from "react-icons/io";

interface BackImageProps {
  id: number;
  location: string;
  description: string;
  src: string;
}

export const BackImageData: BackImageProps[] = [
  {
    id: 1,
    location: "Lagos",
    description: "Search Trains & Places Bookings to our most popular destinations",
    src: "/Assets/back1.png",
  },
  {
    id: 2,
    location: "Abuja",
    description: "Search Trains & Places Bookings to our most popular destinations",
    src: "/Assets/back2.png",
  },
];

export default function BackImage({ location, description, src }: BackImageProps) {
  return (
    <div 
      className="imgWrap w-full h-70 rounded-md mx-auto" 
      data-src={src}
      style={{ 
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="content ">
        <h1 className="text-white font-bold text-lg">{location}</h1>
        <p className="text-white text-sm">{description}</p>
        <button
          type="submit"
          className="mt-2 bg-[#8DD3BB] text-black px-2 py-2 rounded flex items-center justify-center gap-2"
        >
          <IoIosSend size={24} />
          Show Route
        </button>
      </div>
    </div>
  );
}