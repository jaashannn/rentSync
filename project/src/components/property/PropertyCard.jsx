import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Bed, Bath, PawPrint, Sofa } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, onFavorite, isFavorited = false }) => {
  const {
    id,
    title,
    location,
    rent,
    bedrooms,
    bathrooms,
    furnished,
    petFriendly,
    images,
    features
  } = property;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={images[0]}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300"
        />
        
        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onFavorite?.(id)}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors ${
            isFavorited 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
        </motion.button>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
            ${rent.toLocaleString()}/month
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <Link to={`/property/${id}`}>
            <h3 className="text-xl font-bold text-navy-800 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-4 text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Bed className="w-4 h-4" />
              <span className="text-sm font-medium">{bedrooms} bed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="w-4 h-4" />
              <span className="text-sm font-medium">{bathrooms} bath</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {furnished && (
              <div className="flex items-center space-x-1 text-accent-600">
                <Sofa className="w-4 h-4" />
                <span className="text-xs font-medium">Furnished</span>
              </div>
            )}
            {petFriendly && (
              <div className="flex items-center space-x-1 text-green-600">
                <PawPrint className="w-4 h-4" />
                <span className="text-xs font-medium">Pet OK</span>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                >
                  {feature}
                </span>
              ))}
              {features.length > 3 && (
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                  +{features.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to={`/property/${id}`}
            className="block w-full text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;