import Link from "next/link"

export function PrimaryButton({ children = 'Schedule a Visit', href = '/schedule-a-visit', theme = 'light', fullWidth = false }) {
    if (theme === 'light') {
        return (
            <Link href={href} className={`px-6 py-3 transition-colors min-h-[40px] grid place-items-center font-bold rounded-xl ${fullWidth ? 'w-full' : 'w-fit'} bg-champagne text-navyBlue text-base text-nowrap transition-colors hover:bg-richGold shadow-lg shadow-champagne/20`}>
                {children}
            </Link>
        )
    }

    if (theme === 'dark') {
        return (
            <Link href={href} className={`px-6 py-3 transition-colors min-h-[40px] grid place-items-center font-bold rounded-xl ${fullWidth ? 'w-full' : 'w-fit'} text-base bg-navyBlue text-white text-nowrap transition-colors hover:bg-skyBlue shadow-lg shadow-navyBlue/20`}>
                {children}
            </Link>
        )
    }
}

export function SecundaryuButton({ children = 'Learn More', href = '/about-us', theme = 'light', fullWidth = false }) {
    if (theme === 'light') {
        return (
            <Link href={href} className={`px-6 py-3 transition-colors min-h-[40px] grid place-items-center font-bold rounded-xl ${fullWidth ? 'w-full' : 'w-fit'} border-2 border-champagne text-champagne text-base text-nowrap transition-colors hover:bg-richGold`}>
                {children}
            </Link>
        )
    }

    if (theme === 'dark') {
        return (
            <Link href={href} className={`px-6 py-3 transition-colors min-h-[40px] grid place-items-center font-bold rounded-xl ${fullWidth ? 'w-full' : 'w-fit'} text-base border-2 border-navyBlue text-navyBlue text-nowrap transition-colors hover:bg-skyBlue`}>
                {children}
            </Link>
        )
    }
}