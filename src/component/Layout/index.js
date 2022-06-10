import React from "react";
import { RecoilRoot } from "recoil";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      <div>
        <Header />
        <div>{children}</div>
      </div>
    </RecoilRoot>
  );
};

export default Layout;
