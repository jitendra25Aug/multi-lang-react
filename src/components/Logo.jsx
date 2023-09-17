import styled from "styled-components";

const Logo = () => {
    return (
        <Wrapper> <span>MULTI</span>LINGO </Wrapper>
    );
}
const Wrapper = styled.h3`
margin-bottom: 0;
color: var(--clr-grey-3);
font-style: italic;
span{ color: var(--clr-primary-1); }
`;
export default Logo;