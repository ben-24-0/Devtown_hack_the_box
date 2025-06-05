import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import QuickInfoSection from "@/components/quick-info-section"
import FeaturedSpeakersSection from "@/components/featured-speakers-section"
import CallToActionSection from "@/components/call-to-action-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <HeroSection />
      <div id="about" className="scroll-mt-20">
        <AboutSection />
      </div>
      <div id="quick-info" className="scroll-mt-20">
        <QuickInfoSection />
      </div>
      <div id="featured-speakers" className="scroll-mt-20">
        <FeaturedSpeakersSection />
      </div>
      <div id="cta" className="scroll-mt-20">
        <CallToActionSection />
      </div>
      <Footer />
    </main>
  )
}
