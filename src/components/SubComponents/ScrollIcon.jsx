import UseAnimations from "react-useanimations"
import arrowDown from "react-useanimations/lib/arrowDown"


export default function ScrollIcon({ strokeColor, text }) {

    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------
    const TEXT = (
        <span
            className='
                    uppercase
                    font-bold
                    font-montserrat
                    text-l

                    md:text-xl

                    lg:text-2xl
                    '
            style={{
                color: strokeColor,
            }}
        >
            {text}
        </span>
    )

    const ICON = (
        <div
            className=
            "animate-bounce"
        >
            <UseAnimations
                animation={arrowDown}
                strokeColor={strokeColor}
                size={40}
            />
        </div>
    )

    // Return --------------------------------------------------------------------

    return (
        <div
            className="
            fixed
            w-fit
            flex
            flex-col
            justify-center
            top-2/3
            left-1/2
            transform
            -translate-x-1/2
            "
        >
            <center>
                {TEXT}
                {ICON}
            </center>
        </div >
    )
}



// TEMPLATE
// UseStates -----------------------------------------------------------------

// Variables -----------------------------------------------------------------

// Util funcs ----------------------------------------------------------------

// UseEffect -----------------------------------------------------------------

// Components ----------------------------------------------------------------

// Return --------------------------------------------------------------------
