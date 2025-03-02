'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { servicesData } from "./ServiceData";
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";

export function ServiceList() {
    return (
        <SectionLayout>
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] xl:grid-cols-3 gap-8">
                {
                    servicesData.map(service => (
                        <ServiceCard key={service.title} {...service} />
                    ))
                }
            </ul>
        </SectionLayout>
    )
}

function ServiceCard({ title, mainIcon, description, services }) {
    return (
        <motion.li {...animationProps} className="p-6 bg-white rounded-lg shadow-md border border-navyBlue/10 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
                <motion.span {...animationProps} className="text-elegantTan">
                    {mainIcon}
                </motion.span>

                <motion.h3 {...animationProps} className="font-playfair text-lg md:text-xl text-elegantTan font-semibold">
                    {title}
                </motion.h3>

                <motion.p {...animationProps}>{description}</motion.p>
            </div>

            <ul className="flex flex-col gap-4">
                {
                    services.map(service => (
                        <li key={service.text}>
                            <motion.div {...animationProps} className="flex items-center gap-2">
                                <span className="text-elegantTan">{service.icon}</span>
                                <p>{service.text}</p>
                            </motion.div>
                        </li>
                    ))
                }
            </ul>
        </motion.li>
    )
}