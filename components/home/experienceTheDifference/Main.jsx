'use client'

import { PrimaryButton } from "@/components/common/buttons/Buttons";
import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import bg from './assets/differenceBg.webp'
import { animationProps } from "@/const/animation";
import { motion } from "framer-motion";

export function ExperienceTheDifference() {
    return (
        <SectionLayout style={{
            backgroundImage: `url(${bg.src})`
        }} className='flex flex-col items-center gap-6 text-center bg-cover bg-center'>
            <motion.div {...animationProps}>
                <Title className='text-elegantTan'>Experience the Difference - Visit Us Today</Title>
            </motion.div>

            <motion.p {...animationProps} className="max-w-2xl mb-8">Schedule a visit to see firsthand how we can provide the best care for your loved one. We're here to answer your questions and guide you through this important decision.</motion.p>

            <motion.span {...animationProps}>
                <PrimaryButton theme="dark"/>
            </motion.span>
        </SectionLayout>
    )
}