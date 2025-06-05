"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is GENESIS?",
        answer:
          "GENESIS is a 3-day tech conference featuring workshops, hackathon, keynotes, and networking opportunities for developers, designers, and tech enthusiasts.",
      },
      {
        question: "When and where is GENESIS 2025?",
        answer:
          "GENESIS takes place September 15-17, 2025 at the Flat Harbor Convention Center in Tech City. We offer both in-person and virtual attendance options.",
      },
      {
        question: "Who should attend GENESIS?",
        answer:
          "GENESIS is perfect for developers, designers, entrepreneurs, students, and anyone interested in technology and innovation. All skill levels are welcome.",
      },
      {
        question: "What's included in my ticket?",
        answer:
          "Your ticket includes access to all keynotes, workshops, networking events, meals, and the hackathon. Premium tickets include additional perks like VIP seating and exclusive networking sessions.",
      },
    ],
  },
  {
    category: "Registration",
    questions: [
      {
        question: "How much does it cost to attend?",
        answer:
          "Standard tickets are $299, Premium tickets are $499, and VIP tickets are $799. Student discounts and group rates are available.",
      },
      {
        question: "Is there a student discount?",
        answer:
          "Yes! Students get 50% off all ticket types with valid student ID. Use code STUDENT50 during registration.",
      },
      {
        question: "Can I get a refund if I can't attend?",
        answer:
          "Full refunds are available until August 15, 2025. After that date, tickets can be transferred to another person but are non-refundable.",
      },
      {
        question: "Can I attend virtually?",
        answer:
          "Yes! Virtual tickets are available for $99 and include access to live streams of all keynotes and select workshops.",
      },
    ],
  },
  {
    category: "Workshops",
    questions: [
      {
        question: "How do workshop reservations work?",
        answer:
          "Workshop spots are reserved on a first-come, first-served basis. You can reserve spots during registration or through your attendee portal.",
      },
      {
        question: "What if a workshop is full?",
        answer:
          "We maintain waitlists for popular workshops. You'll be notified if a spot opens up. We also record workshops for later viewing.",
      },
      {
        question: "Do I need to bring my own laptop?",
        answer:
          "Yes, please bring your own laptop for hands-on workshops. We'll provide power outlets and high-speed WiFi.",
      },
      {
        question: "What skill level are the workshops?",
        answer:
          "We offer workshops for all skill levels, clearly marked as Beginner, Intermediate, or Advanced. Check the workshop descriptions for prerequisites.",
      },
    ],
  },
  {
    category: "Hackathon",
    questions: [
      {
        question: "Do I need a team for the hackathon?",
        answer:
          "No! You can participate solo or we'll help you find a team during the team formation session on Friday evening.",
      },
      {
        question: "What can I build during the hackathon?",
        answer:
          "Anything! We have several themed categories, but you're free to build any software project. Hardware hacking is also allowed with provided components.",
      },
      {
        question: "What prizes can I win?",
        answer:
          "The total prize pool is $50,000+ including cash prizes, tech gear, mentorship opportunities, and startup incubator access.",
      },
      {
        question: "Can I start working on my project before the hackathon?",
        answer:
          "No, all code must be written during the 48-hour hackathon period. However, you can come with ideas and do research beforehand.",
      },
    ],
  },
  {
    category: "Logistics",
    questions: [
      {
        question: "Is parking available?",
        answer:
          "Yes, free parking is available for all attendees. The venue has 500+ parking spaces with valet service available for premium ticket holders.",
      },
      {
        question: "What about food and drinks?",
        answer:
          "All meals, snacks, and beverages are included in your ticket. We accommodate dietary restrictions - just let us know during registration.",
      },
      {
        question: "Is the venue accessible?",
        answer:
          "Yes, the Flat Harbor Convention Center is fully accessible with ramps, elevators, and accessible restrooms throughout the facility.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring your laptop, chargers, business cards, and comfortable clothes. We'll provide everything else including swag bags, notebooks, and pens.",
      },
    ],
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-[#1f1f3a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about GENESIS 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <div key={faqIndex} className="bg-[#252542] rounded-xl border border-purple-800/30 overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-[#2a2a4a] transition-colors"
                      >
                        <h4 className="text-lg font-semibold pr-4">{faq.question}</h4>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border border-cyan-800/30">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-cyan-200 mb-6">Can't find what you're looking for? Our team is here to help!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg transition-colors">
                Contact Support
              </button>
              <button className="border border-cyan-600 text-cyan-300 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg transition-colors">
                Join Our Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
