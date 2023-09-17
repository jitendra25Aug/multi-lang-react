import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from 'react-icons/fa'
import { links } from "../utils/constant";
import { LanguageSelector, Logo } from ".";
import { useTranslation } from "react-i18next";
import { useLocaleContext } from '../context/locale_context';

/**
 * DISPLAYS THE NAVIGATION MENU
 */

const Navbar = () => {
    const { t } = useTranslation();
    const { openSidebar } = useLocaleContext();
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/"><Logo /> </Link>
                    <button type="button" className="nav-toggle" onClick={openSidebar}><FaBars /> </button>
                </div>
                <ul className="nav-links">
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <NavLink to={url} className={({ isActive }) => isActive ? 'active' : ''}>{t(`nav.${text}`)}</NavLink>
                            </li>
                        );
                    })}
                </ul>
                <LanguageSelector />
            </div>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
height: 5rem;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

.nav-center{
    width : 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
}
.nav-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nav-toggle{
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    svg{
        font-size: 2rem;
    }
}

.nav-links{
    display: none;
}

.lng-selector-wrapper {
    display: none;
}

@media screen and (min-width: 992px){
    .nav-toggle{
        display: none;
    }

    .nav-center{
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        align-items: center;
        justify-items: end;
    }

    .nav-links{
        display: flex;
        justify-content: center;
        li{
            margin: 0 0.5rem;
        }
        a{
            color: inherit;
            text-transform: capitalize;
            font-size: 1rem;
            letter-spacing: var(--spacing);
            padding: 0.5rem;
            &:hover{
               opacity: 0.8;
            } 
        }
    }
    .nav-links .active{
        color: var(--clr-primary-1);
        border-bottom: 1px solid var(--clr-primary-1);
    }

    .lng-selector-wrapper{
        display: block;
    }
}
`;

export default Navbar;