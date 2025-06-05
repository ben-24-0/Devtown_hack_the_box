import Navigation from "@/components/navigation"
import SponsorsSection from "@/components/sponsors-section"
import Footer from "@/components/footer"

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <div className="pt-20">
        <SponsorsSection />
      </div>
      <Footer />
    </main>
  )
}
