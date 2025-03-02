'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "@/app/Logo";
import { PrimaryButton } from "../buttons/Buttons";

const Menu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
)

const X = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
)

export const navLinks = [
    {
        label: 'About Us',
        href: '/about-us'
    },
    {
        label: 'Services',
        href: '/services'
    },
    // {
    //     label: 'Gallery',
    //     href: '/gallery'
    // },
]

export function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const path = usePathname()
    const [isOpen, setIsOpened] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        // Verificar si estamos en el cliente (navegador)
        if (typeof window !== 'undefined') {
            setScreenWidth(window.innerWidth); // Establecer el ancho de la pantalla en el cliente
        }

        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setScreenWidth(window.innerWidth);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (screenWidth >= 768) {
            setIsOpened(false);
        }
    }, [screenWidth]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Limpia el event listener al desmontar
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setIsOpened(false) }, [path])

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <motion.header
            initial={{
                y: -200, // Posición inicial, fuera de la pantalla hacia arriba
            }}
            animate={{
                y: 0, // Posición final, posición original
                // backgroundColor: isScrolled || isOpen ? "rgba(52, 52, 52, 0.7)" : "rgba(52, 52, 52, 0)",
                // backdropFilter: isOpen ? "blur(10px)" : "blur(0px)",
                height: isOpen ? '100%' : 'auto'
            }}
            transition={{
                duration: 0.1, // Duración de la animación en segundos
                ease: "easeOut", // Curva de animación
            }}
            className={`w-full transition-transform fixed font-lato z-50 bg-navyBlue text-white top-0 px-4 md:px-[112px] py-4 nav:py-[12px]`}>
            <div className="w-full mx-auto max-w-[1700px] flex flex-wrap items-center justify-between">
                <Link className="transition-all hover:scale-105 ease-in-out" href='/'>
                    <Logo />
                </Link>

                <nav className="hidden nav:flex items-center gap-12">
                    <NavOptions />
                    <PrimaryButton/>
                </nav>

                <nav className="nav:hidden">
                    <button onClick={() => setIsOpened(!isOpen)}>
                        {
                            isOpen ? <X /> : <Menu />
                        }
                    </button>
                </nav>

                {
                    isOpen ?
                        <div className="nav:hidden h-full flex flex-col items-center pt-10 basis-full">
                            <motion.nav
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="divide-y divide-white/20 flex flex-col w-full"
                            >
                                <NavOptions />
                            </motion.nav>

                            <motion.span
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full mt-2"
                            >
                                <PrimaryButton fullWidth/>
                            </motion.span>
                        </div>
                        : <></>
                }
            </div>
        </motion.header>
    )
}

const NavLink = ({ children, className, href }) => (
    <Link href={href} className={`flex items-center justify-center py-4 nav:py-0 ${className}`}>
        {children}
    </Link>
)

function NavOptions() {

    const path = usePathname()

    const selectedStyle = 'w-full text-center text-nowrap text-richGold'
    const unselectedStyle = 'transition-colors w-full text-center text-nowrap hover:text-richGold'

    return (
        <>
            {
                navLinks.map(({label, href}) => (
                    <NavLink key={label} href={href} className={`${path === href ? selectedStyle : unselectedStyle}`}>{label}</NavLink>
                ))
            }
        </>
    )
}