import { Service } from '../types/booking';

export const services: Service[] = [
  {
    id: '1',
    name: 'Classic Haircut',
    duration: 30,
    price: 30,
    description: 'Traditional haircut with clippers and scissors'
  },
  {
    id: '2',
    name: 'Beard Trim',
    duration: 20,
    price: 20,
    description: 'Professional beard grooming and shaping'
  },
  {
    id: '3',
    name: 'Hot Towel Shave',
    duration: 45,
    price: 35,
    description: 'Luxurious straight razor shave with hot towel treatment'
  },
  {
    id: '4',
    name: 'Haircut & Beard Combo',
    duration: 60,
    price: 45,
    description: 'Complete grooming package with haircut and beard trim'
  }
];