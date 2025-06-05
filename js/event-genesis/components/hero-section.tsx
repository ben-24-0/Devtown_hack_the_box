"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import RegistrationForm from "./registration-form"
import { Menu, X } from "lucide-react"

export default function HeroSection() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-[#1a1a2e]/90 to-blue-900/80 z-0"></div>

      {/* Curved shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#1a1a2e] rounded-t-[50%] z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-6">
        <header className="flex items-center justify-between py-4 mb-12">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="FHC Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-white hover:text-purple-200 transition-colors">
              Home
            </Link>
            <Link href="/workshops" className="text-white hover:text-purple-200 transition-colors">
              Workshops
            </Link>
            <Link href="/hackathon" className="text-white hover:text-purple-200 transition-colors">
              Hackathon
            </Link>
            <Link href="/schedule" className="text-white hover:text-purple-200 transition-colors">
              Schedule
            </Link>
            <Link href="/speakers" className="text-white hover:text-purple-200 transition-colors">
              Speakers
            </Link>
            <Link href="/venue" className="text-white hover:text-purple-200 transition-colors">
              Venue
            </Link>
            <Link href="/sponsors" className="text-white hover:text-purple-200 transition-colors">
              Sponsors
            </Link>
            <Link href="/faq" className="text-white hover:text-purple-200 transition-colors">
              FAQ
            </Link>
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-purple-100 text-purple-900 hover:bg-purple-200 rounded-full px-8 ml-4"
            >
              Register
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-purple-900/20 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-purple-800/30 z-50">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  Home
                </Link>
                <Link
                  href="/workshops"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  Workshops
                </Link>
                <Link
                  href="/hackathon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  Hackathon
                </Link>
                <Link
                  href="/schedule"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  Schedule
                </Link>
                <Link
                  href="/speakers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  Speakers
                </Link>
                <Link
                  href="/venue"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  Venue
                </Link>
                <Link
                  href="/sponsors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  Sponsors
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800/20"
                >
                  FAQ
                </Link>
                <Button
                  onClick={() => {
                    setIsRegistrationOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-purple-100 text-purple-900 hover:bg-purple-200 rounded-full px-8 w-fit mt-4"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h1 className="text-7xl md:text-9xl font-bold tracking-widest text-white mb-8">G E N E S I S</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mb-8">
            A 3-day immersive tech conference featuring cutting-edge workshops, an epic hackathon, and industry-leading
            speakers shaping the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-purple-100 text-purple-900 hover:bg-purple-200 rounded-full px-8 py-6 text-lg"
            >
              Register Now
            </Button>
            <Link href="/schedule">
              <Button
                variant="outline"
                className="border-purple-100 text-purple-100 hover:bg-purple-900/20 rounded-full px-8 py-6 text-lg"
              >
                View Schedule
              </Button>
            </Link>
          </div>
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
