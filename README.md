# Project Midnight

## Description

**Project Midnight** is an application designed to assist with store management.

The application offers a user-friendly interface and leverages Firebase for secure user authentication, including login via Google, Apple, and email/password. It integrates with logistics APIs to display real-time shipment and inventory data, providing insights that support smarter decision-making in logistics operations.

## Features

- **User Authentication**: Users can sign in using Google, Apple, or email/password methods.
- **Real-time Data**: View real-time shipment statuses, inventory levels, and other logistics data.
- **Notifications**: Get timely updates regarding shipment tracking, delivery issues, and inventory changes.
- **Secure Login**: Integrated Firebase Authentication for secure login management.
- **Easy Setup**: Simple configuration and setup process using Firebase for backend support.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Firebase Authentication**: Backend service for secure authentication.
- **Node.js / NPM**: Package manager for managing dependencies.

## Setup Instructions

1. Clone the repository:

   ` git clone https://github.com/your-username/project-midnight.git `

2. Navigate to the project directory:

   ` cd project-midnight `

3. Install dependencies:

   ` npm install `

4. Set up Firebase:

   - Create a Firebase project at https://console.firebase.google.com/.
   - Set up Firebase Authentication with Google, Apple, and email/password sign-ins.
   - Add your Firebase configuration to the project by adding the values in `` src/lib/firebase.ts `` with your Firebase project credentials.

5. Run the application:

   ` npm run dev `

   The app will be available at `http://localhost:3000`.

## Contributing

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes with clear messages.
4. Push your changes to your fork.
5. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](./LICENSE) file for details.
