import Navigation from "@/components/navigation"
import HackathonSection from "@/components/hackathon-section"
import Footer from "@/components/footer"

export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <div className="pt-20">
        <HackathonSection />
      </div>
      <Footer />
    </main>
  )
}
