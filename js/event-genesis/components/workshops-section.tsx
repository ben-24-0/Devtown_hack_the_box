import { Code, Database, Brain, Smartphone, Globe, Shield, Cpu, Palette } from "lucide-react"

const workshops = [
  {
    title: "AI & Machine Learning Fundamentals",
    instructor: "Dr. Sarah Chen",
    duration: "4 hours",
    level: "Beginner",
    icon: Brain,
    description: "Learn the basics of AI and ML with hands-on Python exercises",
    tech: ["Python", "TensorFlow", "Jupyter"],
    spots: "25 spots left",
  },
  {
    title: "Full-Stack Web Development",
    instructor: "Marcus Rodriguez",
    duration: "6 hours",
    level: "Intermediate",
    icon: Code,
    description: "Build a complete web application from frontend to backend",
    tech: ["React", "Node.js", "MongoDB"],
    spots: "12 spots left",
  },
  {
    title: "Mobile App Development with React Native",
    instructor: "Priya Patel",
    duration: "5 hours",
    level: "Intermediate",
    icon: Smartphone,
    description: "Create cross-platform mobile apps with React Native",
    tech: ["React Native", "Expo", "Firebase"],
    spots: "18 spots left",
  },
  {
    title: "Cloud Architecture & DevOps",
    instructor: "Alex Thompson",
    duration: "4 hours",
    level: "Advanced",
    icon: Globe,
    description: "Master cloud deployment and DevOps best practices",
    tech: ["AWS", "Docker", "Kubernetes"],
    spots: "8 spots left",
  },
  {
    title: "Cybersecurity Essentials",
    instructor: "Jordan Kim",
    duration: "3 hours",
    level: "Beginner",
    icon: Shield,
    description: "Learn to protect applications from common security threats",
    tech: ["OWASP", "Penetration Testing", "Security Auditing"],
    spots: "30 spots left",
  },
  {
    title: "Blockchain Development",
    instructor: "Taylor Johnson",
    duration: "5 hours",
    level: "Advanced",
    icon: Database,
    description: "Build decentralized applications on Ethereum",
    tech: ["Solidity", "Web3.js", "Ethereum"],
    spots: "15 spots left",
  },
  {
    title: "Quantum Computing Basics",
    instructor: "Dr. Emily Watson",
    duration: "3 hours",
    level: "Beginner",
    icon: Cpu,
    description: "Introduction to quantum computing concepts and programming",
    tech: ["Qiskit", "Python", "IBM Quantum"],
    spots: "20 spots left",
  },
  {
    title: "UI/UX Design for Developers",
    instructor: "Casey Rivera",
    duration: "4 hours",
    level: "Beginner",
    icon: Palette,
    description: "Learn design principles and create beautiful user interfaces",
    tech: ["Figma", "Design Systems", "Prototyping"],
    spots: "22 spots left",
  },
]

export default function WorkshopsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Workshops
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Dive deep into cutting-edge technologies with hands-on workshops led by industry experts. Each workshop
            includes practical exercises, real-world projects, and take-home resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full border border-green-700">
              All skill levels welcome
            </span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full border border-blue-700">
              Small class sizes
            </span>
            <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full border border-purple-700">
              Take-home resources
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workshops.map((workshop, index) => {
            const IconComponent = workshop.icon
            return (
              <div
                key={index}
                className="bg-[#252542] rounded-2xl p-6 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          workshop.level === "Beginner"
                            ? "bg-green-900/30 text-green-300"
                            : workshop.level === "Intermediate"
                              ? "bg-yellow-900/30 text-yellow-300"
                              : "bg-red-900/30 text-red-300"
                        }`}
                      >
                        {workshop.level}
                      </span>
                      <span className="text-xs text-gray-400">{workshop.duration}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 line-clamp-2">{workshop.title}</h3>
                <p className="text-sm text-purple-300 mb-3">by {workshop.instructor}</p>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">{workshop.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {workshop.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-400">{workshop.spots}</span>
                  <button className="text-sm bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                    Reserve Spot
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-[#252542] rounded-2xl p-8 border border-purple-800/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Workshop Package Deals</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$99</div>
                <div className="text-lg font-semibold mb-2">Single Workshop</div>
                <div className="text-sm text-gray-400">Access to one workshop of your choice</div>
              </div>
              <div className="text-center border-l border-r border-purple-800/30 md:px-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">$249</div>
                <div className="text-lg font-semibold mb-2">Workshop Pass</div>
                <div className="text-sm text-gray-400">Access to up to 3 workshops</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$399</div>
                <div className="text-lg font-semibold mb-2">All-Access</div>
                <div className="text-sm text-gray-400">Unlimited workshop access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
