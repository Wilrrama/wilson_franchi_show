import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Discography } from "@/components/discography"
import { Classes } from "@/components/classes"
import { RadioSection } from "@/components/radio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Discography />
      <Classes />
      <RadioSection />
      <Contact />
      <Footer />
    </main>
  )
}
