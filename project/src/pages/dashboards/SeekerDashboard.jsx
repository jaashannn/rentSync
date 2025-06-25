import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Calendar, 
  FileText, 
  CreditCard,
  Search,
  Bell,
  Settings,
  MapPin,
  Clock,
  Eye
} from 'lucide-react';
import PropertyCard from '../../components/property/PropertyCard';
import { mockProperties } from '../../data/mockData';

const SeekerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [savedProperties] = useState(mockProperties.slice(0, 2));
  const [recentSearches] = useState([
    { query: '2BR apartment Sydney', date: '2024-01-10', results: 45 },
    { query: 'Pet friendly Melbourne', date: '2024-01-09', results: 23 },
    { query: 'Furnished Brisbane', date: '2024-01-08', results: 67 }
  ]);

  const stats = [
    { label: 'Saved Properties', value: '12', icon: Heart, color: 'text-red-500' },
    { label: 'Active Chats', value: '3', icon: MessageCircle, color: 'text-blue-500' },
    { label: 'Scheduled Visits', value: '2', icon: Calendar, color: 'text-green-500' },
    { label: 'Applications', value: '1', icon: FileText, color: 'text-purple-500' }
  ];

  const upcomingVisits = [
    {
      id: 1,
      property: 'Modern 2BR Apartment in Surry Hills',
      date: '2024-01-15',
      time: '2:00 PM',
      address: 'Surry Hills, NSW',
      lister: 'Sarah Johnson'
    },
    {
      id: 2,
      property: 'Spacious 3BR House in Bondi',
      date: '2024-01-17',
      time: '10:00 AM',
      address: 'Bondi, NSW',
      lister: 'Emma Wilson'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      from: 'Sarah Johnson',
      property: 'Modern 2BR Apartment',
      message: 'The property is still available. Would you like to schedule a visit?',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      from: 'Michael Chen',
      property: 'Cozy 1BR Studio',
      message: 'Thank you for your interest. The lease starts from February 1st.',
      time: '1 day ago',
      unread: false
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Search },
    { id: 'saved', label: 'Saved Properties', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'visits', label: 'Visits', icon: Calendar },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'payments', label: 'Payments', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-navy-800">Welcome back, John!</h1>
              <p className="text-gray-600 mt-2">Find your perfect rental home</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-navy-800 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gray-50`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-2 mb-8"
        >
          <div className="flex space-x-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {activeTab === 'overview' && (
            <>
              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Search className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Search Properties</h3>
                  <p className="text-primary-100">Find your perfect rental</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Heart className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Saved Properties</h3>
                  <p className="text-accent-100">View your favorites</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Messages</h3>
                  <p className="text-green-100">Chat with listers</p>
                </motion.button>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upcoming Visits */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-6">Upcoming Visits</h3>
                  <div className="space-y-4">
                    {upcomingVisits.map((visit) => (
                      <div key={visit.id} className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-navy-800 mb-2">{visit.property}</h4>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{visit.date} at {visit.time}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{visit.address}</span>
                              </div>
                            </div>
                          </div>
                          <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Messages */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-6">Recent Messages</h3>
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div key={message.id} className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-navy-800">{message.from}</h4>
                            {message.unread && (
                              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                            )}
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{message.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{message.property}</p>
                        <p className="text-sm text-gray-700">{message.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Searches */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-6">Recent Searches</h3>
                <div className="space-y-3">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-navy-800">{search.query}</p>
                          <p className="text-sm text-gray-600">{search.results} results found</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{search.date}</span>
                        <button className="text-primary-600 hover:text-primary-700">
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'saved' && (
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Saved Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {savedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} isFavorited={true} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Messages</h2>
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No messages yet</h3>
                <p className="text-gray-500">Start a conversation with property owners</p>
              </div>
            </div>
          )}

          {activeTab === 'visits' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Property Visits</h2>
              <div className="space-y-4">
                {upcomingVisits.map((visit) => (
                  <div key={visit.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-navy-800 mb-2">{visit.property}</h3>
                        <div className="space-y-1 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{visit.date} at {visit.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{visit.address}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Rental Applications</h2>
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No applications submitted</h3>
                <p className="text-gray-500">Apply for properties you're interested in</p>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Payment History</h2>
              <div className="text-center py-12">
                <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No payment history</h3>
                <p className="text-gray-500">Your rental payments will appear here</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SeekerDashboard;