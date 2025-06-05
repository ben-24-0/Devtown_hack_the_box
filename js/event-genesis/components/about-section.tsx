import { Code, Users, Trophy, Calendar, MapPin, Clock } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About GENESIS
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Where innovation meets execution. GENESIS is the premier tech event bringing together developers, designers,
            entrepreneurs, and visionaries for three days of learning, building, and networking.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {/* Main Event Info - Large Card */}
          <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-800/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-600 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">3 Days of Innovation</h3>
                <p className="text-purple-200">September 15-17, 2025</p>
              </div>
            </div>
            <p className="text-lg mb-6">
              GENESIS combines the best of conferences, workshops, and hackathons into one transformative experience.
              Learn from industry leaders, build alongside peers, and compete for amazing prizes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>500+ Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                <span>20+ Workshops</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-purple-400" />
                <span>$50K+ Prizes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Hybrid Event</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
            <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <h4 className="text-lg font-semibold">Duration</h4>
              </div>
              <p className="text-2xl font-bold text-blue-400">72 Hours</p>
              <p className="text-sm text-gray-400">Non-stop innovation</p>
            </div>

            <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h4 className="text-lg font-semibold">Prize Pool</h4>
              </div>
              <p className="text-2xl font-bold text-yellow-400">$50,000</p>
              <p className="text-sm text-gray-400">Across all categories</p>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="md:col-span-4 lg:col-span-3 bg-[#252542] p-6 rounded-2xl border border-purple-800/30">
            <h4 className="text-xl font-bold mb-4">Event Highlights</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Keynotes from tech industry leaders</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Hands-on workshops with cutting-edge tech</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>48-hour hackathon with amazing prizes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Networking with 500+ tech professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Startup pitch competition</span>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-2xl border border-blue-800/30">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl font-bold">Location</h4>
            </div>
            <p className="text-lg font-semibold mb-2">Flat Harbor Convention Center</p>
            <p className="text-purple-200 mb-4">123 Innovation Drive, Tech City</p>
            <div className="space-y-2 text-sm">
              <p>🚗 Free parking available</p>
              <p>🚇 Metro accessible</p>
              <p>🌐 Hybrid attendance options</p>
              <p>♿ Fully accessible venue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
