import React from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import MainLogo from "./../../assets/images/Sun-Fusion-Organization.jpeg";

interface ILayout {
  children?: JSX.Element;
}

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  border: 1px solid lightgrey;
  padding: 1rem;
  background: #fff;
  z-index: 99999;
  min-height: 70px;
`;

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <TopBar>
        <NavLink to="/">
          <img
            style={{
              position: "absolute",
              maxHeight: "70px",
              top: "1rem",
              left: "1rem",
            }}
            src={MainLogo}
            alt="Logo"
          />
        </NavLink>
        <TopBarContainer>
          <Button>
            <NavLink to="/table">Analysis</NavLink>
          </Button>
        </TopBarContainer>
      </TopBar>
      <Box mt={14}>{children}</Box>
    </>
  );
};

export default Layout;
