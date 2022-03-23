import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SidebarLinks from "./sidebarLinks";
import { RiDashboardLine } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillFolder } from "react-icons/ai";
import { GiAlarmClock } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { RiHistoryFill } from "react-icons/ri";
import { ImStack } from "react-icons/im";
import { BsArrowBarLeft } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
interface IProp {
  collapse: boolean;
  setCollapse: (boolean: boolean) => void;
}

const SidebarContent = ({ collapse, setCollapse }: IProp) => {
  const [activeDashboard, setActiveDashboard] = useState("Projects");

  return (
    <StyledSidebar collapse={collapse}>
      <div>
        <StyledHeading collapse={collapse}>
          <div className="stacked-file">
            <ImStack />
          </div>
          <div className="name-section">
            <p className="project-name">PJ</p>
          </div>
          <div
            className="collapse"
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            <BsArrowBarLeft />
          </div>
        </StyledHeading>
        <div>
          <SidebarLinks
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
            to="/"
            title="Dashboard"
            icon={<RiDashboardLine className="sidebar-icon" />}
            collapse={collapse}
          />
          <SidebarLinks
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
            to="/"
            title="Analytics"
            icon={<SiGoogleanalytics className="sidebar-icon" />}
            collapse={collapse}
          />
          <SidebarLinks
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
            to="/"
            title="Projects"
            icon={<AiFillFolder className="sidebar-icon" />}
            collapse={collapse}
          />
          <SidebarLinks
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
            to="/"
            title="Tracking"
            icon={<GiAlarmClock className="sidebar-icon" />}
            collapse={collapse}
          />
          <SidebarLinks
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
            to="/"
            title="History"
            icon={<RiHistoryFill className="sidebar-icon" />}
            collapse={collapse}
          />
          <SidebarLinks
            activeDashboard={activeDashboard}
            setActiveDashboard={setActiveDashboard}
            to="/"
            title="Settings"
            icon={<FiSettings className="sidebar-icon" />}
            collapse={collapse}
          />
        </div>
        <StyledTask collapse={collapse}>
          <p className="create-task">Create new task</p>
          <div className="plus-icon">
            <AiOutlinePlus />
          </div>
        </StyledTask>
      </div>
      <StyledProfile collapse={collapse}>
        <div className="profile-image">
          <img src="/images/profile.jpeg" alt="profile" />
        </div>
        <div className="name-section">
          <p className="name">Finna A.</p>
          <p className="work-mail">finna@iksg.com</p>
        </div>
        <div className="toggle">^</div>
      </StyledProfile>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div<{ collapse: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  background: #fcfcfc;
  padding: ${({ collapse }) => (collapse ? "2rem 1rem" : "2rem")};

  .create-task {
    font-weight: 500;
    display: ${({ collapse }) => (collapse ? "none" : "block")};
  }
`;
const StyledTask = styled.div<{ collapse: boolean }>`
  background: ${({ collapse }) => (collapse ? "transparent" : "#edf1fb")};
  padding: ${({ collapse }) => (collapse ? "0rem" : "1rem")};
  border-radius: 1rem;
  height: 4rem;
  display: flex;
  flex-direction: ${({ collapse }) => (collapse ? "column" : "row")};
  justify-content: center;
  align-items: ${({ collapse }) => (collapse ? "flex-start" : "center")};
  margin-top: 3rem;
  .plus-icon {
    background: #1d5cfc;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 50%;
    svg {
      font-size: 1.5rem;
    }
  }
`;
const StyledProfile = styled.div<{ collapse: boolean }>`
  align-self: flex-end;
  display: grid;
  grid-template-columns: ${({ collapse }) =>
    collapse ? "1fr" : "3fr 5fr 4fr"};
  align-items: center;
  gap: 0.5rem;

  .profile-image {
    img {
      width: 2rem;
      height: auto;
      border-radius: 50%;
    }
  }
  .name-section {
    display: ${({ collapse }) => (collapse ? "none" : "block")};
    .name {
      margin-bottom: 0.3rem;
      margin-top: 0rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
    .work-mail {
      margin-top: 0.3rem;
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 0rem;
      color: #c3c4c6;
    }
  }
  .toggle {
    display: ${({ collapse }) => (collapse ? "none" : "block")};
    justify-self: right;
    color: #c3c4c6;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

const StyledHeading = styled.div<{ collapse: boolean }>`
  display: grid;
  grid-template-columns: ${({ collapse }) =>
    collapse ? "1fr 1fr" : "3fr 5fr 4fr"};
  align-items: center;
  gap: 0.5rem;

  .stacked-file {
    display: ${({ collapse }) => (collapse ? "none" : "flex")};
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #336bf8;
    svg {
      fill: white;
    }
  }
  .name-section {
    .project-name {
      margin-bottom: 0.3rem;
      margin-top: 0rem;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  .collapse {
    justify-self: ${({ collapse }) => (collapse ? "left" : "right")};
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .collapse:hover {
    color: #336bf8;
  }
`;
export default SidebarContent;
