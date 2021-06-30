import React from 'react'
import styled from 'styled-components'
import logo from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 29px;
    height: 29px;

    img{
        width: 100%;
        height: 100%;
    }
`;
  
const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;


const Logo = () => {
    return (
        <LogoWrapper>
            <LogoImg><img src={logo} alt="logo"/></LogoImg>
            <LogoText>Insta</LogoText>
        </LogoWrapper>
    )
}

export default Logo
