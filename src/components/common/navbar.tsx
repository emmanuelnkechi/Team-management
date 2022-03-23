import React from "react";
import styled from "styled-components";
import { BsFillChatSquareFill } from "react-icons/bs";
import { IoMdNotifications, IoIosArrowDown } from "react-icons/io";
import { BiGlobeAlt } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledBreadcrumb>
        <div className="active">Projects</div>
        <div className="next">
          <MdNavigateNext />
        </div>
        <div className="next">GSE Banking App</div>
      </StyledBreadcrumb>

      <StyledInfo>
        <div className="icon-section">
          <div>
            <BsFillChatSquareFill />
          </div>
          <div>
            <IoMdNotifications />
          </div>
        </div>
        <div className="details">
          <div className="globe">
            <BiGlobeAlt />
          </div>
          <div className="icon-title">RonasIT</div>
          <div className="dropdown">
            <IoIosArrowDown />
          </div>
        </div>
      </StyledInfo>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.8rem 5rem;
  align-items: center;

  .active {
    font-weight: 600;
    cursor: pointer;
  }
  .next {
    color: rgba(189, 189, 189, 255);
    font-weight: 500;
  }
`;

const StyledBreadcrumb = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-self: right;
  align-items: center;

  .icon-section {
    display: flex;
    gap: 2rem;
    padding: 0.5rem 2rem;
    border-right: 1px solid rgba(189, 189, 189, 255);
  }
  .details {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    .dropdown {
      color: rgba(189, 189, 189, 255);
      font-weight: 600;
      font-size: 1.3rem;
      cursor: pointer;
    }
    .icon-title {
      font-weight: 600;
      color: #0f133c;
    }
    .globe {
      display: flex;
      width: 2.5rem;
      height: 2.5rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #0f133c;
      svg {
        fill: white;
      }
    }
  }
`;

export default Navbar;
