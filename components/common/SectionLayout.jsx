export function SectionLayout({ children, className, bgColor, style, noPadding = false }) {
    return (
        <section style={style} className={`${bgColor} bg-center bg-cover`}>
            <div className={`mx-auto max-w-[1800px] px-7 md:px-[112px] ${noPadding ? '' : 'py-12 md:py-[112px]'} ${className}`}>
                {children}
            </div>
        </section>
    )
}