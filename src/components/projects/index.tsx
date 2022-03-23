import React, { useState } from "react";
import Layout from "./../layout";
import styled from "styled-components";
import { inviteUrl } from "../../utils/invitees";
import ProjectCalender from "./projectCalender";

const TeamProjects = () => {
  const [progress,] = useState(56);

  return (
    <>
      <Layout>
        <StyledProject>
          <StyledTitle progress={progress}>
            <h1>GSE Banking app</h1>
            <div className="progress-section">
              <div className="progress-text">{progress}%</div>
              <div className="progressbar">
                <div className="progress-detail"></div>
              </div>
            </div>
          </StyledTitle>

          <StyledImage>
            <div className="invite-tab">
              <span>+</span>
              <span>Invite</span>
            </div>
            <div>
              <div className="avatar">
                {inviteUrl.map(
                  (item, index) =>
                    index <= 2 && (
                      <div
                        key={index}
                        className={`avatar-container "img${index}"`}
                      >
                        <img src={item.imageUrl} alt="profile" />
                      </div>
                    )
                )}
                <div className="numbers">
                  <div>+{inviteUrl.length - 3}</div>
                </div>
              </div>
            </div>
          </StyledImage>
        </StyledProject>
        <ProjectCalender />
      </Layout>
    </>
  );
};

const StyledProject = styled.div`
  padding: 0.3rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const StyledTitle = styled.div<{progress: number}>`
  .progress-section {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .progress-text {
    color: #a3a3a3;
    font-weight: 500;
  }
  .progressbar {
    width: 8rem;
    height: 0.4rem;
    border-radius: 2rem;
    background: #dde6ff;
  }
  .progress-detail {
    width: ${({ progress }) => `${progress}%`};
    background: #3f74fe;
    height: 100%;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`;
const StyledImage = styled.div`
  justify-self: right;
  display: flex;
  gap: 2rem;
  align-items: center;
  .invite-tab {
    display: flex;
    gap: 1rem;
    border: 2px dashed #c5c5c5;
    padding: 0.7rem 2rem;
    border-radius: 1.2rem;
    span {
      color: #8a8a8a;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }
  .avatar {
    display: flex;
  }

  .avatar-container {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: -0.5rem;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }
  .numbers {
    width: 3rem;
    height: 3rem;
    background: #131e3a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      font-size: 1.2rem;
      font-weight: 500;
      color: #ffffff;
    }
  }
`;

export default TeamProjects;
