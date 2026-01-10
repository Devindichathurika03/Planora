import { ShoppingCart, User } from "lucide-react"
import { NavLink } from "react-router-dom"
import LOGO from "../assets/logo.png"

function Navbar() {
  const cart = [] // replace with context or state if needed

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/planning", label: "Plan Event" },
    { path: "/marketplace", label: "Vendors" },
    { path: "/stories", label: "Success Stories" },
    { path: "/vendor-portal", label: "For Vendors" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Planora Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">Planora</span>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <NavLink to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>

          <button>
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
