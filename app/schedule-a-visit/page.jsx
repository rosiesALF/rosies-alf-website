import { SectionLayout } from "@/components/common/SectionLayout";
import { ContactForm } from "@/components/schedule-a-visit/Form";
import Image from "next/image"
import lady from "./assets/lady.webp"

export const metadata = {
    title: "Contact Us | Rosie's Assisted Living Scottsdale",
    description: "Reach out to our Scottsdale assisted living community to schedule a visit, request information, or ask questions about our senior care services and accommodations.",
    keywords: [
        "contact assisted living",
        "schedule senior living tour",
        "Scottsdale assisted living contact",
        "senior care questions",
        "visit assisted living facility",
        "Arizona senior living information",
        "assisted living inquiry"
    ],
    robots: {
        index: true,
        follow: true,
    },
    // other: {
    //     "og:phone_number": "+1 (555) 123-4567", // Replace with actual number
    //     "og:street-address": "123 Care Lane", // Replace with actual address
    //     "og:locality": "Scottsdale",
    //     "og:region": "Arizona",
    //     "og:postal-code": "85251", // Replace with actual zip code
    //     "og:country-name": "United States",
    //     "og:email": "contact@rosiesassistedliving.com", // Replace with actual email
    //     "businesshours": "Mo-Su 08:00-20:00", // Replace with actual hours
    // },
}

export default function ContactPage() {
    return (
        <SectionLayout noPadding className={'py-4 md:py-[44px]'}>
            <div className="px-6 py-6 bg-navyBlue w-fit rounded-tl-2xl rounded-br-2xl mb-8">
                <h1 className='font-playfair text-3xl text-balance md:text-5xl font-medium text-white'>
                    We’re Here to <span className="text-richGold font-bold">Help</span>
                </h1>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-center'>
                <article className="h-full">
                    <p>Whether you're looking to schedule a visit or simply have questions, our team is here to assist you. Fill out the form below, and we’ll reach out to you as soon as possible.</p> <br />
                    <p>Let us know how we can assist you, and our team will be in touch shortly.</p>

                    <div className="mt-10 md:mt-16">
                        <ContactForm />
                    </div>
                </article>

                <picture className="md:flex justify-center md:justify-end hidden">
                    <Image src={lady} alt="smiling lady" className="w-full max-w-[500px]" />
                </picture>
            </div>
        </SectionLayout>
    )
}