import React, { useState, createContext } from 'react'
import En from '../components/language/En'
import Vi from '../components/language/Vi'
const MyContext = createContext();

function SiteContext({ children }) {
    const [lang, setlang] = useState('en')
    const getLang = (txt) => {
        switch (lang) {
            case 'vi':
                if (Vi[txt]) {
                    return Vi[txt];
                }
                else {
                    return En[txt];
                }
            default:
                return En[txt];
        }
    }
    return (
        <MyContext.Provider value={{ lang, setlang, getLang }}>
            {children}
        </MyContext.Provider>
    )
}

export default SiteContext
export { MyContext, SiteContext }
