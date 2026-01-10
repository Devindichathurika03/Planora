import { useState } from "react";
import { Star, MapPin } from "lucide-react";


const mockVendors = [
  // Venues
  {
    id: "1",
    name: "Elegant Weddings Hall",
    category: "venue",
    rating: 4.8,
    reviewCount: 25,
    description: "Spacious wedding halls with modern amenities and premium decor. Ideal for large weddings and receptions.",
    location: "Colombo",
    price: 1500000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/736x/1f/fa/a3/1ffaa3639c6f69a9b63204d90884eed3.jpg",
    verified: true,
  },
  {
    id: "2",
    name: "Grand Palace Banquet",
    category: "venue",
    rating: 4.6,
    reviewCount: 18,
    description: "Luxury banquet halls with indoor and outdoor seating. Perfect for corporate events and family gatherings.",
    location: "Kandy",
    price: 1200000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/d4/9e/ae/d49eaec1fd128542eb69857c51a214d0.jpg",
    verified: true,
  },
  {
    id: "3",
    name: "Riverside Event Center",
    category: "venue",
    rating: 4.7,
    reviewCount: 12,
    description: "Beautiful riverside venue with gardens and elegant banquet halls, ideal for intimate weddings and parties.",
    location: "Galle",
    price: 950000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/21/d2/5c/21d25c88970058ecde8ef906bccaa497.jpg",
    verified: false,
  },

  // Caterers
  {
    id: "4",
    name: "Delicious Catering",
    category: "caterer",
    rating: 4.5,
    reviewCount: 30,
    description: "Catering with a variety of cuisines, live stations, and custom menus for weddings, parties, and corporate events.",
    location: "Colombo",
    price: 500000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/736x/06/54/9b/06549b8109d1e550766bf750a4c81410.jpg",
    verified: false,
  },
  {
    id: "5",
    name: "Royal Feast Caterers",
    category: "caterer",
    rating: 4.7,
    reviewCount: 20,
    description: "Premium catering services with themed menus, dessert stations, and professional staff for events.",
    location: "Galle",
    price: 700000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/736x/10/0e/e8/100ee890b554f2e1d0557aa790980658.jpg",
    verified: true,
  },
  {
    id: "6",
    name: "Spice & Delight Catering",
    category: "caterer",
    rating: 4.6,
    reviewCount: 15,
    description: "Traditional Sri Lankan cuisines, fusion menus, and live chefs for unforgettable experiences.",
    location: "Jaffna",
    price: 450000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/736x/be/39/93/be399331cd6bcbde1a0ffc4972a604d3.jpg",
    verified: true,
  },

  // Decorators
  {
    id: "7",
    name: "Dream Decorators",
    category: "decorator",
    rating: 4.9,
    reviewCount: 40,
    description: "Creative and luxurious event decoration with floral arrangements, lighting, and stage setups.",
    location: "Colombo",
    price: 700000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/736x/f9/9c/d5/f99cd54d9d25d1260da04824f14a8957.jpg",
    verified: true,
  },
  {
    id: "8",
    name: "Elegant Event Decor",
    category: "decorator",
    rating: 4.6,
    reviewCount: 22,
    description: "Modern and themed decorations for weddings, corporate events, and birthdays.",
    location: "Kandy",
    price: 600000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/736x/37/3a/70/373a707b90c3e276ce63510cbc539431.jpg",
    verified: true,
  },
  {
    id: "9",
    name: "Festive Creations",
    category: "decorator",
    rating: 4.5,
    reviewCount: 18,
    description: "Affordable yet stylish decor solutions for small to medium events with attention to detail.",
    location: "Galle",
    price: 400000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/e3/a0/50/e3a050c116713252e4146acc66fa098f.jpg",
    verified: false,
  },

  // Photographers
  {
    id: "10",
    name: "Memory Lens Photography",
    category: "photographer",
    rating: 4.8,
    reviewCount: 35,
    description: "Professional photography capturing every precious moment in style.",
    location: "Colombo",
    price: 350000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/89/59/36/895936ee413b6d0ec3c292cc8710d7ab.jpg",
    verified: true,
  },
  {
    id: "11",
    name: "Golden Frame Studios",
    category: "photographer",
    rating: 4.7,
    reviewCount: 28,
    description: "High-quality photography & videography for weddings, birthdays, and corporate events.",
    location: "Galle",
    price: 400000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/0d/e3/50/0de350fd91895b8a880845ad26822bcd.jpg",
    verified: true,
  },

  // DJs
  {
    id: "12",
    name: "Beat Masters DJ",
    category: "dj",
    rating: 4.5,
    reviewCount: 15,
    description: "Professional DJ services with modern sound systems and dynamic lighting for any event.",
    location: "Colombo",
    price: 250000,
    priceUnit: "LKR",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200",
    verified: true,
  },

  // Entertainment
  {
    id: "13",
    name: "Event Entertainment Co.",
    category: "entertainment",
    rating: 4.6,
    reviewCount: 18,
    description: "Live bands, dancers, and interactive shows to make your event unforgettable.",
    location: "Kandy",
    price: 400000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/4d/f9/4a/4df94a2dc4582272ce78636083ad074d.jpg",
    verified: true,
  },

  // Florists
  {
    id: "14",
    name: "Blooming Florists",
    category: "florist",
    rating: 4.9,
    reviewCount: 20,
    description: "Fresh floral arrangements and bouquets tailored to your event theme and color palette.",
    location: "Colombo",
    price: 150000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/39/52/c3/3952c3354e2ad75bb1cb7e37f4abc155.jpg",
    verified: true,
  },
  {
    id: "15",
    name: "Petals & Dreams",
    category: "florist",
    rating: 4.7,
    reviewCount: 12,
    description: "Beautiful floral decor for weddings, parties, and corporate events with premium flowers.",
    location: "Galle",
    price: 200000,
    priceUnit: "LKR",
    image: "https://i.pinimg.com/1200x/40/81/87/408187cb9c7cd553a6d4e4bb1fd04b84.jpg",
    verified: true,
  },
];



 function VendorMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVendors = mockVendors.filter((vendor) => {
    const matchesCategory = selectedCategory === "all" || vendor.category === selectedCategory;
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl mb-4">Vendor Marketplace</h1>
          <p className="text-gray-600">
            Browse our curated collection of verified vendors
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search vendors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="all">All Vendors</option>
            <option value="venue">Venues</option>
            <option value="caterer">Caterers</option>
            <option value="decorator">Decorators</option>
            <option value="photographer">Photographers</option>
            <option value="dj">DJs</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
                {vendor.verified && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{vendor.name}</h3>
                  <span className="text-xs text-gray-500 capitalize">{vendor.category}</span>
                </div>
                <div className="flex items-center gap-1 mb-2 text-yellow-500">
                  <Star className="w-4 h-4" />
                  <span className="font-semibold text-gray-700">{vendor.rating}</span>
                  <span className="text-sm text-gray-500">({vendor.reviewCount} reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{vendor.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {vendor.location}
                </div>
                <div className="text-lg font-semibold text-purple-600">
                 {vendor.priceUnit} {vendor.price.toLocaleString()} 
                </div>
               <div className="flex gap-2 mt-3">
  <button className="flex-1 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
    View Details
  </button>
  <button className="flex-1 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
    Add Cart
  </button>
</div>
              </div>
            </div>
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No vendors found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorMarketplace