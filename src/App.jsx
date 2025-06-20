import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';
import Card from './components/Card';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar />
        
        <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section id="home" className="mb-12">
            <Card variant="primary" className="text-center">
              <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Welcome to PLP Task Manager
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                A modern React application demonstrating component architecture, 
                hooks, state management, and API integration with Tailwind CSS styling.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                  React 18
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                  Vite
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
                  Custom Hooks
                </span>
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full">
                  API Integration
                </span>
              </div>
            </Card>
          </section>

          {/* Task Manager Section */}
          <section id="tasks" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Task Management</h2>
            <TaskManager />
          </section>

          {/* API Data Section */}
          <section id="api-data" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">API Data Integration</h2>
            <Card>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                This section demonstrates fetching and displaying data from the JSONPlaceholder API
                with search functionality, pagination, and loading states.
              </p>
              <PostList />
            </Card>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Features Implemented</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card title="Reusable Components" variant="success" hoverable>
                <ul className="text-sm space-y-2">
                  <li>✅ Button with variants</li>
                  <li>✅ Card component</li>
                  <li>✅ Navbar with theme toggle</li>
                  <li>✅ Footer with links</li>
                  <li>✅ TaskManager</li>
                </ul>
              </Card>
              
              <Card title="Custom Hooks" variant="primary" hoverable>
                <ul className="text-sm space-y-2">
                  <li>✅ useFetch for API calls</li>
                  <li>✅ useLocalStorage for persistence</li>
                  <li>✅ Error handling</li>
                  <li>✅ Loading states</li>
                </ul>
              </Card>
              
              <Card title="State Management" variant="warning" hoverable>
                <ul className="text-sm space-y-2">
                  <li>✅ useState hooks</li>
                  <li>✅ useEffect hooks</li>
                  <li>✅ useContext for theme</li>
                  <li>✅ Local storage persistence</li>
                </ul>
              </Card>
              
              <Card title="API Integration" variant="danger" hoverable>
                <ul className="text-sm space-y-2">
                  <li>✅ JSONPlaceholder API</li>
                  <li>✅ Search functionality</li>
                  <li>✅ Pagination</li>
                  <li>✅ Error handling</li>
                </ul>
              </Card>
              
              <Card title="Responsive Design" variant="default" hoverable>
                <ul className="text-sm space-y-2">
                  <li>✅ Mobile-first approach</li>
                  <li>✅ Dark/Light theme</li>
                  <li>✅ Tailwind CSS</li>
                  <li>✅ Smooth transitions</li>
                </ul>
              </Card>
              
              <Card title="Best Practices" variant="primary" hoverable>
                <ul className="text-sm space-y-2">
                  <li>✅ PropTypes validation</li>
                  <li>✅ Component composition</li>
                  <li>✅ Clean folder structure</li>
                  <li>✅ Error boundaries</li>
                </ul>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 