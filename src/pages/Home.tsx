import { useEffect, useState } from "react"
import { Calendar, DollarSign, Sparkles, CheckCircle,Heart,ChevronLeft, ChevronRight } from 'lucide-react';



const heroImages = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621857524725-fdfeae3465dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723052377793-53d54c397e60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroImages.length
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

   const features = [
    {
      icon: Calendar,
      title: 'Step-by-Step Planning',
      description: 'Guided journey from event type to final booking',
    },
    {
      icon: Sparkles,
      title: 'Curated Themes',
      description: 'Choose from luxury, minimal, festive, or traditional styles',
    },
    {
      icon: CheckCircle,
      title: 'Verified Vendors',
      description: 'All vendors are verified with real reviews and ratings',
    },
    {
      icon: DollarSign,
      title: 'Budget Tracking',
      description: 'Real-time budget tracking as you add services',
    },
  ];


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


 const [currentIndex, setCurrentIndex] = useState(0);
  const totalStories = customerStories.length;
  const story = customerStories[currentIndex];

    const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalStories - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalStories - 1 ? 0 : prev + 1));
  };


  return (

   

    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-screen text-white py-24 md:py-40 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/80 to-amber-900/80" />
          </div>
        ))}

             {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl mb-6 font-bold">
              Plan Your Perfect Event
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              From dream to reality discover verified vendors, manage your budget, 
              and book everything in one place
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                
                className="border border-white hover:bg-transparent text-gray-800 bg-gray-100 rounded-md py-2 px-5">
                Start Planning
              </button>
              <button
                className="border border-white hover:bg-transparent text-gray-800 bg-gray-100 rounded-md py-2 px-5">
                Browse Vendors
              </button>
            </div>
          </div>
        </div>
        </section>

{/* About Us */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Image */}
    <div className="relative">
      <img
        src="https://i.pinimg.com/1200x/b8/fd/96/b8fd9675ef0832c3dea1c2a5bda7196f.jpg"
        alt="Planora team collaboration"
        className="w-full h-100 rounded-2xl object-cover shadow-xl"
      />
    </div>

    {/* Text Content */}
    <div>
      <span className="text-blue-600 font-semibold uppercase tracking-wide">
        About Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
        Crafted to Simplify Event Planning
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed">
        <span className="font-semibold text-gray-900">Planora</span> is a comprehensive event planning platform
        designed to simplify the entire event journey from start to finish. We empower users
        to plan, manage, and book events seamlessly through curated themes, verified vendors,
        and real-time budget tracking.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Our mission is to help individuals and businesses create
        <span className="font-semibold"> unforgettable experiences </span>
        by combining inspiration, trust, and convenience into one intuitive platform.
      </p>
    </div>

  </div>
</section>


{/* Features Section */}
             <section className="relative py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-4xl mb-12 font-semibold">
      Why Choose Planora?
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* succes story*/}
<section className="py-2 bg-gray-60">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold mb-3">
            Customer Success Stories
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real events. Real people. Real results powered by Planora.
          </p>
        </div>

        {/* Carousel Card */}
        <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
          {/* LEFT – Image */}
          <div className="h-105 rounded-2xl overflow-hidden shadow-lg relative">
            <img
              src={story.images[0]}
              alt={story.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
      
          </div>

          {/* RIGHT – Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl mb-4">{story.name}</h3>

            <div className="space-y-3 mb-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{story.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>Budget: LKR.{story.budget.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <Heart className="w-5 h-5 text-red-500 mt-1" />
              <p className="italic text-gray-700">“{story.testimonial}”</p>
            </div>

            <div>
              <p className="text-sm font-semibold mb-2">Vendors Used</p>
              <div className="flex flex-wrap gap-2">
                {story.vendors.map((vendor, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm border rounded-full"
                  >
                    {vendor}
                  </span>
                ))}
              </div>
            </div>
          </div>
           {/* Prev / Next Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
        </div>
      </div>
    </section>
   


            {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-r from-blue-500 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl mb-4">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of happy customers who brought their events to life with Planora
            </p>
            <button
              className="bg-white text-gray-600 hover:bg-gray-100 rounded-md py-2 px-4 "
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home
