import FeatureCards from "@/components/pages/feature-cards"
import Hero from "@/components/pages/hero"
import { PWARedirect } from "@/components/pwa-redirect"

export default function Home() {
  return (
    <main>
      <Hero />
      <PWARedirect />
    </main>
  )
}
