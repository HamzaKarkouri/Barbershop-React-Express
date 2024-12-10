import React, { useState } from 'react';
import { Service } from '../types/booking';
import { services } from '../data/services';
import { useBooking } from '../hooks/useBooking';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import {bookingService} from "../services/bookingService.ts";

export const BookingForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState<Service>();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const { createBooking, loading, error } = useBooking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedService || !customerName || !customerEmail || !customerPhone) {
      alert('Please fill all the required fields!');
      return;
    }

    try {
      // Extract necessary field from selectedService
      const serviceId = selectedService.id; // Replace with the appropriate property (e.g., name or id)

      const booking = await bookingService.createBooking({
        customerName,
        customerEmail,
        customerPhone,
        selectedService: serviceId, // Pass the string value here
        selectedDate,
      });

      console.log('Booking successful:', booking);
      alert('Booking created successfully!');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };


  return (
      <div className="bg-gray-50 py-24" id="booking">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Book Your Appointment</h2>
            <p className="mt-4 text-lg text-gray-600">Choose your preferred service and date</p>
          </div>

          {error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Service</label>
                  <select
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                      value={selectedService?.id || ''}
                      onChange={(e) => setSelectedService(services.find(s => s.id === e.target.value))}
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - ${service.price}
                        </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Date</label>
                  <div className="mt-1">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={{ before: new Date() }}
                        className="border rounded-md p-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                      type="email"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                      type="tel"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                    type="submit"
                    className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                >
                  {loading ? 'Processing...' : 'Book Appointment'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};
