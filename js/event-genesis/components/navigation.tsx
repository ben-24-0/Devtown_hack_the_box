"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Menu, X } from "lucide-react"
import RegistrationForm from "./registration-form"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/workshops", label: "Workshops" },
  { href: "/hackathon", label: "Hackathon" },
  { href: "/schedule", label: "Schedule" },
  { href: "/speakers", label: "Speakers" },
  { href: "/venue", label: "Venue" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/faq", label: "FAQ" },
]

export default function Navigation() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-purple-800/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="FHC Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-purple-600/20 text-purple-300 border border-purple-600/30"
                      : "text-white hover:text-purple-200 hover:bg-purple-900/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-purple-800/30">
                <Button
                  onClick={() => setIsRegistrationOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6 py-2 font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                >
                  Register Now
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-purple-900/20 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-purple-800/30">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-purple-600/20 text-purple-300 border border-purple-600/30"
                        : "text-white hover:text-purple-200 hover:bg-purple-900/20"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-purple-800/30">
                  <Button
                    onClick={() => {
                      setIsRegistrationOpen(true)
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6 py-3 font-semibold transition-all duration-200"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Registration Dialog */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="sm:max-w-[500px] bg-[#1a1a2e] border-purple-800">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Register for GENESIS</DialogTitle>
          </DialogHeader>
          <RegistrationForm onSuccess={() => setIsRegistrationOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
