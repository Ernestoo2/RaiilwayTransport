import "../App.css";
<<<<<<< HEAD
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
=======
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { BackImageProps } from "./constants";
>>>>>>> c5ac88b (Trials)

export default function BackImage({ location, description, src }: BackImageProps) {
  return (
    <div 
<<<<<<< HEAD
      className="imgWrap w-full cursor-pointer    h-70 rounded-md mx-auto" 
=======
      className="imgWrap w-full cursor-pointer h-70 rounded-md mx-auto" 
>>>>>>> c5ac88b (Trials)
      data-src={src}
      style={{ 
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
<<<<<<< HEAD
          // transition effect for background image change on hover
      }}
    >
      <div className="content ">
        <h1 className="text-white font-bold text-lg">{location}</h1>
        <p className="text-white text-sm">{description}</p>
=======
      }}
    >
      <div className="mt-32">
        <h1 className="text-white font-bold text-lg">{location}</h1>
        <p className="text-white font-semibold text-sm">{description}</p>
>>>>>>> c5ac88b (Trials)
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