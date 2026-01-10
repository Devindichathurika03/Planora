import { Calendar, DollarSign, Heart } from "lucide-react";

const customerStories = [
  {
    id: 1,
    name: "Sarah & Daniel’s Wedding",
    eventType: "Wedding",
    date: "March 2025",
    budget: 3000000, 
    testimonial:
      "Planora transformed our wedding planning experience. From choosing the perfect venue to coordinating every vendor, everything was seamless. The real-time budget tracker kept us on track, and the curated themes made our day feel truly magical. Highly recommend to anyone wanting a stress-free wedding!",
    vendors: ["Venue", "Catering", "Photography", "Decor"],
    images: [
      "https://i.pinimg.com/736x/e2/16/b2/e216b20ae2afb56a356df2cb2f0d8abc.jpg",
    ],
  },
  {
    id: 2,
    name: "Corporate Gala Night",
    eventType: "Corporate Event",
    date: "January 2025",
    budget: 4500000, 
    testimonial:
      "Our corporate gala was executed flawlessly thanks to Planora. Every vendor was verified and professional, and the step-by-step planning workflow made it easy to stay on schedule. The themed decorations impressed our guests, and the team support was exceptional throughout the process.",
    vendors: ["Decor", "Lighting", "Event Host", "Catering"],
    images: [
      "https://i.pinimg.com/1200x/90/f7/f5/90f7f520a85694cea54013ab9362884f.jpg",
    ],
  },
  {
    id: 3,
    name: "Emma’s Birthday Bash",
    eventType: "Birthday Party",
    date: "February 2025",
    budget: 900000,
    testimonial:
      "Planora helped me plan my birthday party like a pro! From selecting fun themes to managing every vendor, I felt completely in control. The dashboard and budget tracker made it so easy to see exactly what I was spending, and my guests were blown away by the decorations and entertainment.",
    vendors: ["Theme Decor", "Cake", "Entertainment", "Photography"],
    images: [
      "https://i.pinimg.com/736x/77/3f/60/773f607487abbfdfd0a817316f906074.jpg",
    ],
  },
  {
    id: 4,
    name: "Liam & Zoe’s Engagement",
    eventType: "Engagement",
    date: "April 2025",
    budget: 1800000, 
    testimonial:
      "Planning our engagement was so much easier with Planora. Every vendor was listed with reviews and portfolios, which helped us make confident decisions. The platform’s theme suggestions made our engagement look elegant and stylish. Everything was handled professionally, making the day unforgettable.",
    vendors: ["Venue", "Photography", "Decor", "Catering"],
    images: [
      "https://i.pinimg.com/736x/a5/0f/c2/a50fc23b07aef88bf889c72b425b93d2.jpg",
    ],
  },
  {
    id: 5,
    name: "Noah’s Kids Party",
    eventType: "Kids Party",
    date: "May 2025",
    budget: 500000, 
    testimonial:
      "Planora made organizing my son’s birthday a breeze! The vendor selection was amazing, from entertainers to cake designers. The interactive planning workflow helped me stay on budget and ensure every little detail was perfect. Highly recommend for family events!",
    vendors: ["Theme Decor", "Entertainment", "Cake", "Photography"],
    images: [
      "https://i.pinimg.com/736x/21/fb/23/21fb23dbf9e739c5dab744260cbc83a1.jpg",
    ],
  },
    {
  id: 6,
  name: "Priya & Arjun’s Indian Wedding",
  eventType: "Wedding",
  date: "June 2025",
  budget: 7500000, // in LKR
  testimonial:
    "Planning our traditional Indian wedding seemed overwhelming at first, but Planora made it effortless! From selecting the perfect mandap décor to coordinating the catering of multiple cuisines, everything was organized flawlessly. The budget tracker helped us manage expenses without stress, and the vendor recommendations were spot-on. Our guests were amazed by the vibrant decorations and seamless arrangements. Truly a stress-free and memorable wedding experience!",
  vendors: ["Venue", "Catering", "Decor", "Photography", "Entertainment"],
  images: [
    "https://i.pinimg.com/736x/b4/51/20/b451207bef20a0bc79cc21e58af6f44d.jpg",
  ],
},
];

function Story() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 font-semibold">Customer Success Stories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real events, real people, real joy. See how Planora helped bring these memorable events to life.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {customerStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="h-100 w-auto">
                  <img
                    src={story.images[0]}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {story.eventType}
                    </span>
                  </div>

                  <h2 className="text-2xl mb-4 font-semibold">{story.name}</h2>

                  <div className="space-y-3 mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{story.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Budget: LKR {story.budget.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mb-6 flex items-start gap-2">
                    <Heart className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <p className="text-gray-700 italic">"{story.testimonial}"</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Vendors Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {story.vendors.map((vendor, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm"
                        >
                          {vendor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
