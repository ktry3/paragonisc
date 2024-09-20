# Next.js Project

This is a Next.js project that uses Chakra UI for UI components. Below are the steps to set up and run the project.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher)
- [npm](https://www.npmjs.com/get-npm) (version 6.x or higher)

## Getting Started

To get started with the project, follow the steps below:

### 1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```


### 2. Run the Development Server
To start the development server, use the following command:
```bash
npm run dev
```
After running the command, the app should be available at http://localhost:3000.



### 3. Build the Project for Production
To build the project for production, use the following command:
```bash
npm run build
```
This will generate an optimized build in the .next directory.



### 4. Set Up Environment Variables

Create a (.env.local) file in the root of the project. Add your environment variables to this file.

```
API_WEATHER_KEY: {{your_key}} //get from openweather api, or you can find the key in the document provided with the code
```
