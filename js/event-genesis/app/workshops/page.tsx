import Navigation from "@/components/navigation"
import WorkshopsSection from "@/components/workshops-section"
import Footer from "@/components/footer"

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <div className="pt-20">
        <WorkshopsSection />
      </div>
      <Footer />
    </main>
  )
}
