# Shopyie E-Commerce Platform

## Introduction
Shopyie is a fully-featured e-commerce platform developed by Hayford Afriyie as a project for ALX. The platform is built using React.js for the frontend, Express.js for the backend, MongoDB as the database, and Tailwind CSS for styling. Paystack is integrated as the payment platform for secure and seamless transactions.

## Features
- User authentication and authorization system
- Product catalog with search and filtering options
- Shopping cart functionality
- Secure checkout process with Paystack integration
- Order management system for administrators
- Responsive design for mobile and desktop users

## Technologies Used
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Payment Integration: Paystack
- Deployment: [Vercel]

## Setup Instructions
To run the Shopyie platform locally, follow these steps:

1. Clone the repository: `git clone [repository_url]`
2. Navigate to the project directory: `cd shopyie`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Define the following variables:
     ```
     PORT=3000
     DATABASE_URI=[MongoDB_URI]
     JWT_SECRET=[Your_JWT_Secret]
     PAYSTACK_PUBLIC_KEY=[Your_Paystack_Public_Key]
     PAYSTACK_SECRET_KEY=[Your_Paystack_Secret_Key]
     ```
5. Start the server: `npm start`
6. Open your web browser and navigate to `http://localhost:3000`

## Third-Party Services
- Paystack: Used for processing payments securely.

## Future Improvements
- Implementing product reviews and ratings
- Enhancing the search and filtering functionality
- Adding support for multiple languages and currencies

## Contributors
- Hayford Afriyie (@hayfordafriyie)

## License
This project is licensed under the [License Name]. See the LICENSE file for details.

## Contact Information
For any inquiries or support, please contact Hayford Afriyie at [hayfordafriyie@protonmail.ch].


