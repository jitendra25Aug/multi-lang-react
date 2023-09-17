import { useTranslation } from "react-i18next";
import styled from "styled-components";

const About = () => {
    const { t } = useTranslation();
    return (
        <main>
            <Wrapper className="section-center">
                <article>
                    <h1>{t('about.main.header.label')}</h1>
                    <p>{t('about.main.p.label')}</p>
                </article>
            </Wrapper>
        </main>
    );
}

const Wrapper = styled.section`
display: grid;
place-items: center;
min-height: 60vh;

p{
    font-size: 1rem;
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-3);
    margin-bottom: 2rem;
}

@media screen and (min-width: 992px){
    height: calc(100vh - 5rem);
    h1{
        margin-bottom: 1rem; 
    }
    p{
        font-size: 1.25rem;
    }
}
`;

export default About;