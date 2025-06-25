import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Home, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  Settings,
  Bell,
  Shield,
  FileText,
  MessageCircle,
  Eye,
  Ban,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { mockProperties, mockAnalyticsData } from '../../data/mockData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '2,847', icon: Users, color: 'text-blue-500', change: '+12% this month' },
    { label: 'Active Properties', value: '1,234', icon: Home, color: 'text-green-500', change: '+8% this month' },
    { label: 'Platform Revenue', value: '$125,400', icon: DollarSign, color: 'text-purple-500', change: '+15% this month' },
    { label: 'Pending Reviews', value: '23', icon: AlertTriangle, color: 'text-orange-500', change: '5 urgent' }
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      type: 'Seeker',
      joinDate: '2024-01-10',
      status: 'active',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      type: 'Lister',
      joinDate: '2024-01-09',
      status: 'active',
      verified: true
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike@example.com',
      type: 'Seeker',
      joinDate: '2024-01-08',
      status: 'pending',
      verified: false
    }
  ];

  const pendingProperties = [
    {
      id: 1,
      title: 'Modern 2BR Apartment in Surry Hills',
      lister: 'Sarah Johnson',
      location: 'Surry Hills, NSW',
      rent: 2800,
      status: 'pending_review',
      submittedDate: '2024-01-10'
    },
    {
      id: 2,
      title: 'Luxury 3BR House in Bondi',
      lister: 'Emma Davis',
      location: 'Bondi, NSW',
      rent: 4200,
      status: 'pending_review',
      submittedDate: '2024-01-09'
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'security',
      message: 'Multiple failed login attempts detected',
      severity: 'high',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'system',
      message: 'Database backup completed successfully',
      severity: 'info',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'user',
      message: 'New user verification required',
      severity: 'medium',
      time: '6 hours ago'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'properties', label: 'Properties', icon: Home },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'pending_review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
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
              <h1 className="text-4xl font-bold text-navy-800">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Platform management and analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
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
              {/* System Alerts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-6">System Alerts</h3>
                <div className="space-y-4">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getSeverityColor(alert.severity)}`}>
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-navy-800">{alert.message}</p>
                          <p className="text-sm text-gray-500">{alert.time}</p>
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium">
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Users */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-6">Recent Users</h3>
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-navy-800">{user.name}</h4>
                            {user.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                          </div>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                              {user.status}
                            </span>
                            <span className="text-xs text-gray-500">{user.type}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 hover:text-primary-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600">
                            <Ban className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending Properties */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-6">Pending Property Reviews</h3>
                  <div className="space-y-4">
                    {pendingProperties.map((property) => (
                      <div key={property.id} className="border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-navy-800 mb-2">{property.title}</h4>
                            <p className="text-sm text-gray-600 mb-1">by {property.lister}</p>
                            <p className="text-sm text-gray-500">{property.location}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-lg font-bold text-primary-600">
                                ${property.rent.toLocaleString()}/month
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                                {property.status.replace('_', ' ')}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform Analytics */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-6">Platform Growth</h3>
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

          {activeTab === 'users' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-800">User Management</h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Export Users
                  </button>
                  <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                    Add User
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-navy-800">{user.name}</h3>
                          {user.verified && <CheckCircle className="w-5 h-5 text-green-500" />}
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">{user.email}</p>
                        <p className="text-sm text-gray-500">
                          {user.type} • Joined {user.joinDate}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                          View Profile
                        </button>
                        <button className="px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-50">
                          Suspend
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'properties' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy-800">Property Management</h2>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Export Properties
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {pendingProperties.map((property) => (
                  <div key={property.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-navy-800">{property.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(property.status)}`}>
                            {property.status.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">Listed by {property.lister}</p>
                        <p className="text-sm text-gray-500">
                          {property.location} • ${property.rent.toLocaleString()}/month • Submitted {property.submittedDate}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                          Approve
                        </button>
                        <button className="px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-50">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Reports & Analytics</h2>
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Reports Coming Soon</h3>
                <p className="text-gray-500">Detailed analytics and reports will be available here</p>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Security & Monitoring</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <h3 className="font-semibold text-red-800">Security Alerts</h3>
                    </div>
                    <p className="text-2xl font-bold text-red-600 mb-2">3</p>
                    <p className="text-sm text-red-700">Active security issues</p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-yellow-600" />
                      <h3 className="font-semibold text-yellow-800">Failed Logins</h3>
                    </div>
                    <p className="text-2xl font-bold text-yellow-600 mb-2">127</p>
                    <p className="text-sm text-yellow-700">In the last 24 hours</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h3 className="font-semibold text-green-800">System Status</h3>
                    </div>
                    <p className="text-2xl font-bold text-green-600 mb-2">99.9%</p>
                    <p className="text-sm text-green-700">Uptime this month</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-navy-800 mb-4">Recent Security Events</h3>
                  <div className="space-y-3">
                    {systemAlerts.filter(alert => alert.type === 'security').map((alert) => (
                      <div key={alert.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${getSeverityColor(alert.severity)}`}>
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-medium text-navy-800">{alert.message}</p>
                            <p className="text-sm text-gray-500">{alert.time}</p>
                          </div>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Investigate
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Platform Settings</h2>
              <div className="text-center py-12">
                <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Settings Panel</h3>
                <p className="text-gray-500">Platform configuration options will be available here</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;