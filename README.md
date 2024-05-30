# Multiplayer Chess Game using WebSockets and WebRTC

This project utilizes WebSockets and WebRTC for seamless communication between clients and the server, enabling a dynamic and engaging gaming experience.

## Realtime Communication with WebSockets

In this multiplayer chess game, we leverage WebSockets for real-time communication between the server and clients. Unlike traditional HTTP servers, WebSockets allow for bidirectional communication, enabling the server to push events to clients without the need for constant requests.

## Key Features:

### Instant Connection Establishment:
- Clients are instantly connected to the server using WebSockets, facilitating seamless communication without the overhead of traditional HTTP requests.

### Dynamic Game Matching:
- Upon clicking the "Play" button, clients are matched with pending participants in real-time. A variable is maintained to manage player connections, ensuring efficient pairing without the need for a queue.

### State Management:
- The server maintains an in-memory variable containing the state of each game, represented as an array of Game Class instances. This allows for efficient tracking and management of ongoing game sessions.

## Technologies Used:

- **Language:** TypeScript
- **Communication Protocol:** WebSockets
- **Additional Communication:** WebRTC for enhanced peer-to-peer communication capabilities

## Getting Started:

To start playing our multiplayer chess game, simply follow these steps:

1. Clone the repository.
2. Install any necessary dependencies.
3. Run the server to establish WebSocket connections.
4. Open the client application in your browser to start playing chess in real-time!
