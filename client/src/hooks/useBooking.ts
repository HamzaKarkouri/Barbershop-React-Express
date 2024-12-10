import { useState } from 'react';
import { bookingService } from '../services/bookingService';
import { Booking, Service, TimeSlot } from '../types/booking';

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBooking = async (bookingData: Omit<Booking, 'id'>): Promise<Booking | null> => {
    setLoading(true);
    setError(null);
    try {
      const booking = await bookingService.createBooking(bookingData);
      return booking;
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAvailableSlots = async (date: Date, serviceId: string): Promise<TimeSlot[]> => {
    setLoading(true);
    setError(null);
    try {
      return await bookingService.getAvailableSlots(date, serviceId);
    } catch (err) {
      setError('Failed to fetch available slots. Please try again.');
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    createBooking,
    getAvailableSlots,
    loading,
    error,
  };
};