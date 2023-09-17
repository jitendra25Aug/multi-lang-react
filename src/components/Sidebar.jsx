import { Link } from "react-router-dom";
import styled from "styled-components";
import { LanguageSelector } from ".";
import { useLocaleContext } from "../context/locale_context";
import { links } from "../utils/constant";
import { MdClose } from 'react-icons/md';

/**
 * DISPLAYS THE SIDEBAR MENU
 */

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useLocaleContext();
    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : 'sidebar'}`}>
                <div className="sidebar-header">
                    <button type="button" className="close-btn" onClick={closeSidebar} ><MdClose /> </button>
                </div>
                <ul className="links">
                    {links.map((link) => {
                        const { id, text, url, icon } = link;
                        return <li key={id}><Link to={url} onClick={closeSidebar}>{icon} {text}</Link> </li>
                    })}
                </ul>
                <LanguageSelector />
            </aside>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
text-align: center;
font-size: clamp(1rem, 4vw, 1.25rem);
.sidebar-header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 1.5rem;
}

.close-btn{
    background-color: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
    transition: var(--transition);
    margin-top: 0.2rem;
}
.close-btn:hover{
    color: var(--clr-red-light);
}
svg{
    font-size: 2rem;
}

.links{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}
.links a{
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: inherit;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    transition: var(--transition);
}
.links a:hover{
    color: var(--clr-grey-2);
}
.sidebar{
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: hsl(var(--bg));
    color: hsl(var(--txt));
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 9;
    transform: translateX(100vw);
    visibility: hidden;
    transition: var(--transition);
}

.show-sidebar{
    transform: translateX(0vw);
    visibility: visible;
}

.lng-selector-wrapper{
    margin: 0 auto;
}


@media screen and (min-width: 992px){
    .sidebar{
        display: none;
    }
}

`;

export default Sidebar;