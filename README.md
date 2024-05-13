# Technical Test - Fullstack Developer

# (MERN Frontend)
This is a frontend application built with React and TypeScript for managing vehicles. It provides a list view of vehicles with a search feature, route, and vehicle location(fake) tracking on the route.

## Features
- List view of vehicles
- Search functionality for vehicles
- Vehicle location tracking on route

## Technologies Used
- React
- TypeScript
- Google Maps API

# (MERN Backend)
This frontend interacts with a custom backend API for CRUD operations within the application.

## Features
- CRUD Operations with vehicles
- Search functionality for vehicles
- Integration with route service for location information

## Technologies Used
- TypeScript
- Express
- MongoDB

## Setup

This project uses special settings called "environment variables" to set up certain things. Here's what you need to know:

### For the Frontend
- `VITE_KEY_API_MAPS`: It's like a secret code for Google Maps.
- `VITE_URL_BACK`: The web address for the backend.

### For the Backend
- `DATA_BASE_APPLY_URI`: It's like the address of the database.
- `DATA_BASE_MONGO`: Another address for the database.
- `URL_SERVICE_ROUTE`: Where the route service lives.
- `URL_FRONTEND`: The web address for the frontend.

Make sure to set up these settings before starting the project!

## Getting Started
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.