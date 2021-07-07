import React, { useState } from "react";
import styled from "styled-components";
import Button  from "./Button";
import MenuToggle from "./MenuToggle";
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
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 61.5px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Marginer = styled.div`
  height: 2em;
`;

const mystyle = {
    textDecoration: "none",
    color: "inherit",
    fontSize: "inherit"
  };

const MobileNavLink = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [isComponent, setComponent] = useState(false);
    const onClickChanges = () => {
        console.log("iscomponent", isComponent);
        console.log('isopen',isOpen);  
        setOpen(!isOpen);
        setComponent(false);
    }
    const onLinkClickChanges = () => {
        // console.log("iscomponent", isComponent);
        // console.log('isopen',isOpen);  
        setComponent(true);
        setOpen(false);
    }
    return (
        <NavLinksContainer>
          <MenuToggle isOpen={isOpen} toggle={() => {onClickChanges()} }/>
            {isOpen && (
              <div>
                {isComponent ? null : (
                  <LinksWrapper>
                    <LinkItem>
                      <Link to={{ pathname:"/" }}style={mystyle} onClick={onLinkClickChanges}>Home</Link>
                      </LinkItem>
                      <LinkItem>
                        <Link to={{ pathname:"/products" }} style={mystyle} onClick={onLinkClickChanges }>Products</Link>
                      </LinkItem>
                      <LinkItem>
                        <Link to={{ pathname:"/about" }} style={mystyle} onClick={onLinkClickChanges} >About</Link>
                      </LinkItem>
                      <LinkItem>
                        <Link to={{ pathname:"/contact" }} style={mystyle} onClick={onLinkClickChanges} >Contact</Link>
                      </LinkItem>
                    <Marginer />
                    <Button />
                  </LinksWrapper>
                )}
              </div>
            )}
        </NavLinksContainer>
      );
}

export default MobileNavLink
