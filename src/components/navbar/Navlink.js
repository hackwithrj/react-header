import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const mystyle = {
  textDecoration: "none",
  color: "inherit",
  fontSize: "inherit"
};

const Navlink = () => {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem>
                  <Link to="/" style={mystyle}>Home</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/products" style={mystyle}>Products</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/about" style={mystyle}>About</Link>
                </LinkItem>
                <LinkItem>
                  <Link to="/contact" style={mystyle}>Contact</Link>
                </LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    )
}

export default Navlink
