# Development of the Booking Application for a barbershop 

The project involved the development of a web application designed for booking services. The application was built using React.js for the front-end and Express.js for the back-end, with MongoDB as the database. The architecture followed the Model-View-Controller (MVC) design pattern to ensure modularity and maintainability.

## Front-End: React.js

The front-end of the application was developed using React.js, focusing on providing a user-friendly interface. Key features include:

### Landing Page

- Objective: The landing page serves as the entry point for users.
- Design: The page features a simple and visually appealing layout to introduce users to the application’s purpose and functionality.
- Responsive Design: Ensures the application works seamlessly on various devices, including desktops and mobile devices.

### Booking System

- Objective: Allows users to create a booking by entering required information such as name, email, phone number, date, and selected service.
- Validation: Implemented client-side validation to ensure that all required fields are filled correctly before submission.
- Form Handling: Used React's state management to manage form inputs and submission logic.
- Integration: The form submission sends booking data to the back-end API for storage.

## Back-End: Express.js

The back-end was implemented using Express.js, acting as the server-side framework to handle API requests and database interactions. Key features include:

### API Endpoints

Booking Endpoint: The primary endpoint for creating bookings. It receives data from the front-end and processes it for storage in the database.

### MongoDB Integration

Mongoose ODM: Used Mongoose to define the schema for the booking model and manage interactions with MongoDB.

Data Storage: Each booking contains the following fields:
- Customer Name
- Customer Email
- Customer Phone
- Service
- Booking Date

Error Handling: Implemented robust error handling to manage unexpected issues during data processing or database interactions.

### MVC Architecture

- Model Layer: Defines the schema and interacts with MongoDB using Mongoose.
- Controller Layer: Handles the logic for processing incoming requests and preparing responses.
- Router Layer: Maps incoming API requests to the appropriate controllers for handling.
