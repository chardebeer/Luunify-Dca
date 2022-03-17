import styled from "styled-components";
import SideNavButton from "../SideNavButton";

export const StyledSideNavButton = styled(SideNavButton)`
  background: rgb(255, 0, 0, 0);
  color: white;
  border: none;
  width: 70px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  &: hover {
    background: #555;
  }
`;

//rgb(255, 0, 0,0 )
