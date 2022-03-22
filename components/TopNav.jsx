import React from "react";
import CalendarIcon from "./icons/CalendarIcon";
import ActivityIcon from "./icons/ActivityIcon";
import ChatIcon from "./icons/ChatIcon";
import SearchBar from "./SearchBar";

function TopNav({ className }) {
  return (
    <div className={className}>
      <CalendarIcon />
      <ActivityIcon />
      <ChatIcon />
      <SearchBar />
    </div>
  );
}

export default TopNav;
