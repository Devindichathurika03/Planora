import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import LOGO from "../assets/logo.png";

function Footer (){
    const currentYear = new Date().getFullYear();

    return (

        <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
             <img src={LOGO} alt="Planora Logo" className="w-10 h-10" />
              <span className="text-xl text-white">Planora</span>
            </div>
            <p className="text-sm mb-4">
              Your complete event planning platform. From dream to reality, we help you create unforgettable moments.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h3 className="text-white mb-4">For Vendors</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Join as Vendor</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Vendor Portal</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Vendor Guidelines</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="mailto:hello@planora.com" className="hover:text-purple-400 transition-colors">
                  hello@planora.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-purple-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Event Street, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
          <p>&copy; {currentYear} Planora. All rights reserved.</p>
        </div>
      </div>
    </footer>
       
    )
}

export default Footer