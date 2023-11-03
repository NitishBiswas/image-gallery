# React Image Gallery Project

This project is a web-based image gallery application developed using React, Tailwind CSS, Typescript, Firebase, React DnD (Drag and Drop), React DnD HTML5 Backend, and React Lottie. The Image Gallery allows users to upload, view, and manage images, including features like drag-and-drop reordering and selecting multiple images.

## Demo

You can access the live demo of this project [here](https://image-gallery-v1.netlify.app).


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

The React Image Gallery project offers the following features:

1. **Image Upload**: Users can upload images to the gallery.
2. **Image Display**: Uploaded images are displayed in a grid.
3. **Drag and Drop**: Users can rearrange the order of images through drag-and-drop functionality.
4. **Image Selection**: Users can select and deselect images.
5. **Bulk Delete**: Selected images can be deleted in bulk.
6. **Image Preview**: Users can preview images.
7. **Lottie Animation**: Utilizes React Lottie for animation feedback.
8. **Responsive Design**: The application is designed to work on different screen sizes.

## Installation

To set up and run the React Image Gallery project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone [Repository URL]
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd image-gallery
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

5. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new Firebase project.
   - Set up Firebase storage and get the configuration.

6. **Configure Firebase**:
   - Create a `config` object in your project to store Firebase configuration. Place it in `src/config/firebaseConfig.js`.
   ```javascript
   // firebaseConfig.js
   import { initializeApp } from 'firebase/app';

   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };

   const app = initializeApp(firebaseConfig);

   export default app;
   ```

7. **Start the Development Server**:
   ```bash
   npm start
   ```
   or
    ```bash
   yarn start
   ```

8. **Open the Application**:
   - Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

- **Image Upload**: To upload an image, click on the "Upload" button and select an image from your local device. The uploaded image will appear in the gallery grid.
- **Drag and Drop**: You can rearrange the order of images by dragging and dropping them to the desired position.
- **Selecting Images**: Click on an image to select or deselect it. The selected images will have a blue border.
- **Bulk Delete**: After selecting multiple images, click the "Delete" button to remove them from the gallery.
- **Image Preview**: Click on an image to view it in a larger preview.
- **Animation Feedback**: When an image is deleted, a lottie animation provides visual feedback.

## Technologies Used

This project is built using the following technologies and libraries:

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for building responsive web applications.
- **Typescript**: A strongly typed superset of JavaScript.
- **Firebase**: A Backend-as-a-Service (BaaS) that provides cloud-based solutions for building web and mobile applications.
- **React DnD**: A set of higher-order components for complex drag-and-drop interfaces.
- **React DnD HTML5 Backend**: A HTML5 backend for React DnD.
- **React Lottie**: A library to add Lottie animations to React projects.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Create a pull request to the `main` branch of the original repository.
