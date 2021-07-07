import React from 'react'
import styled from 'styled-components'
import Logo from '../logo/Logo';
import Button from './Button';
import Navlink from './Navlink';
import MobileNavLink from './MobileNavLink';
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15,15,15,0.15);
    display:flex;
    align-items: center;
    padding: 0 1.5em;
`; 

const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <NavbarContainer>
            <LeftSection>
                <Logo/>
            </LeftSection>
            <MiddleSection>{!isMobile && <Navlink />}</MiddleSection>
            <RightSection>
                {!isMobile && <Button />}
                {isMobile && <MobileNavLink />}
            </RightSection>
        </NavbarContainer>
    )
}

export default Navbar
