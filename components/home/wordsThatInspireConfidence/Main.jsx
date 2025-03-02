'use client'

import { SectionLayout } from "@/components/common/SectionLayout";
import { Title } from "@/components/common/Typography";
import Image from "next/image";
import oldMan from "./assets/oldMan.webp"
import { motion } from "framer-motion";
import { animationProps } from "@/const/animation";

const QuoteIcon = () => (
        <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_19_559)">
    <path d="M26.625 14.7917C28.1942 14.7917 29.6991 15.4151 30.8087 16.5247C31.9183 17.6343 32.5416 19.1392 32.5416 20.7084V38.4584C32.5416 47.718 27.6604 53.821 18.4689 56.1197C18.091 56.2172 17.6975 56.239 17.3112 56.1838C16.9248 56.1286 16.5532 55.9976 16.2177 55.7981C15.8823 55.5987 15.5896 55.3348 15.3565 55.0218C15.1235 54.7087 14.9547 54.3527 14.8598 53.9741C14.765 53.5955 14.746 53.2019 14.8039 52.816C14.8619 52.43 14.9956 52.0594 15.1974 51.7253C15.3993 51.3913 15.6652 51.1005 15.9799 50.8697C16.2946 50.6389 16.6519 50.4726 17.0311 50.3805C23.6193 48.7327 26.625 44.9756 26.625 38.4584V35.5001H17.75C16.2573 35.5006 14.8196 34.9368 13.725 33.9218C12.6305 32.9068 11.9601 31.5157 11.8481 30.0272L11.8333 29.5834V20.7084C11.8333 19.1392 12.4567 17.6343 13.5663 16.5247C14.6759 15.4151 16.1808 14.7917 17.75 14.7917H26.625Z" fill="#A67C52"/>
    <path d="M53.25 14.7917C54.8192 14.7917 56.3241 15.4151 57.4337 16.5247C58.5433 17.6343 59.1666 19.1392 59.1666 20.7084V38.4584C59.1666 47.718 54.2854 53.821 45.0939 56.1197C44.716 56.2172 44.3225 56.239 43.9362 56.1838C43.5498 56.1286 43.1782 55.9976 42.8427 55.7981C42.5073 55.5987 42.2146 55.3348 41.9815 55.0218C41.7485 54.7087 41.5797 54.3527 41.4848 53.9741C41.39 53.5955 41.371 53.2019 41.4289 52.816C41.4869 52.43 41.6206 52.0594 41.8224 51.7253C42.0243 51.3913 42.2902 51.1005 42.6049 50.8697C42.9196 50.6389 43.2769 50.4726 43.6561 50.3805C50.2443 48.7327 53.25 44.9756 53.25 38.4584V35.5001H44.375C42.8823 35.5006 41.4446 34.9368 40.35 33.9218C39.2555 32.9068 38.5851 31.5157 38.4731 30.0272L38.4583 29.5834V20.7084C38.4583 19.1392 39.0817 17.6343 40.1913 16.5247C41.3009 15.4151 42.8058 14.7917 44.375 14.7917H53.25Z" fill="#A67C52"/>
    </g>
    <defs>
    <clipPath id="clip0_19_559">
    <rect width="71" height="71" fill="white"/>
    </clipPath>
    </defs>
    </svg>
)

export function WordsThatInspireConfidence() {
    return (
        <SectionLayout noPadding bgColor='bg-navyBlue' className='grid grid-cols-1 md:grid-cols-2 items-end justify-between text-white gap-2 md:gap-12'>
            <article className="flex flex-col gap-12 md:gap-20 py-12 md:py-[112px]">
                <motion.div {...animationProps}>
                    <Title>
                        Words That Inspire Confidence
                    </Title>
                </motion.div>

                <motion.div {...animationProps}>
                    <p className="px-6 py-10 rounded-tl-2xl max-w-lg rounded-br-2xl bg-champagne text-navyBlue relative">
                        “Ever since my mother moved to Rosie’s Assisted Living, she has found a true home. The team is attentive and caring, and every day she is surrounded by activities that bring her joy. We couldn't have chosen a better place.”

                        <span className="absolute right-1 -top-10">
                            <QuoteIcon/>
                        </span>
                    </p>
                    <h6 className="font-playfair text-champagne text-lg md:text-3xl mt-4">- Ana G., Resident's Daughter</h6>
                </motion.div>
            </article>

            <motion.picture {...animationProps} className="flex justify-center md:justify-end">
                <Image src={oldMan} alt="old man" className="w-full max-w-[564px]"/>
            </motion.picture>
        </SectionLayout>
    )
}