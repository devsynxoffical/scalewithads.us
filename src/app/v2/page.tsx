import React from "react";
import { FloatingNavbar } from "@/components/redesign/FloatingNavbar";
import { AdGenieHero } from "@/components/redesign/AdGenieHero";
import { TrustBarSection } from "@/components/redesign/TrustBarSection";
import { EditorialSubhero } from "@/components/redesign/EditorialSubhero";
import { FourWaysSection } from "@/components/redesign/FourWaysSection";
import { DifferenceSection } from "@/components/redesign/DifferenceSection";
import { ResultsSection } from "@/components/redesign/ResultsSection";
import { SelectedWorkShowcase } from "@/components/redesign/SelectedWorkShowcase";
import { StickyContentScroll } from "@/components/redesign/StickyContentScroll";
import { OwnershipSection } from "@/components/redesign/OwnershipSection";
import { MeetTheTeamSection } from "@/components/redesign/MeetTheTeamSection";
import { GuaranteeSection } from "@/components/redesign/GuaranteeSection";
import { PricingSection } from "@/components/redesign/PricingSection";
import { CommunitySection } from "@/components/redesign/CommunitySection";
import { ClientTestimonialsSection } from "@/components/redesign/ClientTestimonialsSection";
import { FaqSection } from "@/components/redesign/FaqSection";
import { ProcessSection } from "@/components/redesign/ProcessSection";
import { LusionEndSection } from "@/components/redesign/LusionEndSection";
import { EditorialFooter } from "@/components/redesign/EditorialFooter";

export const metadata = {
  title: "Scale With Ads™ | Proprietary Client Acquisition System",
  description:
    "We install our proprietary Scale With Ads™ Client Acquisition System into your business and double your revenue in 90 days, or we work at no management fee until we do. Backed by a written agreement.",
};

export default function RedesignPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-purple-200 selection:text-purple-950">
      {/* 1. Floating Navigation */}
      <FloatingNavbar />

      {/* 2. Hero with VSL & Headline */}
      <div id="home">
        <AdGenieHero />
      </div>

      {/* 3. Trust Bar (Immediately below hero) */}
      <TrustBarSection />

      {/* 4. Editorial Subhero (Manifesto Scroll Reveal + Real Client Photo Marquee) */}
      <div id="problem">
        <EditorialSubhero />
      </div>

      {/* 5. Merged Ecosystem Difference Section (4 Journey Steps + 5 Interactive Advantage Cards) */}
      <div id="difference">
        <DifferenceSection />
      </div>

      {/* 7. Section 4: Real Client Results (Separate Standalone Section) */}
      <div id="results">
        <ResultsSection />
      </div>

      {/* 8. Selected Work Showcase (Lunvoro Layout: Sticky Left Header + 3D Un-tilting Scroll Cards) */}
      <div id="work">
        <SelectedWorkShowcase />
      </div>

      {/* 10. Process & System Training Videos */}
      <div id="process">
        <StickyContentScroll />
        <ProcessSection />
      </div>

      {/* 11. Ownership Guarantee */}
      <div id="included">
        <OwnershipSection />
      </div>

      {/* 12. Meet The Team (Lunvoro Interactive Card Stacking & Unfolding) */}
      <div id="team">
        <MeetTheTeamSection />
      </div>

      {/* 13. Our 90-Day Written Guarantee */}
      <div id="guarantee">
        <GuaranteeSection />
      </div>

      {/* Engagement options — no dollar amounts shown */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Verified Client Video Testimonials */}
      <ClientTestimonialsSection />

      {/* 15. Private Community Section */}
      <div id="community">
        <CommunitySection />
      </div>

      {/* 16. Frequently Asked Questions */}
      <div id="faq">
        <FaqSection />
      </div>

      {/* 16. Lusion Interactive End Section */}
      <LusionEndSection />

      {/* 17. Editorial Footer */}
      <EditorialFooter />
    </main>
  );
}
