# Planner Wellness – React Frontend

This folder contains the React and Vite implementation of the Planner Wellness application.

The application displays wellness activities fetched from a mock REST API using JSON Server.

## How to run

Install dependencies:

```bash
npm install
```

Start the mock API:

```bash
npm run api
```

In a second terminal, start the React application:

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

The API is available at `http://localhost:3001/activities`.

## Features

- Fetch activities using `useEffect` and the Fetch API.
- Display loading and error messages.
- Toggle activity completion.
- Delete activities locally.
- Display dynamic activity counters.
- Switch between light and dark themes.

Activity changes are currently stored only in React state and are not persisted to the API.

## Documentation

For the complete project description, development stages, checklists and AI usage documentation, see the [main README](../README.md).