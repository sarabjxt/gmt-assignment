import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/homepage/hero-section";
import { HopeSection } from "@/components/homepage/hope-section";
import { WhoWeHelpSection } from "@/components/homepage/who-we-help-section";
import { SpecialtiesSection } from "@/components/homepage/specialties-section";
import { HowWeWorkSection } from "@/components/homepage/how-we-work-section";
import { JourneySection } from "@/components/homepage/journey-section";
import { ExpertiseSection } from "@/components/homepage/expertise-section";
import { StoryQuoteSection } from "@/components/homepage/story-quote-section";
import { TherapistCtaSection } from "@/components/homepage/therapist-cta-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent/20">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <HopeSection />
        <WhoWeHelpSection />
        <SpecialtiesSection />
        <HowWeWorkSection />
        <JourneySection />
        <ExpertiseSection />
        <StoryQuoteSection />
        <TherapistCtaSection />
      </main>
      <Footer />
    </div>
  );
}
