import { useState } from "react";

// Dummy vendors
const allVendors = [
  { id: 1, name: "Floral Magic", type: "wedding", price: 50000 },
  { id: 2, name: "Tech Party Rentals", type: "corporate", price: 80000 },
  { id: 3, name: "Birthday Bash Co.", type: "birthday", price: 30000 },
  { id: 4, name: "Elegant Decorators", type: "wedding", price: 70000 },
  { id: 5, name: "Corporate Catering", type: "corporate", price: 40000 },
];

// Event types and themes
const eventTypes = ["wedding", "corporate", "birthday", "anniversary", "other"];
const themes = ["luxury", "minimal", "festive", "traditional"];


function Plan(){
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [budget, setBudget] = useState(0);
  const [theme, setTheme] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  const availableVendors = allVendors.filter(v => v.type === eventType);

  const toggleCart = (vendorId: number) => {
    setCart(prev =>
      prev.includes(vendorId) ? prev.filter(id => id !== vendorId) : [...prev, vendorId]
    );
  };

  const handleSubmit = () => {
    const selectedVendors = allVendors.filter(v => cart.includes(v.id));
    const plan = {
      eventType,
      eventDate,
      guestCount,
      budget,
      theme,
      vendors: selectedVendors,
    };
    console.log("Event Plan Submitted:", plan);
    alert("Event plan submitted! Check console for details.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Plan Your Event</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label>Event Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={eventType}
            onChange={e => setEventType(e.target.value)}
          >
            <option value="">Select Type</option>
            {eventTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Event Date</label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={eventDate}
            onChange={e => setEventDate(e.target.value)}
          />
        </div>

        <div>
          <label>Guest Count</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={guestCount}
            onChange={e => setGuestCount(parseInt(e.target.value))}
          />
        </div>

        <div>
          <label>Budget (₨)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={budget}
            onChange={e => setBudget(parseInt(e.target.value))}
          />
        </div>

        <div>
          <label>Theme</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={theme}
            onChange={e => setTheme(e.target.value)}
          >
            <option value="">Select Theme</option>
            {themes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Available Vendors */}
      {eventType && (
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="text-xl font-semibold">Available Vendors</h2>
          {availableVendors.length === 0 && <p>No vendors found for this event type.</p>}
          <div className="grid md:grid-cols-2 gap-4">
            {availableVendors.map(v => (
              <div
                key={v.id}
                className={`border p-4 rounded flex justify-between items-center cursor-pointer ${
                  cart.includes(v.id) ? "border-purple-600 bg-purple-50" : ""
                }`}
                onClick={() => toggleCart(v.id)}
              >
                <div>
                  <p className="font-semibold">{v.name}</p>
                  <p className="text-gray-500">₨{v.price.toLocaleString()}</p>
                </div>
                <input
                  type="checkbox"
                  checked={cart.includes(v.id)}
                  onChange={() => toggleCart(v.id)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit */}
      <div className="text-center">
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={handleSubmit}
          disabled={!eventType || !eventDate || !guestCount || !budget || !theme || cart.length === 0}
        >
          Submit Event Plan
        </button>
      </div>
    </div>
  )
}

export default Plan