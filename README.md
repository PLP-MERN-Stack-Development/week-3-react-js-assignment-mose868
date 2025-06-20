# PLP Task Manager - React.js Assignment

A modern, responsive React application built with Vite and Tailwind CSS, demonstrating component architecture, custom hooks, state management, and API integration.

## Features Implemented

### Reusable UI Components
- **Button Component**: Multiple variants (primary, secondary, danger, success, warning) with different sizes
- **Card Component**: Flexible container with title, subtitle, footer, and hover effects  
- **Navbar Component**: Responsive navigation with theme toggle
- **Footer Component**: Multi-column layout with links and resources
- **TaskManager Component**: Complete task management with persistence

### Custom Hooks
- **useFetch**: Custom hook for API calls with loading states and error handling
- **useLocalStorage**: Hook for localStorage integration with automatic sync

### State Management
- **useState**: For component-level state management
- **useEffect**: For side effects and lifecycle management
- **useContext**: For theme management (dark/light mode)
- **Local Storage**: Persistent storage for tasks and theme preferences

### API Integration
- **JSONPlaceholder API**: Fetches posts and users data
- **Search Functionality**: Real-time search through posts
- **Pagination**: Navigate through posts with page controls
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: Smooth loading indicators

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Dark/Light Theme**: Complete theme switching with persistence
- **Tailwind CSS**: Modern utility-first styling
- **Smooth Animations**: Transitions and hover effects

## Tech Stack

- React 18 - Component-based UI library
- Vite - Fast build tool and development server
- Tailwind CSS - Utility-first CSS framework
- PropTypes - Runtime type checking for React props
- JSONPlaceholder API - Fake REST API for testing

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PostList.jsx
│   └── TaskManager.jsx
├── pages/            # Page components
├── hooks/            # Custom React hooks
│   ├── useFetch.js
│   └── useLocalStorage.js
├── context/          # React Context providers
│   └── ThemeContext.jsx
├── api/              # API integration functions
│   └── jsonPlaceholder.js
├── utils/            # Utility functions
├── App.jsx           # Main application component
├── main.jsx          # Application entry point
└── index.css         # Global styles with Tailwind
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-mose868.git
cd week-3-react-js-assignment-mose868
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Assignment Requirements Completed

✅ Use existing Vite + React setup
✅ Ensure Tailwind CSS is configured and working
✅ Follow proper folder structure under src/
✅ Implement at least 3 reusable UI components
✅ Create at least 1 custom hook that fetches data
✅ State management with React hooks (useState, useEffect, useContext)
✅ External API integration and display fetched data
✅ Tailwind CSS for styling (responsive design)
✅ Updated README.md

## Features Demo

### Task Management
- Add new tasks with enter key or button click
- Mark tasks as complete/incomplete
- Delete tasks
- Filter tasks (All, Active, Completed)
- Local storage persistence
- Task counter and statistics

### API Data Display
- Fetch posts from JSONPlaceholder API
- Display post details with author information
- Real-time search functionality
- Pagination with page controls
- Loading spinners and error states
- Responsive grid layout

### Theme Management
- Dark/Light mode toggle
- Persistent theme preference
- System theme detection
- Smooth transitions between themes

Built with React, Vite, and Tailwind CSS 