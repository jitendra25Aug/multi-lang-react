import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useLocaleContext } from "../context/locale_context";

/**
 * @returns REACT ELEMENT WHICH ALLOWS USER TO CHOOSE A WEBSITE LANGUAGE
*/

const locales = [
    { value: 'en', title: "English" },
    { value: 'hi', title: "Hindi" },
    { value: 'it', title: "Italian" }
]

const LanguageSelector = () => {
    const { locale, setLanguage } = useLocaleContext();
    const { t } = useTranslation();

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <Wrapper className="lng-selector-wrapper">
            <select id="locale" value={locale} onChange={handleLanguageChange}>
                {locales.map((locale) => {
                    return <option key={locale.value} value={locale.value}>{t(`nav.${locale.title}`)}</option>
                })}
            </select>
        </Wrapper>
    );
}

const Wrapper = styled.div`
select{
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0 1rem 0 1rem;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
}
select option{
    border: none;
    font-family: cursive, sans-serif;
    text-transform: capitalize;
    background-color: hsl(var(--bg));
    color: hsl(var(--txt));
}
`;

export default LanguageSelector;