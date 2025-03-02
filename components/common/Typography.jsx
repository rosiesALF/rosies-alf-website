export function Title({children, className}) {
    return (
        <h2 className={`${className} font-playfair text-3xl text-balance md:text-5xl font-medium`}>{children}</h2>
    )
}