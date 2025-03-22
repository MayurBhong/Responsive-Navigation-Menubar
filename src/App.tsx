import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome</h1>
          <p className="text-gray-600">
            Start exploring our website using the navigation bar above.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;