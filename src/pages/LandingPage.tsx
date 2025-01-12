import BackImageUi from "../ui/BackImageUi";
import BookingInterface from "../components/BookingInterface";
import FooterUi from "../ui/FooterUi";
import HeaderUi from "../ui/HeaderUi";
import Newsletter from "../components/Newsletter";
import React, { useEffect, useState } from "react";
import ReviewUi from "../ui/ReviewUi";
import RouteUi from "../ui/RouteUi";
import Skeleton from "react-loading-skeleton";

const LandingPageSkeleton = () => {
  return (
    <div>
      {/* Header Skeleton */}
      <div className="w-full bg-gray-100 h-16 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-full">
            <Skeleton height={40} width={120} /> {/* Logo */}
            <div className="flex gap-6">
              {Array.from({ length: 4 }, (_, i) => (
                <Skeleton key={i} height={30} width={80} /> /* Nav items */
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        {/* Route UI Skeleton */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex gap-4 justify-between">
              {Array.from({ length: 3 }, (_, i) => (
                <Skeleton key={i} height={50} width="30%" />
              ))}
            </div>
          </div>
        </div>

        {/* Background Image Skeleton */}
        <div className="mb-8">
          <Skeleton height={400} width="100%" />
        </div>

        {/* Booking Interface Skeleton */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <Skeleton key={i} height={60} />
              ))}
            </div>
            <Skeleton className="mt-4" height={50} width={200} /> {/* Button */}
          </div>
        </div>

        {/* Review UI Skeleton */}
        <div className="mb-8">
          <Skeleton className="mb-4" height={40} width={200} /> {/* Section title */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <Skeleton height={60} width={60} className="rounded-full mb-4" />
                <Skeleton count={3} height={15} className="mb-2" />
                <Skeleton width={100} height={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Train Image Skeleton */}
        <div className="mb-8">
          <Skeleton height={300} width="100%" />
        </div>

        {/* Newsletter Skeleton */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Skeleton height={40} width={300} className="mb-4" />
            <div className="flex gap-4">
              <Skeleton height={50} width="70%" />
              <Skeleton height={50} width="20%" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i}>
                <Skeleton height={30} width={150} className="mb-4" />
                {Array.from({ length: 4 }, (_, j) => (
                  <Skeleton key={j} height={20} width="80%" className="mb-2" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LandingPageSkeleton />;
  }
  return (
    <div>
        <HeaderUi/>
          
        <div className="p-3 ">
        <RouteUi />
        <BackImageUi />
        <BookingInterface/>
        <ReviewUi />
        <img src="/Assets/Train.png" alt="" />
        <Newsletter/>

      </div>
      <FooterUi/>
    </div>
  )
}

export default LandingPage