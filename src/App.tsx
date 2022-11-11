import { useState } from 'react';
import reactLogo from '@assets/react.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from '@pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
