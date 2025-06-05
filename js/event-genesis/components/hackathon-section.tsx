import { Trophy, Clock, Users, Code, Zap, Target, Gift, Star } from "lucide-react"

const prizes = [
  {
    place: "1st Place",
    amount: "$15,000",
    color: "from-yellow-400 to-orange-400",
    icon: Trophy,
    perks: ["Cash Prize", "Mentorship Program", "Startup Incubator Access"],
  },
  {
    place: "2nd Place",
    amount: "$10,000",
    color: "from-gray-300 to-gray-400",
    icon: Star,
    perks: ["Cash Prize", "Tech Gear Package", "Industry Connections"],
  },
  {
    place: "3rd Place",
    amount: "$5,000",
    color: "from-amber-600 to-amber-700",
    icon: Gift,
    perks: ["Cash Prize", "Software Licenses", "Conference Tickets"],
  },
]

const categories = [
  {
    title: "AI & Machine Learning",
    description: "Build intelligent applications using AI/ML technologies",
    icon: "🤖",
    prize: "$5,000",
  },
  {
    title: "Web3 & Blockchain",
    description: "Create decentralized applications and blockchain solutions",
    icon: "⛓️",
    prize: "$5,000",
  },
  {
    title: "Sustainability Tech",
    description: "Develop solutions for environmental and social challenges",
    icon: "🌱",
    prize: "$5,000",
  },
  {
    title: "Developer Tools",
    description: "Build tools that make developers' lives easier",
    icon: "🛠️",
    prize: "$3,000",
  },
]

export default function HackathonSection() {
  return (
    <section className="py-20 bg-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            48-Hour Hackathon
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            The ultimate coding challenge. Build, innovate, and compete for $50,000+ in prizes. Form teams, solve
            real-world problems, and showcase your skills to industry leaders.
          </p>
        </div>

        {/* Hackathon Overview - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {/* Main Info */}
          <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-800/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-600 rounded-lg">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">The Challenge</h3>
                <p className="text-red-200">September 15-17, 2025</p>
              </div>
            </div>
            <p className="text-lg mb-6">
              48 hours of non-stop coding, creativity, and collaboration. Teams of 2-5 people will build innovative
              solutions across multiple categories. Mentors, free food, and amazing prizes await!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold">48</div>
                <div className="text-sm text-gray-300">Hours</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-gray-300">Hackers</div>
              </div>
              <div className="text-center">
                <Code className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <Trophy className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold">$50K+</div>
                <div className="text-sm text-gray-300">Prizes</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#252542] p-6 rounded-2xl border border-purple-800/30">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              Timeline
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Fri 6PM</div>
                  <div className="text-xs text-gray-400">Kickoff & Team Formation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Sat 12PM</div>
                  <div className="text-xs text-gray-400">Midpoint Check-in</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Sun 6PM</div>
                  <div className="text-xs text-gray-400">Submissions Due</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Sun 8PM</div>
                  <div className="text-xs text-gray-400">Demo & Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prize Pool */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Prize Pool</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {prizes.map((prize, index) => {
              const IconComponent = prize.icon
              return (
                <div
                  key={index}
                  className="bg-[#252542] rounded-2xl p-6 border border-purple-800/30 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{prize.place}</h4>
                  <div
                    className={`text-3xl font-bold mb-4 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}
                  >
                    {prize.amount}
                  </div>
                  <div className="space-y-2">
                    {prize.perks.map((perk, perkIndex) => (
                      <div key={perkIndex} className="text-sm text-gray-300 flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Challenge Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="text-lg font-bold mb-2">{category.title}</h4>
                <p className="text-sm text-gray-300 mb-4">{category.description}</p>
                <div className="text-lg font-bold text-yellow-400">{category.prize}</div>
                <div className="text-xs text-gray-400">Category Prize</div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Provided */}
        <div className="bg-[#252542] rounded-2xl p-8 border border-purple-800/30">
          <h3 className="text-2xl font-bold text-center mb-8">What We Provide</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🍕</div>
              <h4 className="font-semibold mb-2">Free Food & Drinks</h4>
              <p className="text-sm text-gray-400">Meals, snacks, and beverages throughout the event</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👨‍💻</div>
              <h4 className="font-semibold mb-2">Expert Mentors</h4>
              <p className="text-sm text-gray-400">Industry professionals to guide your project</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="font-semibold mb-2">APIs & Tools</h4>
              <p className="text-sm text-gray-400">Free access to premium APIs and development tools</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold mb-2">Swag & Prizes</h4>
              <p className="text-sm text-gray-400">T-shirts, stickers, and amazing prizes for winners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
