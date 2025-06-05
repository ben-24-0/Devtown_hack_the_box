import Navigation from "@/components/navigation"
import SpeakersSection from "@/components/speakers-section"
import Footer from "@/components/footer"

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <div className="pt-20">
        <SpeakersSection />
      </div>
      <Footer />
    </main>
  )
}
