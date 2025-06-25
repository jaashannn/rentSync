import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Loader = ({ fullScreen = false }) => {
  const containerClass = fullScreen 
    ? "fixed inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 flex items-center justify-center z-50"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClass}>
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-20 h-20 bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl"
          >
            <Building2 className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-3xl font-bold mb-4 ${fullScreen ? 'text-white' : 'text-navy-800'}`}
        >
          RentSync
        </motion.h2>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center space-x-1"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className={`w-3 h-3 rounded-full ${
                fullScreen ? 'bg-accent-400' : 'bg-primary-500'
              }`}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`mt-4 text-sm ${fullScreen ? 'text-gray-300' : 'text-gray-600'}`}
        >
          Loading your perfect rental experience...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;