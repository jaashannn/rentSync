import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Bed, 
  Bath, 
  PawPrint, 
  Sofa,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Camera,
  CheckCircle,
  Wifi,
  Car,
  Dumbbell,
  Waves
} from 'lucide-react';
import { mockProperties } from '../data/mockData';
import toast from 'react-hot-toast';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const foundProperty = mockProperties.find(p => p.id === parseInt(id));
    setProperty(foundProperty);
  }, [id]);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast.success(isFavorited ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handleContact = () => {
    setShowContactModal(true);
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Property Not Found</h2>
          <Link to="/browse" className="text-primary-600 hover:text-primary-700">
            ← Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  const amenities = [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Car, label: 'Parking Space' },
    { icon: Dumbbell, label: 'Gym Access' },
    { icon: Waves, label: 'Swimming Pool' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/browse"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Browse
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
            >
              <div className="relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={handleFavorite}
                    className={`p-3 rounded-full backdrop-blur-sm transition-colors ${
                      isFavorited 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-full bg-white/80 text-gray-600 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 text-white px-3 py-1 rounded-full">
                  <Camera className="w-4 h-4" />
                  <span className="text-sm">{property.images.length} photos</span>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              {property.images.length > 1 && (
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        currentImageIndex === index ? 'border-primary-500' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Property Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-navy-800 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    ${property.rent.toLocaleString()}
                  </div>
                  <div className="text-gray-500">per month</div>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bed className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-semibold text-navy-800">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Bath className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="font-semibold text-navy-800">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Sofa className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                  <div className="font-semibold text-navy-800">
                    {property.furnished ? 'Yes' : 'No'}
                  </div>
                  <div className="text-sm text-gray-600">Furnished</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <PawPrint className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-navy-800">
                    {property.petFriendly ? 'Yes' : 'No'}
                  </div>
                  <div className="text-sm text-gray-600">Pet Friendly</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features & Amenities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <Icon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Property Features */}
              {property.features && (
                <div>
                  <h3 className="text-xl font-bold text-navy-800 mb-4">Property Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span
                        key={index}
                        className="flex items-center space-x-1 px-3 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-6 sticky top-8"
            >
              <div className="text-center mb-6">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt={property.lister.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-navy-800">{property.lister.name}</h3>
                <p className="text-gray-600">Property Owner</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>{property.lister.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>{property.lister.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Available from {property.available}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleContact}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Contact Owner
                </button>
                <button className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl">
                  Schedule Visit
                </button>
                <button className="w-full border-2 border-primary-500 text-primary-600 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Send Message
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-navy-800 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium">Apartment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lease Term</span>
                  <span className="font-medium">12 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bond Required</span>
                  <span className="font-medium">${(property.rent * 4).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium text-green-600 capitalize">{property.status}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-navy-800 mb-4">Contact Property Owner</h3>
            <p className="text-gray-600 mb-6">
              Please sign in to view contact details and message the property owner.
            </p>
            <div className="flex space-x-3">
              <Link
                to="/login"
                className="flex-1 bg-primary-500 text-white py-3 rounded-xl font-semibold text-center hover:bg-primary-600 transition-colors"
              >
                Sign In
              </Link>
              <button
                onClick={() => setShowContactModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;