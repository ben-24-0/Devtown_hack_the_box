import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const featuredSpeakers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director",
    company: "TechFuture Labs",
    image: "/placeholder.svg?height=300&width=300",
    topic: "The Future of Generative AI",
    keynote: true,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "CloudScale Inc.",
    image: "/placeholder.svg?height=300&width=300",
    topic: "Building Scalable Systems",
    keynote: true,
  },
  {
    name: "Priya Patel",
    role: "Head of Product",
    company: "MetaVerse Inc.",
    image: "/placeholder.svg?height=300&width=300",
    topic: "Product Strategy in Web3",
    keynote: false,
  },
]

export default function FeaturedSpeakersSection() {
  return (
    <section className="py-20 bg-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Speakers</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Learn from industry leaders who are shaping the future of technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-[#252542] rounded-2xl overflow-hidden border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-square relative">
                <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                {speaker.keynote && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Keynote
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-purple-300 mb-3">
                  {speaker.role}, {speaker.company}
                </p>
                <p className="text-sm text-gray-300">
                  Speaking on: <span className="font-medium text-white">{speaker.topic}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/speakers">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg">
              View All Speakers
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
