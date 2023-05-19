import { useState } from "react"
import Config from "../../public/data/Config"
import { AwesomeButton } from "react-awesome-button"
import { ConfigProvider, Spin } from "antd"



export default function ContactForm() {

    // UseStates -----------------------------------------------------------------
    const [sent, setSent] = useState(false)
    const [internalLoad, setInternalLoad] = useState(false)

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------
    const sendEmail = (e) => {
        e.preventDefault()
        setInternalLoad(true)

        emailjs.sendForm(
            Config.SERVICE_ID,
            Config.TEMPLATE_ID,
            e.target,
            Config.API_KEY)
            .then(() => {
                setInternalLoad(false)
                setSent(true)
            },
                (error) => {
                    alert('There was an error while sending the message, \
                please email "ychin@unb.ca" instead')
                    console.log(error.text)
                    setSent(false)
                    return
                })
    }

    const createLabel = ({ name }) => {
        return (
            <label
                className='
                    font-montserrat
                    shadowed-text
                    w-3/4
                    mb-2
                    text-xl
                    text-white

                    md:w-5/6
                    md:text-2xl
                    '
                htmlFor={name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        )
    }


    const createInput = ({ name, placeholder, type }) => {
        return (
            <>
                {createLabel({ name: name })}

                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    autoComplete='off'
                    required
                    className='
                    outline-none
                    relative
                    rounded-40
                    bg-transparent
                    border-2
                    border-red-400
                    mb-5
                    h-12
                    w-10/12
                    px-3
                    text-xl
                    text-white

                    placeholder:text-white
                    placeholder:italic

                    focus:border-4
                    focus:placeholder-transparent
                    focus:border-red-500

                    md:text-2xl
                    '
                />
            </>
        )
    }

    const NEW_MSG = (

        <form
            onSubmit={sendEmail}
            className='
                relative
                flex
                flex-col
                items-center
                px-5
                py-10
                w-full
                h-fit
                '
        >
            {createInput({ name: 'name', type: 'text', placeholder: 'Enter Name' })}

            {createInput({ name: 'email', type: 'email', placeholder: 'Enter Email' })}

            {createLabel({ name: 'message' })}

            <textarea id="message"
                name="message"
                placeholder="Enter Message"
                autoComplete='off'
                required

                className='
                    outline-none
                    rounded-3xl
                    bg-transparent
                    border-2
                    mb-5
                    h-48
                    resize-none
                    w-10/12
                    px-5
                    py-3
                    text-xl
                    text-white
                    border-red-400
                    focus:placeholder-transparent

                    placeholder:text-white
                    placeholder:italic

                    focus:border-4
                    focus:border-red-500

                    lg:text-2xl

                    '
            />

            {
                internalLoad ?
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: 'orange',
                                controlHeight: '70',
                            }
                        }}
                    >
                        <Spin
                        />
                    </ConfigProvider>
                    :
                    <AwesomeButton
                        type='secondary'
                        style={{
                            '--button-secondary-color': '#2f0d15',
                            "--button-secondary-color-dark": "transparent",
                            "--button-secondary-color-light": "#f1f1f1",
                            '--button-secondary-color-hover': '#ff4d4d',
                            '--button-secondary-color-active': '#ff4d4d',
                            '--button-secondary-border': '0px solid #acc3d7',
                            '--button-default-border-radius': '40px',
                            '--button-raise-level': '6px',
                            '--button-hover-pressure': '2.5',
                            width: "200px",
                            fontSize: '1.5rem',
                        }}
                    >
                        Send
                    </AwesomeButton>
            }
        </form>
    )

    const SENT_MSG = (
        <div
            className='
            p-5
            my-auto
            flex
            flex-col
            items-center
            '
        >
            <h3
                className='
                font-montserrat
                text-4xl
                mb-10
                '
            >Message Sent!
            </h3>

            <AwesomeButton
                type='secondary'
                style={{
                    '--button-secondary-color': '#2f0d15',
                    "--button-secondary-color-dark": "transparent",
                    "--button-secondary-color-light": "#f1f1f1",
                    '--button-secondary-color-hover': '#ff4d4d',
                    '--button-secondary-color-active': '#ff4d4d',
                    '--button-secondary-border': '0px solid #acc3d7',
                    '--button-default-border-radius': '40px',
                    '--button-raise-level': '6px',
                    '--button-hover-pressure': '2.5',
                    width: "200px",
                    fontSize: '1.5rem',
                }}
                onPress={() => setSent(false)}
                onClick={() => setSent(false)}
            >
                Send Another
            </AwesomeButton>
        </div>
    )


    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------

    // Return --------------------------------------------------------------------

    return (
        <div
            className='
            glass-effect
            red-shadow
            rounded-40
            h-[38rem]
            w-5/6
            mx-auto
            relative
            flex
            flex-col
            overflow-hidden

            md:w-2/3

            lg:w-2/5
        '
        >

            {
                sent ?
                    SENT_MSG : NEW_MSG
            }

        </div>
    )


}