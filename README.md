# Customer Service Platform

The Customer Service Platform allows users to interact with customer support using the Intercom Client. The platform enables users to flag their queries into the following categories:


- **General Queries** 

- **Product Features Queries**

- **Product Pricing Queries** 

- **Product Feature Implementation** 

This application is designed to provide seamless support to users while categorizing and managing customer queries effectively.

## Features

Real-time chat support integrated with Intercom.

Query categorization for better ticket management.

Frontend built with React.js for a responsive user interface.

Backend built with Node.js for handling API requests and database connections.

## Installation

Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Aayush-Kr-13/customer-service-platform.git
```

Running the Application

## Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm i
```

Start the development server:

```bash
npm run dev
```

## Backend

Navigate to the backend directory:

```bash
cd backend
```

Install the required dependencies:

```bash
npm i
```

Create a .env file in the backend directory and add the following environment variables:

```bash
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
DB_URL=<your-database-url>
JWT_SECRET=<your-jwt-secret>
JWT_TIMEOUT=<your-jwt-timeout>
```

Start the backend server:

```bash
npm start
```

## Tech Stack

**Frontend:** React.js, Tailwind CSS

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Authentication:** Google OAuth

**Chat Integration:** Intercom Messenger SDK

