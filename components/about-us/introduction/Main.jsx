'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import Image from "next/image";
import image1 from './assets/image1.webp'
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";

export function Introduction() {
    return (
        <SectionLayout className='grid md:grid-cols-2 items-center gap-12 md:gap-16'>
            <motion.article {...animationProps}>
                <p>At Rosie’s Assisted Living Facility, we believe that senior living should be more than just care—it should be a home filled with warmth, comfort, and meaningful connections. Located in the heart of Scottsdale, Arizona, we provide a luxurious yet inviting environment where seniors can enjoy sun-filled days, personalized care, and a strong sense of community.</p> <br />
                <p>We know that choosing an assisted living home is an emotional decision, and we want you to feel confident knowing that your loved ones will be cared for like family. Here, every resident is treated with kindness, respect, and the highest level of attention.</p> <br />
                <p>Whether it's relaxing on our scenic patios with views of the Arizona desert, enjoying chef-crafted meals, or participating in engaging social activities, our goal is to create a lifestyle that feels just right—with the perfect balance of support and independence.</p>
            </motion.article>

            <motion.picture {...animationProps}>
                <Image src={image1} alt="old building" className="rounded-tl-4xl rounded-br-4xl" />
            </motion.picture>
        </SectionLayout>
    )
}