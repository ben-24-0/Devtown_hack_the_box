import { MapPin, Car, Train, Plane, Wifi, Coffee, Utensils, Shield } from "lucide-react"

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi", description: "Dedicated network for attendees" },
  { icon: Coffee, title: "Coffee Stations", description: "Premium coffee & tea all day" },
  { icon: Utensils, title: "Food Court", description: "Multiple dining options on-site" },
  { icon: Shield, title: "24/7 Security", description: "Safe and secure environment" },
]

const transportation = [
  { icon: Car, title: "Parking", description: "Free parking for 500+ vehicles", details: "Valet service available" },
  {
    icon: Train,
    title: "Metro Access",
    description: "Direct connection to Metro Line",
    details: "Innovation Station - 2 min walk",
  },
  {
    icon: Plane,
    title: "Airport Shuttle",
    description: "Complimentary shuttle service",
    details: "Every 30 minutes from Tech City Airport",
  },
]

export default function VenueSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Venue & Location
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            GENESIS takes place at the state-of-the-art Flat Harbor Convention Center, designed specifically for tech
            events with cutting-edge facilities and amenities.
          </p>
        </div>

        {/* Main Venue Info - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Venue Details */}
          <div className="lg:col-span-2 bg-gradient-to-br from-green-900/30 to-teal-900/30 p-8 rounded-2xl border border-green-800/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-600 rounded-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Flat Harbor Convention Center</h3>
                <p className="text-green-200">123 Innovation Drive, Tech City, TC 98765</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-300">Facility Highlights</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    50,000 sq ft of event space
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Main auditorium seats 800
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    12 breakout rooms for workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Dedicated hackathon arena
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Exhibition hall for sponsors
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-300">Tech Specifications</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Fiber optic internet (10 Gbps)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    4K projection systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Professional live streaming setup
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Power outlets at every seat
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    Climate-controlled environment
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1a1a2e] p-4 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Address:</strong> 123 Innovation Drive, Tech City, TC 98765
                <br />
                <strong>Coordinates:</strong> 40.7589° N, 73.9851° W<br />
                <strong>What3Words:</strong> ///tech.innovation.hub
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30">
            <h4 className="text-xl font-bold mb-4">Location Map</h4>
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-green-400" />
                <p className="text-sm text-gray-400">Interactive map</p>
                <p className="text-xs text-gray-500">Click to open in Google Maps</p>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg transition-colors text-sm">
              Get Directions
            </button>
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Getting There</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {transportation.map((transport, index) => {
              const IconComponent = transport.icon
              return (
                <div key={index} className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{transport.title}</h4>
                  <p className="text-purple-200 mb-2">{transport.description}</p>
                  <p className="text-sm text-gray-400">{transport.details}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Venue Amenities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon
              return (
                <div key={index} className="bg-[#252542] p-6 rounded-xl border border-purple-800/30 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold mb-2">{amenity.title}</h4>
                  <p className="text-sm text-gray-400">{amenity.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Accommodation */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-800/30">
          <h3 className="text-2xl font-bold text-center mb-6">Recommended Hotels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold mb-2">Tech City Marriott</h4>
              <p className="text-sm text-blue-200 mb-2">0.3 miles from venue</p>
              <p className="text-sm text-gray-400">Special GENESIS rate: $149/night</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2">Innovation Suites</h4>
              <p className="text-sm text-blue-200 mb-2">0.5 miles from venue</p>
              <p className="text-sm text-gray-400">Special GENESIS rate: $129/night</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2">Harbor View Hotel</h4>
              <p className="text-sm text-blue-200 mb-2">0.8 miles from venue</p>
              <p className="text-sm text-gray-400">Special GENESIS rate: $109/night</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
              Book Hotel with Discount Code
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
