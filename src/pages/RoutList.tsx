import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RouteList() {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/review-booking", label: "Review Booking" },
    { path: "/verify-login", label: "Verify Login" },
    { path: "/signup", label: "Sign Up" },
    { path: "/login", label: "Login" },
    { path: "/user", label: "User Profile" },
    { path: "/booking-success", label: "Booking Success" },
    { path: "/train-search", label: "Train Search" },
    { path: "/train-search-results", label: "Train Search Results" },
  ];

  const [breakpoint, setBreakpoint] = useState<"desktop" | "mobile">("desktop");

  const handleBreakpointChange = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setBreakpoint("mobile");
    } else {
      setBreakpoint("desktop");
    }
  }, []);

  useEffect(() => {
    handleBreakpointChange(); // Call on mount
    window.addEventListener("resize", handleBreakpointChange);
    return () => window.removeEventListener("resize", handleBreakpointChange);
  }, [handleBreakpointChange]); // Add handleBreakpointChange as a dependency

  const handleNavigation = (event: any) =>{
      window.location.href = event.target.value
  }

  return (
    <nav
      className={`p-4 ${
        breakpoint === "mobile" ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* Conditional background */}
      {breakpoint === "desktop" && ( // Render for desktop
        <ul className="flex space-x-4 justify-center">
          {routes.map((route) => (
            <li
              key={route.path}
              className="text-gray-800 hover:text-green-600 transition-colors duration-300"
            >
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      )}
      {breakpoint === "mobile" && ( // Render for mobile
        <div className="flex flex-col items-center space-y-2">
          <select
          title="select"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            onChange={handleNavigation}
          >
            <option value="">Navigate...</option>
            {routes.map((route) => (
              <option key={route.path} value={route.path}>
                {route.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </nav>
  );
}


export default RouteList;

