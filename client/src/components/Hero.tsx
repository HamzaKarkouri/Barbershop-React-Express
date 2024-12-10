import React from 'react';
import { Scissors } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
          alt="Barbershop Interior"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <Scissors className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Classic Cuts & Modern Style
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Experience premium grooming services in a traditional barbershop setting
          </p>
          <div className="mt-10">
            <a
              href="#booking"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};