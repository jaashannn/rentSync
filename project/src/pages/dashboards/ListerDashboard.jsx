import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Home, 
  MessageCircle, 
  Calendar, 
  FileText, 
  DollarSign,
  Users,
  TrendingUp,
  Settings,
  Bell,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { mockProperties, mockAnalyticsData } from '../../data/mockData';

const ListerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [properties] = useState(mockProperties);

  const stats = [
    { label: 'Total Properties', value: '12', icon: Home, color: 'text-blue-500', change: '+2 this month' },
    { label: 'Active Rentals', value: '8', icon: Users, color: 'text-green-500', change: '67% occupancy' },
    { label: 'Monthly Revenue', value: '$38,400', icon: DollarSign, color: 'text-purple-500', change: '+12% vs last month' },
    { label: 'Pending Applications', value: '5', icon: FileText, color: 'text-orange-500', change: '3 new today' }
  ];

  const recentApplications = [
    {
      id: 1,
      applicant: 'John Smith',
      property: 'Modern 2BR Apartment in Surry Hills',
      date: '2024-01-10',
      status: 'pending',
      score: 85
    },
    {
      id: 2,
      applicant: 'Emma Davis',
      property: 'Cozy 1BR Studio in Melbourne CBD',
      date: '2024-01-09',
      status: 'approved',
      score: 92
    },
    {
      id: 3,
      applicant: 'Michael Johnson',
      property: 'Spacious 3BR House in Bondi',
      date: '2024-01-08',
      status: 'reviewing',
      score: 78
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'properties', label: 'Properties', icon: Home },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'payments', label: 'Payments', icon: DollarSign }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'reviewing': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              <h1 className="text-4xl font-bold text-navy-800">Property Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your rental properties</p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Add Property</span>
              </motion.button>
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
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gray-50`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-navy-800">{stat.value}</p>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{stat.change}</p>
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
                  <Plus className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Add New Property</h3>
                  <p className="text-primary-100">List a new rental property</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <FileText className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Review Applications</h3>
                  <p className="text-accent-100">5 pending applications</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <TrendingUp className="w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">View Analytics</h3>
                  <p className="text-green-100">Track your performance</p>
                </motion.button>
              </div>

              {/* Recent Applications */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-6">Recent Applications</h3>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-navy-800">{application.applicant}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                              {application.status}
                            </span>
                            <span className="text-sm text-gray-500">Score: {application.score}/100</span>
                          </div>
                          <p className="text-gray-600 text-sm">{application.property}</p>
                          <p className="text-gray-500 text-xs">Applied on {application.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50">
                            View
                          </button>
                          {application.status === 'pending' && (
                            <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                              Review
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-6">Monthly Revenue</h3>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {mockAnalyticsData.revenue.map((month, index) => (
                    <div key={month.month} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg"
                        style={{ height: `${(month.amount / 40000) * 200}px` }}
                      ></div>
                      <span className="text-sm text-gray-600 mt-2">{month.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'properties' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-800">My Properties</h2>
                <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Property</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <div key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-navy-800 mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4">{property.location}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary-600">
                          ${property.rent.toLocaleString()}/month
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          property.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {property.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center space-x-1 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                        <button className="flex-1 flex items-center justify-center space-x-1 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50">
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                        <button className="flex items-center justify-center p-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
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
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-navy-800">{application.applicant}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">{application.property}</p>
                        <p className="text-sm text-gray-500">Applied on {application.date} • Score: {application.score}/100</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                          View Profile
                        </button>
                        {application.status === 'pending' && (
                          <>
                            <button className="px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-50">
                              Reject
                            </button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                              Approve
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
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
                <p className="text-gray-500">Messages from potential renters will appear here</p>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">Occupancy Rate</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{mockAnalyticsData.occupancy}%</div>
                  <p className="text-sm text-gray-600">8 of 12 properties occupied</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">Average Rent</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-2">$3,200</div>
                  <p className="text-sm text-gray-600">Per property per month</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">Total Revenue</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">$38,400</div>
                  <p className="text-sm text-gray-600">This month</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-6">Revenue Trend</h3>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {mockAnalyticsData.revenue.map((month, index) => (
                    <div key={month.month} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg"
                        style={{ height: `${(month.amount / 40000) * 200}px` }}
                      ></div>
                      <span className="text-sm text-gray-600 mt-2">{month.month}</span>
                      <span className="text-xs text-gray-500">${(month.amount / 1000).toFixed(0)}k</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Payment History</h2>
              <div className="text-center py-12">
                <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No payment history</h3>
                <p className="text-gray-500">Rental payments from tenants will appear here</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ListerDashboard;