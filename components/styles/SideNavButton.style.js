import styled from "styled-components";
import SideNavButton from "../SideNavButton";

export const StyledSideNavButton = styled(SideNavButton)`
  margin: 20px;
  background:rgb(255, 0, 0,0 );
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center

  &: hover {
    color: grey; 
  }
`;
