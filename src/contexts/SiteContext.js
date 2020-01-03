import React, { useState, createContext } from 'react'
import En from '../components/language/En'
import Vi from '../components/language/Vi'
const MyContext = createContext();

function SiteContext({ children }) {
    const [lang, setlang] = useState('vi')
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
    return (
        <MyContext.Provider value={{ lang, setlang, getLang }}>
            {children}
        </MyContext.Provider>
    )
}

export default SiteContext
export { MyContext, SiteContext }
