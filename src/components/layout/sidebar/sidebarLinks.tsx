import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active";
import { ISidebar } from "../../../model/Sidebar.interface";

const SidebarLinks = ({
  activeDashboard,
  setActiveDashboard,
  to,
  title,
  icon,
  collapse,
}: ISidebar) => {
  return (
    <StyledLinks
      activeDashboard={activeDashboard}
      onClick={() => {
        setActiveDashboard(title);
      }}
      collapse={collapse}
      active={title}
      className="navlink"
      to={to}
    >
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
    </StyledLinks>
  );
};

const StyledLinks = styled(NavLink).attrs({ activeClassName })<{collapse: boolean; active: string; activeDashboard: string;}>`
  &:hover {
    color: #1d5cfc;
  }
  ${({ active, activeDashboard }) =>
    activeDashboard === active &&
    `&.${activeClassName} {
    color: white;
    background:linear-gradient(96.67deg, #fd7e2e 0%, #1d5cfc 100%);
    transition: background 0.3s ease;
     padding: 0.5rem 1rem;
     border-radius: 0.5rem;
    &:hover {
      background: #1d5cfc;
    }
  }`};

  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 2.5rem;

  .title {
    margin: 0rem;
    display: ${({ collapse }) => (collapse ? "none" : "block")};
  }
  .icon {
    font-size: 1.6rem;
  }
`;
export default SidebarLinks;
