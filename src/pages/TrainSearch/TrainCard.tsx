import { Link } from "react-router-dom";
import { TrainDetails } from "../../utils/types/types";

  

export interface TrainCardProps {
    train: TrainDetails;
  }
  
export const TrainCard: React.FC<TrainCardProps> = ({ train }) => {
  return (
    <div className="border-b bg-white my-5 px-4 rounded-md shadow-md border-[#D1D5DB] py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{train.trainName}</h3>
        <Link to="/review-booking" className="text-sm text-[#16A34A] hover:underline">
          View train time table
        </Link>
      </div>
      <p className="text-sm mt-2 text-[#6B7280]">Runs on: <span className="font-medium border rounded-md px-2 py-1 border-[#07561A]">{train.runsOn}</span></p>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm font-normal">{train.startDate} </p>
          <p className="text-sm font-medium">{train.departureTime}</p>
          <p className="text-sm text-[#6B7280]">{train.departureStation}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-[#6B7280]">{train.duration}</span>
          <hr className="border-t border-[#D1D5DB] w-full mt-1" />
        </div>
        <div className="text-right">
        <p className="text-sm font-normal"> {train.endDate}</p>
          <p className="text-sm font-medium">{train.arrivalTime}</p>
          <p className="text-sm text-[#6B7280]">{train.arrivalStation}</p>
        </div>
      </div>
    </div>
  );
};