import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';

// Pages
import Home from './pages/Home';
import Browse from './pages/Browse';
import PropertyDetails from './pages/PropertyDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Dashboard Pages
import SeekerDashboard from './pages/dashboards/SeekerDashboard';
import ListerDashboard from './pages/dashboards/ListerDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'admin', 'lister', 'seeker'

  useEffect(() => {
    // Simulate initial app loading
    const initializeApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    initializeApp();
  }, []);

  // Show premium loading screen on initial load
  if (isLoading) {
    return <Loader fullScreen={true} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              borderRadius: '12px',
              fontSize: '14px',
              padding: '16px',
            },
            success: {
              style: {
                background: '#10B981',
              },
            },
            error: {
              style: {
                background: '#EF4444',
              },
            },
          }}
        />

        {/* Header */}
        <Header isAuthenticated={isAuthenticated} userRole={userRole} />

        {/* Main Content */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Dashboard Routes */}
              <Route path="/seeker" element={<SeekerDashboard />} />
              <Route path="/lister" element={<ListerDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />

              {/* Additional Routes */}
              <Route path="/profile" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Profile Settings</h1>
                  <p className="text-gray-600 mt-4">Profile management coming soon...</p>
                </motion.div>
              } />

              <Route path="/saved" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Saved Properties</h1>
                  <p className="text-gray-600 mt-4">Your saved properties will appear here...</p>
                </motion.div>
              } />

              <Route path="/messages" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Messages</h1>
                  <p className="text-gray-600 mt-4">Your conversations will appear here...</p>
                </motion.div>
              } />

              <Route path="/help" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Help Center</h1>
                  <p className="text-gray-600 mt-4">Help documentation coming soon...</p>
                </motion.div>
              } />

              <Route path="/terms" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Terms of Service</h1>
                  <p className="text-gray-600 mt-4">Terms and conditions coming soon...</p>
                </motion.div>
              } />

              <Route path="/privacy" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Privacy Policy</h1>
                  <p className="text-gray-600 mt-4">Privacy policy coming soon...</p>
                </motion.div>
              } />

              <Route path="/safety" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Safety Guidelines</h1>
                  <p className="text-gray-600 mt-4">Safety information coming soon...</p>
                </motion.div>
              } />

              <Route path="/forgot-password" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 text-center"
                >
                  <h1 className="text-2xl font-bold text-navy-800">Reset Password</h1>
                  <p className="text-gray-600 mt-4">Password reset functionality coming soon...</p>
                </motion.div>
              } />

              {/* 404 Page */}
              <Route path="*" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center min-h-[60vh]"
                >
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-navy-800 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Go Home
                    </motion.a>
                  </div>
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;