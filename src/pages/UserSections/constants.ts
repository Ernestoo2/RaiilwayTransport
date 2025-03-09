// Payment Method Interface
export interface PaymentMethod {
  id: number;
  name: string;
  icon: string; // Only supports image URLs for consistency
  description: string;
  isSelected: boolean;
}

// Payment Methods Data

// Payment Props Interface
export interface PaymentProps {
  methods: PaymentMethod[];
  onMethodSelect: (id: number) => void;
}

// Ticket Interface
export interface Ticket {
  id: number;
  departure: string;
  arrival: string;
  time: string;
  date: string;
  gate: string;
  seat: string;
  airlineLogo: string; // URL for imported image paths
}
// Tickets Data
