// Main interface for travel route data

export interface TravelRoute {
    id: number;
    from: string;
    to: string;
    trip: string;
    Depart: string;
    Return: string;
    passenger: string;
    Class: string;
   

}
export interface TrainDetails {
    id: number;
    trainName: string;
    runsOn: string;
    departureTime: string;
    arrivalTime: string;
    departureStation: string;
    arrivalStation: string;
    duration: string;
}
export interface TrainCardProps {
    train: TrainDetails;
}

export interface RouteComponentProps {
    route: TravelRoute;
    onUpdate: (updatedRoute: Partial<TravelRoute>) => void;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
    message: string;
}

// Initial/mock data
export const initialTravelData: TravelRoute[] = [
    {
        id: 1,
        from: "Lahore",
        to: "Karachi",
        trip: "Return",
        Depart: "07 Nov 22",
        Return: "13 Nov 22",
        passenger: "1 Passenger",
        Class: "Economy",
    },
    {
        id: 2,
        from: "Islamabad",
        to: "Peshawar",
        trip: "One-way",
        Depart: "15 Dec 22",
        Return: "20 Dec 22",
        passenger: "2 Passengers",
        Class: "Business",
    },
    {
        id: 3,
        from: "Isman",
        to: "Ihie",
        trip: "One-way",
        Depart: "17 Aug 24",
        Return: "30 Dec 24",
        passenger: "2 Passengers",
        Class: "Business",
    },
    {
        id: 4,
        from: "Festac",
        to: "Patapa",
        trip: "One-way",
        Depart: "7 March 22",
        Return: "4 Nov 24",
        passenger: "2 Passengers",
        Class: "Business",
    },
];

// Constants for type safety
export const TripTypes = {
    ONE_WAY: 'One-way',
    RETURN: 'Return',
    MULTI_CITY: 'Multi-city',
    ROUND_TRIP : "Round-trip"
} as const;

export interface ClassTypes {
    [key: string]: number;
    Economy: number
    Business: number
    FirstClass: number
    Total: number
}

export const ClassTypess = {
    ECONOMY: 'Economy',
    BUSINESS: 'Business',
    FIRST: 'First Class',
    TOTAL: "Total",
} as const;

// Utility type for passenger count
export interface PassengerCount {
    adults: number;
    children: number;
    infants: number;
    total: number;
}

// Props types for components
export interface RouteComponentProps {
    route: TravelRoute;
    onUpdate: (updatedRoute: Partial<TravelRoute>) => void;
}

export interface SelectorProps  {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

// Form state type
export interface TravelFormState extends Omit<TravelRoute, 'id'> {
   
    passengerCount: PassengerCount;
}

export interface PaymentMethod {
    id: number;
    name: string;
    icon: string; // URL or icon component
    description: string;
    isSelected: boolean;
  }
  
  export interface PaymentProps {
    methods: PaymentMethod[];
    onMethodSelect: (id: number) => void;
  }
  