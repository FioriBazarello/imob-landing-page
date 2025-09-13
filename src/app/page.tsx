import ContentSection from "@/components/content-1";
import CallToActionSection from "@/components/call-to-action";
import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import FeaturesSection from "@/components/features-12";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
