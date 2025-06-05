import { Calendar, Clock, MapPin, Users, Mic, Code, Trophy } from "lucide-react"

const scheduleData = [
  {
    day: "Day 1 - Friday, Sept 15",
    date: "Opening Day",
    events: [
      {
        time: "9:00 AM",
        title: "Registration & Welcome Coffee",
        type: "registration",
        location: "Main Lobby",
        icon: Users,
        description: "Check-in, networking, and breakfast",
      },
      {
        time: "10:00 AM",
        title: "Opening Keynote: The Future of AI",
        type: "keynote",
        location: "Main Auditorium",
        icon: Mic,
        speaker: "Dr. Sarah Chen",
        description: "Exploring the next decade of artificial intelligence",
      },
      {
        time: "11:30 AM",
        title: "Workshop Session 1",
        type: "workshop",
        location: "Various Rooms",
        icon: Code,
        description: "Choose from 4 parallel workshops",
      },
      {
        time: "1:00 PM",
        title: "Networking Lunch",
        type: "break",
        location: "Exhibition Hall",
        icon: Users,
        description: "Catered lunch with networking opportunities",
      },
      {
        time: "2:30 PM",
        title: "Panel: Building Scalable Systems",
        type: "panel",
        location: "Main Auditorium",
        icon: Mic,
        description: "Industry experts discuss architecture best practices",
      },
      {
        time: "4:00 PM",
        title: "Workshop Session 2",
        type: "workshop",
        location: "Various Rooms",
        icon: Code,
        description: "Second round of hands-on workshops",
      },
      {
        time: "6:00 PM",
        title: "Hackathon Kickoff",
        type: "hackathon",
        location: "Hackathon Arena",
        icon: Trophy,
        description: "Team formation and challenge announcement",
      },
      {
        time: "7:00 PM",
        title: "Welcome Reception",
        type: "social",
        location: "Rooftop Terrace",
        icon: Users,
        description: "Drinks, appetizers, and live music",
      },
    ],
  },
  {
    day: "Day 2 - Saturday, Sept 16",
    date: "Workshop & Hack Day",
    events: [
      {
        time: "8:00 AM",
        title: "Breakfast & Coffee",
        type: "break",
        location: "Main Lobby",
        icon: Users,
        description: "Fuel up for an intensive day",
      },
      {
        time: "9:00 AM",
        title: "Keynote: Quantum Computing Revolution",
        type: "keynote",
        location: "Main Auditorium",
        icon: Mic,
        speaker: "Dr. Marcus Johnson",
        description: "The practical applications of quantum computing",
      },
      {
        time: "10:30 AM",
        title: "Workshop Session 3",
        type: "workshop",
        location: "Various Rooms",
        icon: Code,
        description: "Advanced technical workshops",
      },
      {
        time: "12:00 PM",
        title: "Hackathon Check-in",
        type: "hackathon",
        location: "Hackathon Arena",
        icon: Trophy,
        description: "Progress updates and mentor consultations",
      },
      {
        time: "1:00 PM",
        title: "Lunch & Learn",
        type: "break",
        location: "Exhibition Hall",
        icon: Users,
        description: "Lunch with lightning talks from sponsors",
      },
      {
        time: "2:30 PM",
        title: "Workshop Session 4",
        type: "workshop",
        location: "Various Rooms",
        icon: Code,
        description: "Specialized technology deep-dives",
      },
      {
        time: "4:00 PM",
        title: "Startup Pitch Competition",
        type: "competition",
        location: "Main Auditorium",
        icon: Mic,
        description: "Early-stage startups pitch to investors",
      },
      {
        time: "6:00 PM",
        title: "Hackathon Dinner",
        type: "break",
        location: "Hackathon Arena",
        icon: Users,
        description: "Pizza party for hackathon participants",
      },
      {
        time: "8:00 PM",
        title: "Evening Social & Games",
        type: "social",
        location: "Game Lounge",
        icon: Users,
        description: "Relax with board games and casual networking",
      },
    ],
  },
  {
    day: "Day 3 - Sunday, Sept 17",
    date: "Demo & Awards Day",
    events: [
      {
        time: "9:00 AM",
        title: "Final Day Breakfast",
        type: "break",
        location: "Main Lobby",
        icon: Users,
        description: "Last chance for morning networking",
      },
      {
        time: "10:00 AM",
        title: "Keynote: The Metaverse & Web3",
        type: "keynote",
        location: "Main Auditorium",
        icon: Mic,
        speaker: "Alex Morgan",
        description: "Building the next generation of the internet",
      },
      {
        time: "11:30 AM",
        title: "Final Workshop Session",
        type: "workshop",
        location: "Various Rooms",
        icon: Code,
        description: "Last workshop opportunities",
      },
      {
        time: "1:00 PM",
        title: "Closing Lunch",
        type: "break",
        location: "Exhibition Hall",
        icon: Users,
        description: "Final networking lunch",
      },
      {
        time: "2:30 PM",
        title: "Hackathon Project Submissions",
        type: "hackathon",
        location: "Hackathon Arena",
        icon: Trophy,
        description: "Final project submissions and prep for demos",
      },
      {
        time: "4:00 PM",
        title: "Hackathon Demo Presentations",
        type: "hackathon",
        location: "Main Auditorium",
        icon: Trophy,
        description: "Teams present their projects to judges",
      },
      {
        time: "6:00 PM",
        title: "Awards Ceremony",
        type: "ceremony",
        location: "Main Auditorium",
        icon: Trophy,
        description: "Announcing winners and closing remarks",
      },
      {
        time: "7:30 PM",
        title: "Closing Reception",
        type: "social",
        location: "Rooftop Terrace",
        icon: Users,
        description: "Celebrate with winners and final networking",
      },
    ],
  },
]

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "keynote":
      return "from-purple-600 to-blue-600"
    case "workshop":
      return "from-green-600 to-teal-600"
    case "hackathon":
      return "from-red-600 to-orange-600"
    case "panel":
      return "from-blue-600 to-indigo-600"
    case "competition":
      return "from-yellow-600 to-orange-600"
    case "ceremony":
      return "from-purple-600 to-pink-600"
    case "social":
      return "from-pink-600 to-rose-600"
    case "break":
      return "from-gray-600 to-gray-700"
    default:
      return "from-gray-600 to-gray-700"
  }
}

export default function ScheduleSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1f1f3a] to-[#1a1a2e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Three days packed with keynotes, workshops, hackathon challenges, and networking opportunities. Plan your
            perfect GENESIS experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Keynotes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Workshops</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Hackathon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span>Networking</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-[#252542] rounded-2xl p-8 border border-purple-800/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                  <p className="text-purple-300">{day.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => {
                  const IconComponent = event.icon
                  return (
                    <div
                      key={eventIndex}
                      className="flex gap-4 p-4 bg-[#1a1a2e] rounded-xl border border-purple-800/20 hover:border-purple-600/40 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getEventTypeColor(event.type)} flex items-center justify-center`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                            {event.speaker && <p className="text-sm text-purple-300">by {event.speaker}</p>}
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <div className="flex items-center gap-1 text-sm text-gray-300 mb-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-400">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-800/30">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="text-purple-200 mb-6">
              Add GENESIS to your calendar and get reminders for your favorite sessions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
                Add to Google Calendar
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                Download ICS File
              </button>
              <button className="border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg transition-colors">
                View Mobile Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
