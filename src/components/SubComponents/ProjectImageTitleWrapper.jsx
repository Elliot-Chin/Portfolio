


export default function ProjectImageTitleWrapper({ title }) {
    return (
        <div
            /* image title wrapper */
            className='
        relative
        w-full
        flex
        flex-col
        items-center
        mt-10
        '
        >
            <div
                /* Image */
                className={`
        bg-[url(/images/STS.png)]
        bg-no-repeat
        bg-cover
        w-96
        h-24
        rounded-lg
        glass-effect

        md:h-44
        md:w-[45rem]

        lg:h-56
        lg:w-[60rem]
        `}
            />

            <h1
                /* title */
                className='
        font-montserrat
        my-5
        text-2xl
        w-full
        text-center
        shadowed-text
        text-white

        md:text-3xl

        lg:text-4xl
        '
            >
                {title}
            </h1>
        </div>
    )
}