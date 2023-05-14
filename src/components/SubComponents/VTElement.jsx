import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { AwesomeButton } from "react-awesome-button"
import { FcBriefcase } from "react-icons/fc"
import { useState } from "react"
import Image from "next/image"

export default function VTElement({ duration, position, location, skills, desc, buttons, buttonFuncs, imgSrc, imgAlt }) {

    const [gridTemplateRows, setGridTemplateRows] = useState(0)

    const handleClick = () => {
        setGridTemplateRows(1)
    }

    return (
        <VerticalTimelineElement
            contentArrowStyle={{
                border: 'transparent',
            }}

            contentStyle={{
                whiteSpace: 'pre-line',
                borderRadius: '40px',
                backgroundImage: "linear-gradient(to bottom right, #da48ea, #37013d)",
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.7)',
                color: '#e2e2e2',
            }}

            iconStyle={{
                backgroundImage: "linear-gradient(to bottom right, #da48ea, #37013d)",
            }}

            dateClassName="
            mt-5
            w-full
            force-opaque
            "

            date={(
                <div
                    className="
                text-center
                mx-auto
                w-full
                "
                >
                    <span
                        className="
                    w-full
                    text-center
                    text-2xl
                    font-lora

                    md:text-4xl

                    lg:text-5xl
                    lg:text-black
                    "
                    >
                        {duration}
                    </span>
                    <Image
                        width={0}
                        height={0}
                        unoptimized
                        priority
                        className="
                        mx-auto
                        w-1/2

                        md:w-2/3

                        lg:w-8/12
                        "
                        src={imgSrc}
                        alt={imgAlt}
                    />
                </div>
            )}

            icon={<FcBriefcase />}
        >
            <h3
                className="
                font-montserrat
                text-3xl

                md:text-4xl
                "
            >
                {position}
            </h3>
            <h4
                className="
                font-montserrat
                text-md
                pb-2

                md:text-lg

                lg:text-xl
                "
            >
                {location}
            </h4>


            <div
                className="
                flex
                flex-wrap
                justify-center
                py-2
                border
                border-dashed
                border-l-0
                border-r-0
                "
            >
                {
                    skills.map((s, index) => {
                        return (
                            <span
                                key={index}
                                className="
                                glass-effect
                                text-white
                                px-3
                                py-1
                                rounded-40
                                mx-1
                                my-2

                                md:text-lg

                                lg:text-xl
                                "
                            >
                                {s}
                            </span>
                        )
                    })
                }
            </div>

            <div
                className="
                grid
                transition-[grid-template-rows]
                "
                style={{
                    gridTemplateRows: `${gridTemplateRows}fr`,
                }}
            >
                <div
                    className="
                    overflow-hidden
                    mt-2
                    "
                >
                    <span
                        className="
                        text-lg

                        lg:text-xl
                        "
                        dangerouslySetInnerHTML={{ __html: desc }}
                    />
                </div>
            </div>

            {
                gridTemplateRows == 0 && (
                    <center>
                        <AwesomeButton
                            type='secondary'
                            style={{
                                '--button-secondary-color': '#37013d',
                                '--button-secondary-color-dark': 'dark-gray',
                                '--button-secondary-color-light': 'white',
                                '--button-secondary-color-hover': '#da48ea',
                                '--button-secondary-color-active': '#da48ea',
                                '--button-secondary-border': '0px',
                                '--button-default-border-radius': '40px',
                                '--button-raise-level': '6px',
                                '--button-hover-pressure': '2.5',
                                width: "200px",
                            }}
                            onPress={handleClick}
                            onClick={handleClick}
                        >
                            Read More
                        </AwesomeButton>
                    </center>)
            }

            <div
                className="
                flex
                flex-wrap
                justify-center
                "
            >
                {
                    buttons.map((b, index) =>
                    (
                        <AwesomeButton
                            key={index}
                            type='secondary'
                            style={{
                                '--button-secondary-color': '#37013d',
                                '--button-secondary-color-dark': 'dark-gray',
                                '--button-secondary-color-light': 'white',
                                '--button-secondary-color-hover': '#da48ea',
                                '--button-secondary-color-active': '#da48ea',
                                '--button-secondary-border': '0px',
                                '--button-default-border-radius': '40px',
                                '--button-raise-level': '6px',
                                '--button-hover-pressure': '2.5',
                                width: "200px",
                                marginTop: '20px',
                            }}
                            onPress={() => buttonFuncs[index]()}
                            onClick={() => buttonFuncs[index]()}
                        >{b}</AwesomeButton>
                    )
                    )
                }
            </div>

        </VerticalTimelineElement>
    )
}