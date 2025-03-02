import { DignityAndCare } from "@/components/home/dignityAndCare/Main";
import { ExperienceTheDifference } from "@/components/home/experienceTheDifference/Main";
import { Hero } from "@/components/home/hero/HomeHero";
import { MoreThanAPlace } from "@/components/home/moreThanAPlace/Main";
import { PremiumFacilities } from "@/components/home/premiumFacilities/Main";
import { WordsThatInspireConfidence } from "@/components/home/wordsThatInspireConfidence/Main";

export default function Home() {
  return (
    <>
      <Hero/>
      <DignityAndCare/>
      <MoreThanAPlace/>
      <WordsThatInspireConfidence/>
      <PremiumFacilities/>
      <ExperienceTheDifference/>
    </>
  );
}
