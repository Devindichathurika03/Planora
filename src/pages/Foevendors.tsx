import { useState } from 'react';
import { Star, TrendingUp, Calendar as CalendarIcon, DollarSign } from 'lucide-react';

 const ForVendors = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Bookings', value: '127', icon: CalendarIcon, color: 'text-blue-600' },
    { label: 'Average Rating', value: '4.9', icon: Star, color: 'text-yellow-600' },
    { label: 'Revenue (YTD)', value: '₨8,945,000', icon: DollarSign, color: 'text-green-600' },
    { label: 'Growth Rate', value: '+23%', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl mb-2 font-semibold">Vendor Portal</h1>
          <p className="text-gray-600">Manage your business and grow your reach on Planora</p>
        </div>

        {/* Tabs */}
        <div>
          <div className="flex gap-4 mb-6 justify-center">
            {['overview', 'bookings', 'join'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md font-medium ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab === 'overview' && 'Overview'}
                {tab === 'bookings' && 'Bookings'}
                {tab === 'join' && 'Join as Vendor'}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 bg-white rounded-lg shadow flex flex-col items-start"
                    >
                      <Icon className={`w-8 h-8 mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Upcoming Bookings */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Bookings</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Sarah & Michael Wedding', date: 'June 15, 2026', amount: '₨3,50,000' },
                    { name: 'Tech Corp Gala', date: 'July 20, 2026', amount: '₨5,00,000' },
                    { name: "Emma's Birthday", date: 'August 10, 2026', amount: '₨1,20,000' },
                  ].map((booking, idx) => (
                    <div key={idx} className="border-b pb-2 flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{booking.name}</p>
                        <p className="text-sm text-gray-500">{booking.date}</p>
                      </div>
                      <p className="text-purple-600 font-semibold">{booking.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <div className="grid gap-4">
              {[
                { id: 'B001', client: 'Sarah M.', event: 'Wedding', date: 'June 15, 2026', status: 'Confirmed', amount: '₨3,50,000' },
                { id: 'B002', client: 'Tech Corp', event: 'Corporate Gala', date: 'July 20, 2026', status: 'Pending', amount: '₨5,00,000' },
                { id: 'B003', client: 'Emma J.', event: 'Birthday Party', date: 'August 10, 2026', status: 'Confirmed', amount: '₨1,20,000' },
              ].map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow p-4 flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{booking.client} - {booking.event}</p>
                    <p className="text-sm text-gray-500">{booking.id} • {booking.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-600 font-semibold mb-1">{booking.amount}</p>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Join Tab */}
          {activeTab === 'join' && (
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              <h3 className="text-xl font-semibold">Join Planora as a Vendor</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold">Grow Your Business</p>
                  <p className="text-sm text-gray-600">Reach thousands of customers actively planning events</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold">Build Your Reputation</p>
                  <p className="text-sm text-gray-600">Showcase your work and collect verified reviews</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <CalendarIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold">Manage Bookings</p>
                  <p className="text-sm text-gray-600">All-in-one platform for availability and scheduling</p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full border rounded-md px-3 py-2" />
                  <input type="email" placeholder="Email" className="w-full border rounded-md px-3 py-2" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Business Name" className="w-full border rounded-md px-3 py-2" />
                  <input type="tel" placeholder="Phone Number" className="w-full border rounded-md px-3 py-2" />
                </div>
                <textarea placeholder="Tell us about your business..." className="w-full border rounded-md px-3 py-2" rows={4}></textarea>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Submit Application</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForVendors
