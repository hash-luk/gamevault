"use client";

import InformationCardWrapper from "@/app/components/structure/InformationCardWrapper";
import LibraryOverview from "@/app/components/structure/LibraryOverview/LibraryOverview";
import WelcomeSection from "@/app/components/structure/WelcomeSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <WelcomeSection />
      <InformationCardWrapper />
      <LibraryOverview />
    </div>
  );
}
