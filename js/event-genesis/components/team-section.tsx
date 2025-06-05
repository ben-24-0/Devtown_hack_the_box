import Image from "next/image"

const teamMembers = [
  {
    name: "Jordan Lee",
    role: "Event Director",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Taylor Kim",
    role: "Program Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Casey Rivera",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Meet Our Team</h2>
        <p className="text-xl text-center text-purple-200 mb-16 max-w-3xl mx-auto">
          The dedicated professionals working behind the scenes to make GENESIS an unforgettable experience
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-purple-500">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-purple-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
