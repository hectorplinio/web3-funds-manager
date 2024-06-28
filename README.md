# Web3 Funds Manager

Web3 Funds Manager is a web application that allows users to manage their funds on various blockchains. Users can send and receive funds, and view their balances.

## Table of Contents

- [Web3 Funds Manager](#web3-funds-manager)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Architecture](#architecture)
  - [Folder Structure](#folder-structure)
  - [Development](#development)
    - [Style guide](#style-guide)
    - [Testing](#testing)
    - [Running tests](#running-tests)
    - [End-to-End Testing](#end-to-end-testing)
  - [After finishing a task](#after-finishing-a-task)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hectorplinio/web3-funds-manager.git
cd web3-funds-manager
```

2. Install the dependencies:

```
npm install
```

Keep in mind that we use `npm` for managing Node packages. If you try installing the dependencies with `yarn`, it will generate a `yarn-lock` file that will likely cause problems with the existing `package-lock.json`.

## Running the Application

To run the application in development mode, use the following command:

```
npm start
```

## Architecture

The application is built with React and uses various hooks and contexts to manage state and interact with blockchain APIs.

### Key Components

- React: Used for building the user interface.
- Tailwind CSS: Used for styling the application.
- @xchainjs/xchain-avax: Used for interacting with the Avalanche blockchain.
- ethers: Library for interacting with Ethereum and EVM-compatible blockchains.

## Folder Structure

```
web3-funds-manager/
├── public/              # Static assets
├── tests/               # e2e test folder
├── src/
│   ├── components/      # React components
│   ├── contexts/        # Context providers for global state
│   ├── domain/          # Domain-specific logic
│   ├── hooks/           # Custom hooks
│   ├── pages/           # React pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── .env.local           # Environment variables
├── .eslintrc.json       # ESLint configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Development

### Style guide

Before submitting a patch, please make sure that the code is formatted executing this command:

```
npm run format
```

### Testing

Testing is crucial for us and we strive for high coverage of our code.

We encourage you to write tests for every functionality you build and also update the existing ones if they need to.

#### Running tests

Before running the test, install the needed dependencies:

```
npm install
```

Execute all tests with:

```
npm run test
```

#### End-to-End Testing

We use Playwright for end-to-end testing. Playwright tests can be found in the `tests` directory.

To run the Playwright tests, use the following command:

```
npm run test:e2e
```

Ensure the application is running before executing the E2E tests. You can start the application with:

```
npm run start
```

Then, in a separate terminal, run the Playwright tests.

## After finishing a task

Before pushing your changes, make sure you run the linter and prettier to ensure the code follows the rules, or the CI pipeline will throw an error and fail:

```
npm run lint:fix
npm run format
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.
