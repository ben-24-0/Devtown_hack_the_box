import Image from "next/image"

const speakers = [
  {
    name: "Alex Morgan",
    role: "AI Research Director",
    company: "TechFuture Labs",
    image: "/placeholder.svg?height=400&width=400",
    topic: "The Future of Generative AI",
  },
  {
    name: "Sarah Chen",
    role: "Chief Innovation Officer",
    company: "Nexus Innovations",
    image: "/placeholder.svg?height=400&width=400",
    topic: "Blockchain Beyond Cryptocurrency",
  },
  {
    name: "Marcus Johnson",
    role: "Founder & CEO",
    company: "Quantum Solutions",
    image: "/placeholder.svg?height=400&width=400",
    topic: "Quantum Computing Applications",
  },
  {
    name: "Priya Patel",
    role: "Head of Product",
    company: "MetaVerse Inc.",
    image: "/placeholder.svg?height=400&width=400",
    topic: "Building the Metaverse",
  },
]

export default function SpeakersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Featured Speakers</h2>
        <p className="text-xl text-center text-purple-200 mb-16 max-w-3xl mx-auto">
          Learn from industry leaders who are shaping the future of technology and innovation
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-[#252542] rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-square relative">
                <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
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

        <div className="mt-12 text-center">
          <p className="text-purple-200 mb-2">And many more industry experts to be announced</p>
          <p className="text-sm text-gray-400">Full speaker lineup will be revealed closer to the event date</p>
        </div>
      </div>
    </section>
  )
}
