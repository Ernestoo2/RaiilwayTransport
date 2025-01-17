import { ApiResponse, initialTravelData } from "./types/types";

export const fetchTravelRoutes = async (): Promise<ApiResponse> => {
  // Simulating an API request with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: initialTravelData,
        message: "Travel routes fetched successfully",
      });
    }, 1000); // 1 second delay to simulate API response time
  });

};
