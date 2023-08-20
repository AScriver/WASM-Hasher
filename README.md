# WebAssembly File Hasher

A simple web application that allows users to upload a file and generate a cryptographic hash using various algorithms. This project utilizes Rust compiled to WebAssembly to perform the hashing on the client side.

## Features:

- **File Upload**: Users can upload files to be hashed.
- **Multiple Algorithms**: Supports SHA-1, SHA-256, SHA-512, SHA3-512, and MD5.
- **WebAssembly**: Uses Rust compiled to WebAssembly for fast and secure hashing on the client side.

## Prerequisites

Before you start, ensure you have the following installed:

- [Rust and Cargo](https://www.rust-lang.org/tools/install)
- wasm-pack: `cargo install wasm-pack`
- [Node.js](https://nodejs.org/) (Optional for the http-server utility)
  - http-server: `npm install -g http-server`
## Getting Started

To get the project up and running on your local machine, follow these steps:

1. **Clone the repository**:
```
git clone https://github.com/AScriver/WASM-Guessing-Game.git wasm_guessing_game
```

2. **Navigate to the project directory**:
```
cd wasm_guessing_game
```

3. **Build the WASM module**:
```
wasm-pack build --release --target web
```

4. **Serve the project locally**:
Navigate to the root directory of your project and start the server with CORS enabled:
```
http-server . -p 8000 --cors
```

5. **Access the game**:
Open a web browser and navigate to `http://localhost:8000` to play the game.
