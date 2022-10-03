import React from "react";
import { GlobalStyle } from "./global/Style";
import Header from "./component/Hearder";
import Routes from "./services/Routes";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Routes />
    </>
  );
}
