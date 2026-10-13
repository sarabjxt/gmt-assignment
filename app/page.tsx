import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/homepage/hero-section";
import { HopeSection } from "@/components/homepage/hope-section";
import { WhoWeHelpSection } from "@/components/homepage/who-we-help-section";
import { StoryQuoteSection } from "@/components/homepage/story-quote-section";
import { ExpertiseSection } from "@/components/homepage/expertise-section";
import { HowWeWorkSection } from "@/components/homepage/how-we-work-section";
import { JourneySection } from "@/components/homepage/journey-section";
import { SpecialtiesSection } from "@/components/homepage/specialties-section";
import { TherapistCtaSection } from "@/components/homepage/therapist-cta-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <HopeSection />
      <WhoWeHelpSection />
      <StoryQuoteSection />
      <ExpertiseSection />
      <HowWeWorkSection />
      <JourneySection />
      <SpecialtiesSection />
      <TherapistCtaSection />
      <Footer />
    </main>
  );
}
