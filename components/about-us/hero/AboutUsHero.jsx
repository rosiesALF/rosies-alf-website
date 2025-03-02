'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import bg from './assets/aboutBg.webp'
import { PrimaryButton } from "@/components/common/buttons/Buttons";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <SectionLayout style={{
            backgroundImage: `url(${bg.src})`
        }} className='bg-cover bg-center text-white flex flex-col gap-6 md:gap-12'>
            <motion.h1
                className="font-playfair font-medium text-3xl md:text-5xl max-w-3xl"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 70
                }}
            >
                Welcome to Rosie's Assisted <motion.span
                    className="font-bold text-richGold"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Living Facility
                </motion.span>, - A Place to Call Home in Scottsdale, Arizona
            </motion.h1>

            <motion.span
                className="md:w-fit"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.6,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 80
                }}
            >
                <PrimaryButton fullWidth />
            </motion.span>
        </SectionLayout>
    );
}
