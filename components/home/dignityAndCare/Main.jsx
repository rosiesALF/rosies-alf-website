'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import Image from "next/image";
import couple from './assets/couple.webp'
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";

export function DignityAndCare() {
    return (
        <SectionLayout className='grid md:grid-cols-2 items-center gap-12 md:gap-16'>
            <motion.picture {...animationProps}>
                <Image src={couple} alt="old couple" className="rounded-tl-4xl rounded-br-4xl"/>
            </motion.picture>

            <motion.article {...animationProps} className="flex flex-col gap-6">
                <Title className='text-skyBlue'>A Place Where Life is Lived with Dignity and Care</Title>
                <p>At Rosie’s Assisted Living, we believe that everyone deserves a home where they feel safe, valued, and cared for. Our team of professionals provides personalized, comprehensive care, ensuring that every resident enjoys their daily life with independence and well-being.</p>
            </motion.article>
        </SectionLayout>
    )
}