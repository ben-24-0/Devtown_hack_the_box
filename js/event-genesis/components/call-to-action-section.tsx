"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import RegistrationForm from "./registration-form"

export default function CallToActionSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-[#1f1f3a] to-[#1a1a2e] text-white">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 border border-purple-800/30 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Join GENESIS?
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-8">
            Don't miss out on the most exciting tech event of the year. Register now and secure your spot!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-purple-200">
              <Calendar className="w-5 h-5" />
              <span>September 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <MapPin className="w-5 h-5" />
              <span>Flat Harbor Convention Center</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Clock className="w-5 h-5" />
              <span>3 Days of Innovation</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-purple-100 text-purple-900 hover:bg-purple-200 rounded-full px-12 py-6 text-xl font-semibold"
            >
              Register Now
            </Button>
            <Link href="/schedule">
              <Button
                variant="outline"
                className="border-purple-100 text-purple-100 hover:bg-purple-900/20 rounded-full px-12 py-6 text-xl"
              >
                View Schedule
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/workshops" className="group">
            <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30 hover:border-green-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">Explore Workshops</h3>
              <p className="text-sm text-gray-400 mb-4">20+ hands-on sessions</p>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link href="/hackathon" className="group">
            <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg font-bold mb-2 group-hover:text-red-400 transition-colors">Join Hackathon</h3>
              <p className="text-sm text-gray-400 mb-4">$50K+ in prizes</p>
              <div className="flex items-center gap-2 text-red-400">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link href="/speakers" className="group">
            <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">Meet Speakers</h3>
              <p className="text-sm text-gray-400 mb-4">Industry experts</p>
              <div className="flex items-center gap-2 text-purple-400">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link href="/venue" className="group">
            <div className="bg-[#252542] p-6 rounded-2xl border border-purple-800/30 hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">Venue Info</h3>
              <p className="text-sm text-gray-400 mb-4">Location & amenities</p>
              <div className="flex items-center gap-2 text-yellow-400">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Registration Dialog */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="sm:max-w-[500px] bg-[#1a1a2e] border-purple-800">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Register for GENESIS</DialogTitle>
          </DialogHeader>
          <RegistrationForm onSuccess={() => setIsRegistrationOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  )
}
