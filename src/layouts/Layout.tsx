import React from "react";
import GoToTopButton from "../components/GoToTopButton";
import { Header } from ".";
import Footer from "./Footer";
import GlobalStyle from "../styles/GlobalStyles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <GoToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
