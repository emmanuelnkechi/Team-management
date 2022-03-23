import React from "react";
import styled from "styled-components";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import Select from "react-select";
import { monthsOption } from "../../utils/months";
import TeamProjects from "./teamProject";
import { calendar } from "../../utils/calendar";

const ProjectCalender = () => {
  const { year, month } = calendar();

  return (
    <StyledProjects>
      <StlyedFilterLayout>
        <div className="date">
          <div className="actual-date">
            {month} {year}
          </div>
          <div className="navigate-date">
            <span>
              <MdNavigateBefore />
            </span>
            <span>
              <MdNavigateNext />
            </span>
          </div>
        </div>
        <div className="search-section">
          <div className="search-icon">
            <HiOutlineSearch />
          </div>
          <Select options={monthsOption} placeholder={"months"} />
        </div>
      </StlyedFilterLayout>
      <TeamProjects />
    </StyledProjects>
  );
};

const StyledProjects = styled.div``;

const StlyedFilterLayout = styled.div`
  margin-top: 2rem;
  padding: 0.3rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .date {
    display: flex;
    align-items: center;
    gap: 1rem;

    .actual-date {
      font-weight: 500;
      font-size: 1.2rem;
    }
    .navigate-date {
      span {
        color: #c1c1c1;
        font-weight: 600;
        font-size: 1.5rem;
      }
    }
  }
  .search-section {
    display: flex;
    justify-self: right;
    align-items: center;
    gap: 2rem;
  }
  .search-icon {
    font-weight: 600;
    font-size: 1.5rem;
  }
  .css-1s2u09g-control {
    border-radius: 1rem;
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  .css-b62m3t-container {
    width: 10rem;
  }
`;

export default ProjectCalender;
