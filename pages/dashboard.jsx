import React from "react";
import { StyledSideNav } from "../components/styles/SideNav.style";
import { StyledDashBoardContainer } from "../components/styles/DashBoardContainer.style";
import { GlobalStyles } from "../components/styles/GlobalStyles.style";
import DashBoardHeader from "../components/DashBoardHeader";
import { StyledBalanceModal } from "../components/styles/BalanceModal.style";
import { StyledGraphModal } from "../components/styles/GraphModal.style";
import { StyledPortfolioBreakDownModal } from "../components/styles/PortfolioBreakDownModal.style";
import { StyledNewsFeedModal } from "../components/styles/NewsFeedModal.style";
import SearchBar from "./../components/SearchBar";

export default function Confirmationpopup() {
  return (
    <StyledDashBoardContainer>
      <GlobalStyles />

      <StyledSideNav />
      <SearchBar />
      <DashBoardHeader headerText={"DashBoard"} />
      <StyledBalanceModal
        headerText={"Balance"}
        walletTotal={"₿ 21.836"}
        bitValue={"1 bit = $32,35"}
      />
      <StyledGraphModal
        headerText={"Graph"}
        graphX={"x value"}
        graphY={"y value"}
      />
      <StyledPortfolioBreakDownModal headerText={"Portfolio Breakdown"} />
      <StyledNewsFeedModal headerText={"NewsFeed"} />
    </StyledDashBoardContainer>
  );
}

//headerText,
