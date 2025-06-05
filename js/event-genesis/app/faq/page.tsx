import Navigation from "@/components/navigation"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
