'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import Image from "next/image";
import image1 from './assets/image1.webp'
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";
import { Title } from "@/components/common/Typography";

export function OurStory() {
    return (
        <SectionLayout bgColor='bg-navyBlue' className='grid text-white md:grid-cols-2 items-center gap-12 md:gap-16'>
            <motion.picture {...animationProps}>
                <Image src={image1} alt="old building" className="rounded-tl-4xl rounded-br-4xl" />
            </motion.picture>

            <motion.article {...animationProps}>
                <Title className='text-richGold'>Our Story - Inspired by Family, Built with Love</Title> <br />
                <p>Rosie’s Assisted Living Facility was founded on a deep passion for helping seniors live their golden years with dignity, joy, and comfort.</p> <br />

                <p>We saw a need for a place that blends high-quality care with the elegance and warmth of a true home. Scottsdale is known for its beautiful landscapes, upscale living, and sense of community, and we wanted to create an assisted living home that embodies all of that.</p> <br />

                <p>From our thoughtfully designed spaces to our attentive caregivers, everything we do is about making life easier, more enjoyable, and stress-free for our residents and their families.</p>
            </motion.article>
        </SectionLayout>
    )
}