import React from "react";
import MainContent from "./MainContent";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";

function App() {
  return <div className="app-container">
    <MainContent />
    <TopMenu />
    <SideMenu />
  </div>;
}

export default App;
