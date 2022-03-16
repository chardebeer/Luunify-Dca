import React from "react";
import ContactsIcon from "../components/icons/ContactsIcon";
import { StyledSideNavButton } from "./styles/SideNavButton.style";
import LoansIcon from "./icons/LoansIcon";
import SettingsIcon from "./icons/SettingsIcon";
import ShopListIcon from "./icons/ShopListIcon";
import MarketIcon from "./icons/MarketIcon";
import RecordsIcon from "./icons/RecordsIcon";
import WalletsIcon from "./icons/WalletsIcon";
import Logo from "./Logo";

function SideNav({ className }) {
  return (
    <div className={className}>
      <Logo />
      <StyledSideNavButton>
        <WalletsIcon fill="white" />
      </StyledSideNavButton>
      <StyledSideNavButton>
        <RecordsIcon fill="white" />
      </StyledSideNavButton>
      <StyledSideNavButton>
        <MarketIcon fill="white" />
      </StyledSideNavButton>
      <StyledSideNavButton>
        <LoansIcon fill="white" />
      </StyledSideNavButton>
      <StyledSideNavButton>
        <ContactsIcon fill="white" />
      </StyledSideNavButton>
      <StyledSideNavButton>
        <ShopListIcon fill="white" />
      </StyledSideNavButton>
      <StyledSideNavButton>
        <SettingsIcon fill="white" />
      </StyledSideNavButton>
    </div>
  );
}

export default SideNav;
