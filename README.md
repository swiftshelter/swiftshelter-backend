# SwiftShelter

SwiftShelter is a revolutionary online marketplace that bridges the gap between individuals in search of affordable housing. This project uses Node.js, Express, MongoDB, and Mongoose to provide a robust backend for the SwiftShelter platform.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- Mongoose
- Docker (optional)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/swiftshelter/swiftshelter-backend.git
```

2. Navigate to the project directory:

```bash
cd swiftshelter
```

3. Install the dependencies:

```bash
npm install
```

4. Create a .env file and add your environment variables.

5. Start the server:

```bash
npm start
```

### Running the Tests

Run the tests using the following command:

```bash
npm test
```

### Deployment

This project includes a Dockerfile and a docker-compose.yml file for containerization and orchestration. To build and run the Docker image, use the following commands:

```bash
docker build -t swiftshelter .
docker run -p 3000:3000 swiftshelter
```

### Contributing

We welcome contributions from the community. To contribute:

1. Fork the project.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

Please read our CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

### License

This project is licensed under the MIT License. See the LICENSE.md file for details.

### Acknowledgments

- Thanks to all contributors who have helped to improve SwiftShelter.