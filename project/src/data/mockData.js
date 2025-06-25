// Mock data for development and testing

export const mockProperties = [
  {
    id: 1,
    title: "Modern 2BR Apartment in Surry Hills",
    location: "Surry Hills, NSW",
    rent: 2800,
    bedrooms: 2,
    bathrooms: 2,
    furnished: true,
    petFriendly: false,
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Beautiful modern apartment with city views, walk to Central Station",
    features: ["Gym", "Pool", "Parking", "Balcony"],
    lister: {
      id: 1,
      name: "Sarah Johnson",
      phone: "+61 400 123 456",
      email: "sarah@example.com"
    },
    available: "2024-02-01",
    status: "available"
  },
  {
    id: 2,
    title: "Cozy 1BR Studio in Melbourne CBD",
    location: "Melbourne CBD, VIC",
    rent: 2200,
    bedrooms: 1,
    bathrooms: 1,
    furnished: false,
    petFriendly: true,
    images: [
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Perfect for young professionals, close to transport and amenities",
    features: ["Concierge", "Rooftop Terrace", "Storage"],
    lister: {
      id: 2,
      name: "Michael Chen",
      phone: "+61 400 789 123",
      email: "michael@example.com"
    },
    available: "2024-01-15",
    status: "available"
  },
  {
    id: 3,
    title: "Spacious 3BR House in Bondi",
    location: "Bondi, NSW",
    rent: 4200,
    bedrooms: 3,
    bathrooms: 2,
    furnished: true,
    petFriendly: true,
    images: [
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Minutes from Bondi Beach, perfect for families or sharing",
    features: ["Garden", "Garage", "BBQ Area", "Ocean Views"],
    lister: {
      id: 3,
      name: "Emma Wilson",
      phone: "+61 400 456 789",
      email: "emma@example.com"
    },
    available: "2024-03-01",
    status: "available"
  }
];

export const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  role: "seeker", // lister, seeker, admin
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
};

export const mockChats = [
  {
    id: 1,
    propertyId: 1,
    participants: ["John Doe", "Sarah Johnson"],
    lastMessage: "Is the property still available?",
    lastActivity: "2024-01-10T14:30:00Z",
    unread: 2
  },
  {
    id: 2,
    propertyId: 3,
    participants: ["John Doe", "Emma Wilson"],
    lastMessage: "Thank you for your interest!",
    lastActivity: "2024-01-09T16:45:00Z",
    unread: 0
  }
];

export const mockAnalyticsData = {
  revenue: [
    { month: 'Jan', amount: 25000 },
    { month: 'Feb', amount: 28000 },
    { month: 'Mar', amount: 32000 },
    { month: 'Apr', amount: 29000 },
    { month: 'May', amount: 35000 },
    { month: 'Jun', amount: 38000 }
  ],
  occupancy: 85,
  totalProperties: 12,
  activeRentals: 8
};