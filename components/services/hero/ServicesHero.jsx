'use client'

import { PrimaryButton } from "@/components/common/buttons/Buttons";
import { SectionLayout } from "@/components/common/SectionLayout";
import bg from './assets/servicesBg.webp'
import { motion } from "framer-motion";

const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export function Hero() {
    return (
        <SectionLayout style={{
            backgroundImage: `url(${bg.src})`
        }} className='flex flex-col items-center text-white gap-6 text-center bg-cover bg-center'>
            <motion.div {...animationProps}>
                <h1 className='font-playfair text-3xl text-balance md:text-5xl font-medium'>
                Our Comprehensive <span className="font-bold text-richGold">Care</span> Services
                </h1>
            </motion.div>

            <motion.p {...animationProps} className="max-w-2xl mb-8">Schedule a visit to see firsthand how we can provide the best care for your loved one. We're here to answer your questions and guide you through this important decision.</motion.p>

            <motion.span {...animationProps}>
                <PrimaryButton />
            </motion.span>
        </SectionLayout>
    )
}