



export default function SectionTitle({ title, styles }) {
    return (
        <h1
            id={title}
            className={`
                    relative
                    min-w-full
                    font-montserrat
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