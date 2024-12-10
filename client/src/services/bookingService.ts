import axios from 'axios';
import { Booking, Service } from '../types/booking';

// Define API base URL
const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
});

// Define API endpoints
const API_ENDPOINTS = {
  SERVICES: '/api/services', // Endpoint for fetching services
  BOOKINGS: '/api/appointments', // Endpoint for creating bookings
};

// Booking Service
export const bookingService = {
  // Fetch all available services
  async getServices(): Promise<Service[]> {
    const response = await api.get(API_ENDPOINTS.SERVICES);
    return response.data;
  },

  // Create a new booking
  async createBooking(bookingData: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    selectedService: string;
    selectedDate: Date;
  }): Promise<Booking> {
    const response = await api.post(API_ENDPOINTS.BOOKINGS, bookingData);
    return response.data;
  },
};
