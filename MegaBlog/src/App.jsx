import './App.css';
import React, { useEffect, useState } from 'react';  // Import useState
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);  // Use useState to initialize loading state
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  // Conditional rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
