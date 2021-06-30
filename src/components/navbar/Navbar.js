import React from 'react'
import styled from 'styled-components'
import Logo from '../logo/Logo';
import Button from './Button';
import Navlink from './Navlink';

const NavbarContainer = styled.div`
    width: 96.5%;
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
    return (
        <NavbarContainer>
            <LeftSection>
                <Logo/>
            </LeftSection>
            <MiddleSection>
                <Navlink/>
            </MiddleSection>
            <RightSection>
                <Button/>
            </RightSection>
        </NavbarContainer>
    )
}

export default Navbar
