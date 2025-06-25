import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const PropertyFilters = ({ filters, onFiltersChange, onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const clearFilters = () => {
    onFiltersChange({
      location: '',
      minRent: '',
      maxRent: '',
      bedrooms: '',
      bathrooms: '',
      furnished: '',
      petFriendly: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by location, property type, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Search
          </motion.button>
        </div>
      </form>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 font-medium"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>{isExpanded ? 'Hide Filters' : 'Show Filters'}</span>
        </motion.button>

        <button
          onClick={clearFilters}
          className="flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm font-medium"
        >
          <X className="w-4 h-4" />
          <span>Clear All</span>
        </button>
      </div>

      {/* Expanded Filters */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any Location</option>
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Perth">Perth</option>
              <option value="Adelaide">Adelaide</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min Rent (weekly)
            </label>
            <input
              type="number"
              placeholder="$0"
              value={filters.minRent}
              onChange={(e) => handleFilterChange('minRent', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Rent (weekly)
            </label>
            <input
              type="number"
              placeholder="$10,000"
              value={filters.maxRent}
              onChange={(e) => handleFilterChange('maxRent', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bathrooms
            </label>
            <select
              value={filters.bathrooms}
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>

          {/* Furnished */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Furnished
            </label>
            <select
              value={filters.furnished}
              onChange={(e) => handleFilterChange('furnished', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="true">Furnished</option>
              <option value="false">Unfurnished</option>
            </select>
          </div>

          {/* Pet Friendly */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pet Friendly
            </label>
            <select
              value={filters.petFriendly}
              onChange={(e) => handleFilterChange('petFriendly', e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Any</option>
              <option value="true">Pet Friendly</option>
              <option value="false">No Pets</option>
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyFilters;