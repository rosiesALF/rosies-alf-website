import { GetToKnowUs } from "@/components/services/getToKnowUs/Main";
import { Hero } from "@/components/services/hero/ServicesHero";
import { ServiceList } from "@/components/services/serviceList/Main";

export const metadata = {
    title: "Comprehensive Care Services | Rosie's Assisted Living Scottsdale",
    description: "Explore our range of senior care services including personal assistance, specialized memory care, wellness programs, and social activities in our Scottsdale, Arizona community.",
    keywords: [
        "senior care services",
        "assisted living care",
        "personal care assistance",
        "memory care Scottsdale",
        "senior wellness programs",
        "elderly meal services",
        "specialized senior care",
        "Arizona assisted living services"
    ],
    openGraph: {
        title: "Comprehensive Care Services | Rosie's Assisted Living Scottsdale",
        description: "Explore our range of senior care services including personal assistance, specialized memory care, wellness programs, and social activities in our Scottsdale, Arizona community.",
        locale: "en_US",
        type: "article",
    },
    twitter: {
        title: "Comprehensive Care Services | Rosie's Assisted Living Scottsdale",
        description: "Explore our range of senior care services including personal assistance, specialized memory care, wellness programs, and social activities in our Scottsdale, Arizona community.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": 170,
        },
    },
    other: {
        "og:service-type": "Assisted Living, Memory Care, Respite Care",
        "article:section": "Senior Care Services",
        "geo.placename": "Scottsdale, Arizona",
    },
}

export default function ServicesPage() {
    return (
        <>
            <Hero />
            <ServiceList />
            <GetToKnowUs />
        </>
    )
}