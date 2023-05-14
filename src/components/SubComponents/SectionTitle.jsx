



export default function SectionTitle({ title, styles }) {
    return (
        <h1
            id='Temp'
            className={`
                    relative
                    min-w-full
                    font-montserrat
                    shadowed-text
                    text-6xl
                    text-center
                    mb-5
                    mt-10
                    text-white
    
    
                    md:text-7xl
    
                    lg:text-9xl
                `}
            style={styles}
        >
            {title}
        </h1>
    )
}