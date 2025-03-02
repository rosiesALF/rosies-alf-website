'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import Image from "next/image";
import missionImage from './assets/missionImage.webp'
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";

export const imageProps = {
    initial: { scale: 0.9 },
    whileInView: { scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

export function MissionAndVision() {
    return (
        <SectionLayout className='grid md:grid-cols-3 gap-6 md:gap-0 items-center'>

            <motion.div {...animationProps} className="flex flex-col gap-6 md:gap-8 p-12 rounded-xl md:rounded-r-none md:rounded-l-2xl bg-champagne">
                <div className="h-[10px] w-[50px] rounded-full bg-skyBlue"/>
                <Title className='text-elegantTan'>Our Mission</Title>
                <p>To provide compassionate, high-quality care in a beautiful, resort-style setting, giving seniors the peace of mind and dignity they deserve while embracing the vibrant Scottsdale lifestyle.</p>
            </motion.div>

            <motion.picture {...imageProps}>
                <Image src={missionImage} alt="old lady" className="rounded-xl shadow-xl shadow-navyBlue/10"/>
            </motion.picture>

            <motion.div {...animationProps} className="flex flex-col gap-6 md:gap-8 p-12 rounded-xl md:rounded-l-none md:rounded-r-2xl bg-champagne">
                <div className="h-[10px] w-[50px] rounded-full bg-skyBlue"/>
                <Title className='text-elegantTan'>Our Vision</Title>
                <p>To be Scottsdale’s premier assisted living community, where seniors receive the finest care, enjoy a high quality of life, and feel truly at home.</p>
            </motion.div>

        </SectionLayout>
    )
}