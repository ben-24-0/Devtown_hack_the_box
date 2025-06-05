import Navigation from "@/components/navigation"
import VenueSection from "@/components/venue-section"
import Footer from "@/components/footer"

export default function VenuePage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <div className="pt-20">
        <VenueSection />
      </div>
      <Footer />
    </main>
  )
}
