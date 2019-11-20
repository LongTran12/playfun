import React, { useState, createContext, useEffect } from 'react'
import En from '../components/language/En'
import Vi from '../components/language/Vi'
import * as qs from 'query-string'
import coinAddressValidator from 'coin-address-validator';
const MyContext = createContext();

function SiteContext({ children }) {
    const [lang, setlang] = useState('en')
    const getLang = (txt) => {
        switch (lang) {
            case 'vi':
                if (Vi[txt]) {
                    return Vi[txt];
                }
            default:
                if (En[txt]) {
                    return En[txt];
                } else {
                    return txt;
                }

        }
    }
    const [ref, setRef] = useState(() => {
        if (window.localStorage) {
            let refLocal = window.localStorage.getItem('ref')
            if (refLocal !== null && refLocal !== undefined) {
                return refLocal
            } else {
                return 0x0000000000000000000000000000000000000000
            }
        } else {
            return 0x0000000000000000000000000000000000000000
        }
    })

    useEffect(() => {
        const parsed = qs.parse(window.location.search)
        if (parsed.ref && parsed.ref && coinAddressValidator.validate(parsed.ref, 'eth', 'prod')) {
            setRef(parsed.ref)
            if (window.localStorage) {
                window.localStorage.setItem('ref', parsed.ref)
            }
        }
    }, [])
    return (
        <MyContext.Provider value={{ lang, setlang, getLang, ref, setRef }}>
            {children}
        </MyContext.Provider>
    )
}

export default SiteContext
export { MyContext, SiteContext }
