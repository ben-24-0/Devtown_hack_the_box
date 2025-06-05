import Navigation from "@/components/navigation"
import ScheduleSection from "@/components/schedule-section"
import Footer from "@/components/footer"

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <div className="pt-20">
        <ScheduleSection />
      </div>
      <Footer />
    </main>
  )
}
