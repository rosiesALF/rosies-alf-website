'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import Image from "next/image";
import oldLady from './assets/oldLady.webp'
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";

const cards = [
    {
        title: 'A Scottsdale Retreat',
        desc: 'Our community is located in one of Arizona’s most desirable areas, offering serene desert views, warm weather, and a peaceful atmosphere.'
    },
    {
        title: 'Feels Like Home',
        desc: 'We’ve designed every detail to feel cozy, elegant, and inviting—not like a facility, but like a true home.'
    },
    {
        title: 'Personalized Care',
        desc: 'No two residents are the same, which is why we create customized care plans to meet individual needs.'
    },
    {
        title: 'Engaging Activities',
        desc: 'Whether it’s a sunset social on the patio, yoga classes, or live music, we keep life fun and fulfilling.'
    },
    {
        title: 'Five-Star Dining',
        desc: 'Our chef-prepared meals are made with fresh, high-quality ingredients, blending nutrition with gourmet flavors.'
    },
    {
        title: '24/7 Peace of Mind',
        desc: 'Safety and security are our top priorities, with round-the-clock staff and emergency response systems.'
    },
]

export function WhyFamilies() {
    return (
        <SectionLayout className='grid lg:grid-cols-[464px_1fr] gap-16 mx-auto items-center'>
            <article className="flex flex-col gap-16">
                <motion.span {...animationProps}>
                    <Title>Why Families Choose Rosie’s Assisted Living Facility</Title>
                </motion.span>

                <motion.picture {...animationProps}>
                    <Image src={oldLady} alt="old lady" className="w-full" />
                </motion.picture>
            </article>

            <div className="flex flex-col lg:flex-row justify-end gap-6">
                <ul className="flex flex-col gap-6">
                    {
                        cards.slice(0, 3).map(card => (
                            <Card {...card} key={card.title} />
                        ))
                    }
                </ul>
                <ul className="flex flex-col gap-6 lg:mt-16">
                    {
                        cards.slice(3).map(card => (
                            <Card {...card} key={card.title} />
                        ))
                    }
                </ul>
            </div>
        </SectionLayout>
    )
}

function Card({ title, desc }) {
    return (
        <motion.li {...animationProps} className="flex flex-col gap-2 bg-champagne rounded-xl p-6 max-w-xs shadow-xl shadow-navyBlue/5">
            <h3 className="font-playfair text-elegantTan text-lg md:text-xl font-bold">{title}</h3>
            <p>{desc}</p>
        </motion.li>
    )
}