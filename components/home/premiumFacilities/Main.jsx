'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import { animationProps } from "@/const/animation";
import { motion } from "framer-motion";
import { Carousel } from "./Carousel";

export function PremiumFacilities() {
    return (
        <SectionLayout className='grid md:grid-cols-2 gap-12 md:gap-24'>
            <Carousel />

            <article className="flex flex-col gap-6">
                <motion.div {...animationProps}>
                    <Title className='text-skyBlue'>Premium Facilities for a Fulfilling Life</Title>
                </motion.div>

                <motion.div {...animationProps}>
                    <p>Our suites are designed with the perfect balance of comfort, safety, and elegance. Each room is thoughtfully furnished to create a warm, inviting atmosphere while ensuring accessibility and ease of movement for all residents. With features such as spacious layouts, emergency call systems, and private or shared options, our accommodations provide both independence and peace of mind.</p> <br />
                    <p>At Rosie’s Assisted Living, every detail has been carefully considered to create an environment where residents feel truly at home, supported, and empowered to live life to the fullest.</p>
                </motion.div>
            </article>
        </SectionLayout>
    )
}