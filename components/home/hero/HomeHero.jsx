"use client";

import {
    PrimaryButton,
    SecundaryuButton,
} from "@/components/common/buttons/Buttons";
import { SectionLayout } from "@/components/common/SectionLayout";
import heroBg from "./assets/heroBg.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const shapeVariants = {
        hidden: { opacity: 0, rotate: -10, x: -20 },
        visible: {
            opacity: 1,
            rotate: 0,
            x: 0,
            transition: {
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const buttonContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <SectionLayout
            noPadding
            bgColor="bg-navyBlue"
            className="relative grid grid-cols-1 md:grid-cols-2 items-end justify-between text-white md:gap-0 gap-12 pt-6 md:pt-0"
        >
            <motion.article
                className="flex flex-col gap-8 md:gap-12 h-full justify-center text-center items-center md:items-start md:text-left"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                <motion.span variants={textVariants} custom={0}>
                    <p className="font-playfair text-lg md:text-2xl text-champagne">
                        Rosie's Assisted Living
                    </p>
                    <h1 className="font-playfair font-medium text-4xl md:text-7xl">
                        Exceptional <span className="font-bold text-richGold">Care</span>,{" "}
                        <br />
                        <span className="font-bold text-richGold">Meaningful</span> Living
                    </h1>
                </motion.span>

                <motion.p
                    className="max-w-xl md:text-xl"
                    variants={textVariants}
                    custom={1}
                >
                    A home designed for the well-being and peace of mind of your loved
                    ones. Personalized care in a warm and secure environment.
                </motion.p>

                <motion.span
                    className="flex flex-col-reverse md:flex-row items-center gap-4 w-full md:w-fit"
                    variants={buttonContainerVariants}
                >
                    <motion.div variants={buttonVariants} className="w-full md:w-auto">
                        <PrimaryButton fullWidth />
                    </motion.div>
                    <motion.div variants={buttonVariants} className="w-full md:w-auto">
                        <SecundaryuButton fullWidth />
                    </motion.div>
                </motion.span>
            </motion.article>

            <motion.picture
                className="flex justify-center md:justify-end"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <Image
                    src={heroBg}
                    alt="old lady image"
                    className="w-full max-w-[524px]"
                />
            </motion.picture>

            <motion.div
                className="rounded-xl bg-richGold w-[100px] aspect-square absolute bottom-32 md:top-12 -left-12"
                variants={shapeVariants}
                initial="hidden"
                animate="visible"
            />
        </SectionLayout>
    );
}
