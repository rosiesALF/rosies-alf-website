import { WhyFamilies } from "@/components/about-us/families/Main";
import { Hero } from "@/components/about-us/hero/AboutUsHero";
import { Introduction } from "@/components/about-us/introduction/Main";
import { MissionAndVision } from "@/components/about-us/missionAndVision/Main";
import { OurStory } from "@/components/about-us/story/Main";
import { Values } from "@/components/about-us/values/Main";

export const metadata = {
    title: "About Us | Rosie's Assisted Living Facility in Scottsdale, Arizona",
    description: "Discover our premier senior living community in Scottsdale, offering personalized care, luxury amenities, and a warm family atmosphere in the heart of Arizona.",
    keywords: [
        "Scottsdale assisted living",
        "Arizona senior care",
        "luxury senior living",
        "Scottsdale retirement home",
        "senior community Arizona",
        "personalized senior care",
        "desert views assisted living"
    ],
    openGraph: {
        title: "About Rosie's Assisted Living | A Place to Call Home in Scottsdale, Arizona",
        description: "Discover our premier senior living community in Scottsdale, offering personalized care, luxury amenities, and a warm family atmosphere in the heart of Arizona.",
        locale: "en_US",
        type: "article",
    },
    other: {
        "geo.position": "33.4942;-111.9261", // Approximate Scottsdale coordinates
        "geo.region": "US-AZ",
        "geo.placename": "Scottsdale, Arizona",
        "og:locality": "Scottsdale",
        "og:region": "Arizona",
        "og:country-name": "United States",
    },
}

export default function AboutUsPage() {
    return (
        <>
            <Hero />
            <Introduction />
            <MissionAndVision />
            <OurStory />
            <Values />
            <WhyFamilies />
        </>
    )
}