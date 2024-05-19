# Weather App with Redux Toolkit

This weather app serves as a practical example of integrating Redux Toolkit in a React application for state management, alongside the use of HTTP methods to interact with a weather API.

## Features

- **State Management**: Utilizes Redux Toolkit for efficient state management and centralizes the application's state.
- **API Integration**: Implements HTTP methods (GET, POST, PUT, DELETE) to fetch and manipulate data from a weather API.
- **Responsive Design**: Crafted with a mobile-first approach, ensuring compatibility across various devices.
- **Live Updates**: Provides real-time weather updates by fetching data periodically from the API.

## How It Works

The app initializes by dispatching a Redux action to fetch the current weather data using a `GET` request. The state is then updated with the response from the weather API. Users can interact with the app to refresh the data or request additional weather details, triggering corresponding HTTP methods and Redux actions.

## Getting Started

To get started with this project, clone the repo and install the necessary dependencies:

\`\`\`bash
git clone [your-repo-link]
cd weather-app-redux
npm install
\`\`\`
