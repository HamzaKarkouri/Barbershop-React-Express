import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;