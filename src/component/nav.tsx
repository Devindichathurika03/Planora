import { User } from "lucide-react"
import { NavLink } from "react-router-dom"
import LOGO from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
 

  const navItems = [
    { path: "/", label: "Home" },
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
      <button
        onClick={() => navigate("/signin")}
        className="p-2 rounded-full hover:bg-purple-100 transition"
      >
        <User className="w-7 h-7 text-blue-700" />
      </button>
    </div>
      </div>
    </header>
  )
}

export default Navbar
