import { useState } from 'react';
import { Star, TrendingUp, Calendar as CalendarIcon, DollarSign, UploadCloud, Users } from 'lucide-react';

const ForVendors = () => {
  const stats = [
    { label: 'Total Bookings', value: '127', icon: CalendarIcon, color: 'text-blue-600' },
    { label: 'Average Rating', value: '4.9', icon: Star, color: 'text-yellow-500' },
    { label: 'Revenue (YTD)', value: '₨8,945,000', icon: DollarSign, color: 'text-green-600' },
    { label: 'Growth Rate', value: '+23%', icon: TrendingUp, color: 'text-purple-600' },
  ];

  const benefits = [
    {
      title: 'Grow Your Business',
      description: 'Reach thousands of customers actively planning events and increase your sales.',
      icon: TrendingUp,
      color: 'text-blue-600',
    },
    {
      title: 'Build Your Reputation',
      description: 'Showcase your work and collect verified reviews to build trust with clients.',
      icon: Star,
      color: 'text-yellow-500',
    },
    {
      title: 'Manage Bookings Easily',
      description: 'Keep track of availability, schedule appointments, and manage your calendar effortlessly.',
      icon: CalendarIcon,
      color: 'text-green-600',
    },
    {
      title: 'Expand Your Network',
      description: 'Connect with other vendors and clients for collaboration opportunities.',
      icon: Users,
      color: 'text-purple-600',
    },
  ];

  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Vendor Portal</h1>
          <p className="text-gray-600">Manage your business and grow your reach on Planora</p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md flex flex-col items-start hover:scale-105 transition-transform duration-300"
              >
                <Icon className={`w-8 h-8 mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Become a Vendor on Planora?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <Icon className={`w-8 h-8 mb-3 ${benefit.color}`} />
                  <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

         <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Image as Link */}
          <div className="md:w-1/2">
            <a  target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.pinimg.com/1200x/92/ce/a4/92cea41e08a286a45857eaeba6140379.jpg"
                alt="Vendor Showcase"
                className="w-200 h-140 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Join Planora as a Vendor</h2>

            <form className="space-y-4 w-full">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <textarea
                placeholder="Tell us about your business..."
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                rows={4}
              />

              {/* File Upload */}
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-gray-50 transition-all duration-300">
                <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                <span className="text-gray-500">
                  {file ? file.name : 'Upload a photo of your place / flowers / venue'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files[0]) setFile(files[0]);
                  }}
                />
              </label>

              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                Submit Application
              </button>
            </form>
          </div>
        </div>

         
             
          
      </div>
    </div>
  );
};

export default ForVendors;
