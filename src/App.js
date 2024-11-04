// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Bootcamps from './pages/Bootcamps';
import Enroll from './pages/Enroll';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/bootcamps"
                        element={<ProtectedRoute><Bootcamps /></ProtectedRoute>}
                    />
                    <Route
                        path="/enroll"
                        element={<ProtectedRoute><Enroll /></ProtectedRoute>}
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
