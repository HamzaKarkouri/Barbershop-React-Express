export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  service: Service;
  date: Date;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}