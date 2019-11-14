import React, { useState } from 'react'
import FaqBlock from './FaqBlock'
import FaqContent from './FaqContent'

const SectionFaq = ({ id, text, textContent }) => {
    const [open, setOpen] = useState(false)
    return (
        <>

            <div onClick={() => setOpen(!open)}>
                <FaqBlock id={id} text={text} />
            </div>{
                open && <FaqContent textContent={textContent} />
            }

        </>
    )
}
export default SectionFaq
