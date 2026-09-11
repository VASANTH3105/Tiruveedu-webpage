import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExploreMapSection from "@/components/ExploreMapSection";
import FeaturedListings from "@/components/FeaturedListings";
import ReviewsAndInfoSection from "@/components/ReviewsAndInfoSection";
import PlanVisitCTA from "@/components/PlanVisitCTA";
import SectionPlaceholders from "@/components/SectionPlaceholders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-offwhite text-text-dark">
      {/* Navbar */}
      <Navbar />
      
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Explore Tiruvannamalai Interactive Map Section */}
        <ExploreMapSection />

        {/* Featured Listings Section */}
        <FeaturedListings />

        {/* Reviews and Quick Info Pills Section */}
        <ReviewsAndInfoSection />

        {/* Section 2: "Plan Your Visit" CTA Banner */}
        <PlanVisitCTA />

        {/* Placeholders for future sections: Events, Stats */}
        <SectionPlaceholders />
      </main>

      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
}
