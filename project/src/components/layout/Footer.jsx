import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">RentSync</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Australia's premier property rental platform connecting quality renters with trusted property owners across the nation.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Melbourne, Brisbane, Perth</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1800 RENT SYNC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@rentsync.com.au</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/browse" className="hover:text-accent-400 transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-accent-400 transition-colors">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/help" className="hover:text-accent-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-accent-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-accent-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-accent-400 transition-colors">
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RentSync. All rights reserved. ABN: 12 345 678 901</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;