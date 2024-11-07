
# EveHorizon - Event Management Website
# Backend - https://github.com/amitver01/backend_EVENT
**EveHorizon** is a modern and dynamic event management platform that allows users to create, view, and manage events with ease. Built using the MERN stack, this platform offers a seamless experience for event organizers and attendees.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

EveHorizon is a full-stack application designed to simplify event management. The website allows users to:
- Browse and view upcoming events
- Create and manage their own events
- Register for events and receive tickets
- Share event details across social media

This project aims to streamline event management by providing a comprehensive set of tools in one platform.

## Features

- **User Authentication**: Secure user login and registration using JWT tokens and bcrypt for password hashing.
- **Event Creation**: Users can create and manage events, including image uploads.
- **Event Listing**: A responsive event listing page displays all upcoming events.
- **Event Sharing**: Users can share event details easily.
- **Ticket Management**: Attendees can register for events and receive tickets.
- **Responsive Design**: Optimized for both desktop and mobile views using Tailwind CSS.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **File Upload**: Multer (for handling event images)
- **Styling**: Material Tailwind

I've added the backend link to the README for *EveHorizon*. Here's the updated section:

---

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repositories:

   ```bash
   git clone https://github.com/amitver01/EveHorizon.git
   git clone https://github.com/amitver01/backend_EVENT.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # For frontend
   cd EveHorizon/client
   npm install

   # For backend
   cd ../backend_EVENT
   npm install
   ```

3. Set up environment variables for the backend:

   - Create a `.env` file in the `backend_EVENT` folder and add the following:

     ```
     MONGO_URI=your_mongo_database_url
     JWT_SECRET=your_jwt_secret
     ```

4. Start the development servers:

   ```bash
   # In the client folder
   npm start

   # In the backend folder
   npm run dev
   ```

5. Access the website locally at `http://localhost:3000`.

--- 

Here is a list of key API endpoints for the backend:

| Endpoint         | Method | Description                             |
|------------------|--------|-----------------------------------------|
| `/api/auth`      | POST   | User login and registration            |
| `/api/events`    | GET    | Fetch all events                       |
| `/api/events/:id`| GET    | Fetch details for a single event       |
| `/api/events`    | POST   | Create a new event (requires auth)     |
| `/api/tickets`   | POST   | Register for an event                  |

> Note: Some endpoints require authentication (JWT token).

## Project Structure

```plaintext
EveHorizon
├── client              # Frontend React application
├── server              # Backend Express API
│   ├── controllers     # Controller functions
│   ├── models          # MongoDB models
│   ├── routes          # API routes
│   └── middleware      # Authentication middleware
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcomed.


Let me know if you'd like to add more details, such as additional API endpoints, setup instructions, or usage guidelines!
