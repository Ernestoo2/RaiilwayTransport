// src/types/react-paystack.d.ts
declare module 'react-paystack' {
    export interface PaystackProps {
      reference: string;
      email: string;
      amount: number;
      publicKey: string;
      text?: string;
      onSuccess: (response: any) => void;
      onClose: () => void;
    }
  
    export const PaystackButton: React.ComponentType<PaystackProps>;
    export const usePaystackPayment: (config: Omit<PaystackProps, 'onSuccess' | 'onClose'>) => [() => void, any];
  }