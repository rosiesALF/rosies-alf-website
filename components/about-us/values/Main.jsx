'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";

const CrowdIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg>
)

const HandShakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" /></svg>
)

const WineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-glass"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 21h8" /><path d="M12 16v5" /><path d="M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6" /><path d="M12 5m-5 0a5 2 0 1 0 10 0a5 2 0 1 0 -10 0" /></svg>
)

const Baloon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-balloon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 8a2 2 0 0 0 -2 -2" /><path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" /><path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" /></svg>
)

const CrystalBall = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-crystal-ball"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.73 17.018a8 8 0 1 1 10.54 0" /><path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z" /><path d="M11 7a3 3 0 0 0 -3 3" /></svg>
)

const values = [
    {
        icon: <CrowdIcon></CrowdIcon>,
        title: 'Community & Connection',
        desc: 'We create a true family atmosphere where residents build friendships and feel a sense of belonging.'
    },
    {
        icon: <HandShakeIcon></HandShakeIcon>,
        title: 'Compassionate Care',
        desc: 'Our dedicated team provides personalized, attentive support tailored to each resident’s unique needs.'
    },
    {
        icon: <WineIcon></WineIcon>,
        title: 'Luxury & Comfort',
        desc: 'From beautifully designed private rooms to relaxing outdoor spaces, we make every detail warm and inviting.'
    },
    {
        icon: <Baloon></Baloon>,
        title: 'Wellness & Joy',
        desc: 'Life is about more than just care—it’s about enjoying each day, staying active, and feeling fulfilled.'
    },
    {
        icon: <CrystalBall></CrystalBall>,
        title: 'Trust & Transparency',
        desc: 'We keep families informed and involved, making sure you always feel connected to your loved one’s well-being.'
    },
]

export function Values() {
    return (
        <SectionLayout bgColor='bg-champagne' className='flex flex-col items-center gap-12 md:gap-20'>
            <motion.div {...animationProps}>
                <Title className='text-center'>Our Values - What Makes Us Special</Title>
            </motion.div>

            <ul className="flex justify-center gap-6 md:gap-12 flex-wrap">
                {
                    values.map((value) => (
                        <Card key={value.title} {...value} />
                    ))
                }
            </ul>
        </SectionLayout>
    )
}

function Card({ icon, title, desc }) {
    return (
        <motion.li {...animationProps} className="flex flex-col gap-2 bg-white rounded-xl p-6 max-w-sm shadow-xl shadow-navyBlue/5">
            <span className="text-elegantTan">
                {icon}
            </span>
            <h3 className="font-playfair text-elegantTan text-xl md:text-2xl font-bold">{title}</h3>
            <p>{desc}</p>
        </motion.li>
    )
}