import Image from "next/image"

const sponsors = {
  platinum: [
    { name: "TechCorp", logo: "/placeholder.svg?height=80&width=200", website: "https://techcorp.com" },
    { name: "InnovateLabs", logo: "/placeholder.svg?height=80&width=200", website: "https://innovatelabs.com" },
  ],
  gold: [
    { name: "CloudTech", logo: "/placeholder.svg?height=60&width=150", website: "https://cloudtech.com" },
    { name: "DataFlow", logo: "/placeholder.svg?height=60&width=150", website: "https://dataflow.com" },
    { name: "AI Solutions", logo: "/placeholder.svg?height=60&width=150", website: "https://aisolutions.com" },
  ],
  silver: [
    { name: "DevTools", logo: "/placeholder.svg?height=50&width=120", website: "https://devtools.com" },
    { name: "CodeBase", logo: "/placeholder.svg?height=50&width=120", website: "https://codebase.com" },
    { name: "TechStart", logo: "/placeholder.svg?height=50&width=120", website: "https://techstart.com" },
    { name: "WebFlow", logo: "/placeholder.svg?height=50&width=120", website: "https://webflow.com" },
    { name: "AppMaker", logo: "/placeholder.svg?height=50&width=120", website: "https://appmaker.com" },
  ],
  community: [
    { name: "Local Dev Group", logo: "/placeholder.svg?height=40&width=100", website: "https://localdev.com" },
    { name: "Tech Meetup", logo: "/placeholder.svg?height=40&width=100", website: "https://techmeetup.com" },
    { name: "Code Academy", logo: "/placeholder.svg?height=40&width=100", website: "https://codeacademy.com" },
    { name: "Startup Hub", logo: "/placeholder.svg?height=40&width=100", website: "https://startuphub.com" },
  ],
}

export default function SponsorsSection() {
  return (
    <section className="py-20 bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            GENESIS is made possible by our amazing sponsors who share our vision of advancing technology and
            innovation.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">Platinum Sponsors</h3>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {sponsors.platinum.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-2xl border-2 border-yellow-600/30 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={200}
                  height={80}
                  className="h-20 w-auto object-contain filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-300">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {sponsors.gold.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gradient-to-br from-yellow-900/15 to-orange-900/15 rounded-xl border border-yellow-600/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105 w-full max-w-[180px]"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={150}
                  height={60}
                  className="h-15 w-auto object-contain filter brightness-0 invert mx-auto"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">Silver Sponsors</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {sponsors.silver.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-[#252542] rounded-lg border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={120}
                  height={50}
                  className="h-12 w-auto object-contain filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-300">Community Partners</h3>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {sponsors.community.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-[#252542] rounded-lg border border-purple-600/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Sponsorship CTA */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-800/30 text-center">
          <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Join our community of innovative companies supporting the next generation of tech talent. Multiple
            sponsorship packages available with great visibility and networking opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
              View Sponsorship Packages
            </button>
            <button className="border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg transition-colors">
              Contact Sponsorship Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
