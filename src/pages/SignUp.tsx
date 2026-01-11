import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({ name, email, phone, address, password });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/d7/36/2d/d7362daeb851600f49dc781c8bdd8edd.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Card */}
      <div className="relative z-10 bg-white/90 rounded-xl shadow-xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
        
        {/* Left Image */}
        <div
          className="hidden md:flex bg-cover bg-center items-end p-8"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/d2/ce/fb/d2cefb9c7e8dbdd5caeba097fda17d59.jpg')",
          }}
        >
          <div className="bg-black/30 p-6 rounded-lg">
            <h3 className="text-white text-2xl font-semibold leading-snug">
              Plan events.
              <br />
              Connect vendors.
              <br />
              Make it unforgettable.
            </h3>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Create Account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              rows={2}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 font-medium">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
