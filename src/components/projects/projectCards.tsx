import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styled from "styled-components";

interface IProp {
  name: string;
  role: string;
  imageUrl: string;
}

const ProjectCards = ({ name, role }: IProp) => {
  return (
    <StyledProfile>
      <div className="profile-image">
        <img src="/images/profile.jpeg" alt="profile" />
      </div>
      <div className="name-section">
        <p className="name">{name}</p>
        <p className="role">{role}</p>
      </div>
      <div className="dropdown">
        <BiDotsVerticalRounded />
      </div>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 3fr 10fr 1fr;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;

  .profile-image {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
    img {
     width: 100%;
    }
  }
  .name-section {
    .name {
      margin-bottom: 0.3rem;
      margin-top: 0rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
    .role {
      margin-top: 0.3rem;
      font-size: 0.7rem;
      font-weight: 600;
      margin-bottom: 0rem;
      color: #c3c4c6;
    }
  }
  .dropdown {
    justify-self: right;
    color: #c3c4c6;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
export default ProjectCards;
