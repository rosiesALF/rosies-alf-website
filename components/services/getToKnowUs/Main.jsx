'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import Image from "next/image";
import oldMan from "./assets/oldMan.webp"
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";
import { PrimaryButton, SecundaryuButton } from "@/components/common/buttons/Buttons";

export function GetToKnowUs() {
    return (
        <SectionLayout noPadding bgColor='bg-champagne' className='grid grid-cols-1 md:grid-cols-2 items-end justify-between gap-2 md:gap-12'>
            <article className="flex flex-col gap-8 py-12 md:py-[112px] h-full justify-center">
                <motion.div {...animationProps}>
                    <Title className='text-elegantTan'>
                        Would You Like to Get to Know Us Better?
                    </Title>
                </motion.div>

                <motion.p {...animationProps}>We’d love to welcome you for a visit or a personalized consultation. We’re here to answer your questions and help you find the best care for yourself or your loved one.</motion.p>

                <motion.span {...animationProps} className="flex flex-wrap items-center gap-4">
                    <div className="w-full md:w-fit">
                        <PrimaryButton fullWidth theme="dark" />
                    </div>
                    <div className="w-full md:w-fit">
                        <SecundaryuButton fullWidth theme="dark">See How We Care for Our Residents</SecundaryuButton>
                    </div>
                </motion.span>
            </article>

            <motion.picture {...animationProps} className="flex justify-center md:justify-end">
                <Image src={oldMan} alt="old man" className="w-full max-w-[564px]" />
            </motion.picture>
        </SectionLayout>
    )
}