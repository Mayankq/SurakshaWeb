// App.jsx
import React from 'react';
import AppRouter from './AppRouter'; // Assuming you have an AppRouter component
import Navbar from './components/Navbar';
import "./App.css"; // Add your main app styles here

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
