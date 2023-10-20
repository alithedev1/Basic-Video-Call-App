# Video Chat Application

Welcome to the Video Chat Application! This web application allows you to have real-time video chats with other users. Below are the steps to set up and use this application.

## Prerequisites

Before you start, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Typically comes with Node.js installation.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/alithedev1/Basic-Video-Call-App
   cd video-chat-app
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

   By default, the server will run on port 3000. You can change the port by setting the `PORT` environment variable.

2. Open a web browser and navigate to `http://localhost:3000` (or the specified port if you changed it).

3. You will be prompted to provide access to your camera and microphone. Allow access to start the video chat.

4. Share the link or room name with other users, and they can join the video chat room.

5. Enjoy real-time video chats with other connected users.

## Features

- Real-time video and audio communication.
- Mute your own video and audio to prevent feedback.
- Automatically displays incoming video streams from other users in the "video-grid."

## Customization

- You can customize the styling of the application by modifying the `style.css` file.
- To implement additional features, you can edit the `script.js` file to suit your needs.

## Acknowledgments

This project was built using the following technologies and libraries:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [PeerJS](https://peerjs.com/)
- WebRTC for real-time communication.

## License

This project is open source.

---

Enjoy your video chat experience!