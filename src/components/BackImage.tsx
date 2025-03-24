import "../App.css";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

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

      className="w-full mx-auto rounded-md cursor-pointer imgWrap h-70"

      data-src={src}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',

      }}
    >
      <div className="mt-32">
        <h1 className="text-lg font-bold text-white">{location}</h1>
        <p className="text-sm font-semibold text-white">{description}</p>

        <Link
          to="/train-search"
          className="mt-2 bg-[#8DD3BB] text-black px-2 py-2 rounded flex items-center justify-center gap-2"
        >
          <IoIosSend size={24} />
          Show Route
        </Link>
      </div>
    </div>
  );
}