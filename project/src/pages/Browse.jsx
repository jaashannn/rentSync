import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Grid, List as ListIcon } from 'lucide-react';
import PropertyCard from '../components/property/PropertyCard';
import PropertyFilters from '../components/filters/PropertyFilters';
import Loader from '../components/common/Loader';
import { mockProperties } from '../data/mockData';

const Browse = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState(new Set());
  const [filters, setFilters] = useState({
    location: '',
    minRent: '',
    maxRent: '',
    bedrooms: '',
    bathrooms: '',
    furnished: '',
    petFriendly: ''
  });

  useEffect(() => {
    // Simulate API call
    const loadProperties = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProperties(mockProperties);
      setLoading(false);
    };

    loadProperties();
  }, []);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    // Apply filters logic here
    filterProperties(newFilters);
  };

  const handleSearch = (searchTerm) => {
    // Search logic here
    console.log('Searching for:', searchTerm);
  };

  const filterProperties = (currentFilters) => {
    let filtered = [...mockProperties];

    if (currentFilters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(currentFilters.location.toLowerCase())
      );
    }

    if (currentFilters.minRent) {
      filtered = filtered.filter(property => property.rent >= parseInt(currentFilters.minRent));
    }

    if (currentFilters.maxRent) {
      filtered = filtered.filter(property => property.rent <= parseInt(currentFilters.maxRent));
    }

    if (currentFilters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(currentFilters.bedrooms));
    }

    if (currentFilters.bathrooms) {
      filtered = filtered.filter(property => property.bathrooms >= parseInt(currentFilters.bathrooms));
    }

    if (currentFilters.furnished !== '') {
      filtered = filtered.filter(property => property.furnished === (currentFilters.furnished === 'true'));
    }

    if (currentFilters.petFriendly !== '') {
      filtered = filtered.filter(property => property.petFriendly === (currentFilters.petFriendly === 'true'));
    }

    setProperties(filtered);
  };

  const handleFavorite = (propertyId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavorites(newFavorites);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-navy-800 mb-4">
            Browse Properties
          </h1>
          <p className="text-gray-600 text-lg">
            Discover your perfect rental from our curated collection of premium properties.
          </p>
        </motion.div>

        {/* Filters */}
        <PropertyFilters
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onSearch={handleSearch}
        />

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-gray-600">
              <span className="font-semibold text-navy-800">{properties.length}</span> properties found
            </p>
          </motion.div>

          {/* View Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm"
          >
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Properties Grid/List */}
        {properties.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No properties found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters to see more results.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard
                  property={property}
                  onFavorite={handleFavorite}
                  isFavorited={favorites.has(property.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Browse;