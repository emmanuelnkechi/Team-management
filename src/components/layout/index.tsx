import React, { useState } from "react";
import styled from "styled-components";
import SidebarContent from "./sidebar";
import Navbar from "../common/navbar";

type Props = {
  children?: JSX.Element | JSX.Element[] | string | string[];
};
const Layout = ({ children }: Props) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <StyledLayout collapse={collapse}>
      <SidebarContent collapse={collapse} setCollapse={setCollapse} />
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </StyledLayout>
  );
};

const StyledLayout = styled.div<{collapse: boolean}>`
  display: grid;
  grid-template-columns: ${({ collapse }) =>
    collapse ? "1fr 10fr" : "2fr 10fr"};
  border-radius: 1rem;
`;

export default Layout;
