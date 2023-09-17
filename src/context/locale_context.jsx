import { createContext, useContext, useState } from 'react'
import i18n from '../i18n';

/**
 * CONTAINS AND MANAGES APPLICATION STATE
 */

const LocaleContext = createContext();
export const useLocaleContext = ()=>{
    return useContext(LocaleContext);
}

const LocaleProvider = ({children})=>{
    const [locale, setLocale] = useState(i18n.language);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const setLanguage = (lng)=>{
        i18n.changeLanguage(lng);
        setLocale(lng);
    }

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    
    return (
        <LocaleContext.Provider value={{locale, isSidebarOpen, setLanguage, openSidebar, closeSidebar}}>
            {children}
        </LocaleContext.Provider>
    );
}

export default LocaleProvider;