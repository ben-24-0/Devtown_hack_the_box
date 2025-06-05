import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, Code, Mic } from "lucide-react"

const quickStats = [
  {
    icon: Calendar,
    title: "3 Days",
    subtitle: "Sept 15-17, 2025",
    description: "Packed with content",
    link: "/schedule",
    color: "from-blue-600 to-purple-600",
  },
  {
    icon: Code,
    title: "20+ Workshops",
    subtitle: "Hands-on Learning",
    description: "All skill levels",
    link: "/workshops",
    color: "from-green-600 to-teal-600",
  },
  {
    icon: Trophy,
    title: "$50K+ Prizes",
    subtitle: "48-Hour Hackathon",
    description: "Build & compete",
    link: "/hackathon",
    color: "from-red-600 to-orange-600",
  },
  {
    icon: Mic,
    title: "Expert Speakers",
    subtitle: "Industry Leaders",
    description: "Inspiring keynotes",
    link: "/speakers",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: MapPin,
    title: "Tech City",
    subtitle: "Convention Center",
    description: "State-of-the-art venue",
    link: "/venue",
    color: "from-yellow-600 to-orange-600",
  },
  {
    icon: Users,
    title: "500+ Attendees",
    subtitle: "Global Community",
    description: "Network & connect",
    link: "/speakers",
    color: "from-indigo-600 to-blue-600",
  },
]

export default function QuickInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why GENESIS?</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Everything you need to level up your tech skills and connect with the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Link key={index} href={stat.link}>
                <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                  <div
                    className={`w-12 h-12 mb-4 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{stat.title}</h3>
                  <p className="text-purple-300 mb-2">{stat.subtitle}</p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
