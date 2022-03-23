import React, { useState } from "react";
import styled from "styled-components";
import { calendar } from "../../utils/calendar";
import ProjectCards from "./projectCards";
import { users } from "../../utils/users";
import Switch from "react-switch";

const TeamProjects = () => {
  const { calendarDays, numberOfTheDay } = calendar();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StyledTeamProject>
      <div className="calender-title">
        {calendarDays.map((item: string, i: number) => (
          <div
            className={
              parseInt(item.slice(1)) == numberOfTheDay ? "active" : ""
            }
            key={i}
          >
            <span className="day-span">{item.charAt(0)}</span>
            <span className="days-in-number">{item.slice(1)}</span>
          </div>
        ))}
      </div>
      <StyledSwitch>
        <div>
          <div id={"switch-0"}>
            <p className="task-text">Flow Swift transfer</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-1"}>
            <p className="task-text">Transfer board</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-2"}>
            <p className="task-text">User profile</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-3"}>
            <p className="task-text">Transfers by phone number</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-4"}>
            <p className="task-text">Chat bot</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-5"}>
            <p className="task-text">Transaction analytics</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-6"}>
            <p className="task-text">Chat bot</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-7"}>
            <p className="task-text">Transaction analytics</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-8"}>
            <p className="task-text">Settings</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>

        <div>
          <div id={"switch-9"}>
            <p className="task-text">Flow Swift transfer</p>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={handleChange}
              checked={checked}
            />
          </div>
        </div>
      </StyledSwitch>
      <StyledMembers>
        <div className="members-card-section">
          {users.map((item, i) => (
            <ProjectCards
              key={i}
              name={item.name}
              role={item.role}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        <div className="members-task-section">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </StyledMembers>
    </StyledTeamProject>
  );
};

const StyledTeamProject = styled.div`
  margin-top: 2rem;
  padding: 0.3rem 5rem;

  .active {
    background: #1d5cfc;
    color: #fff;
    padding: 0rem 0rem;
    border-radius: 0.3rem;
    width: 2rem;
    padding: 0.2rem 0.3rem;
  }
  .day-span {
    color: #c9c9c9;
  }
  .calender-title {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .days-in-number {
    font-weight: 600;
  }
`;

const StyledMembers = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;

  .members-card-section {
    padding-right: 1.5rem;
  }

  .members-task-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 1.5rem;

    div {
      border-left: 1px solid rgba(189, 189, 189, 0.3);
    }
  }
`;

const StyledSwitch = styled.div`
  position: absolute;
  left: 40rem;
  margin-top: 0rem;
  .react-switch-bg {
    height: 46px !important;
    width: 400px !important;
    border-radius: 5rem !important;
  }
  :not(:first-of-type) {
  }
  .react-switch-handle {
    top: 6px !important;
    left: 2px !important;
    transform: translateX(360px) !important;
  }
  #switch-9,
  #switch-2,
  #switch-6 {
    margin-top: 2.5rem;
    .react-switch-bg {
      background: #f9d018 !important;
    }
  }

  #switch-1,
  #switch-3,
  #switch-8,
  #switch-5 {
    margin-top: 2.5rem;
    .react-switch-bg {
      background: #131e3a !important;
    }
  }
  #switch-0,
  #switch-4,
  #switch-7 {
    margin-top: 2.5rem;
    .react-switch-bg {
      background: #fd7e2e !important;
    }
  }
  .task-text {
    position: absolute;
    z-index: 1;
    margin-left: 1rem;
    color: #ffffff;
    font-weight: 600;
    margin-top: 0.8rem;
  }
  #switch-0 {
    margin-top: 2rem;
  }
`;

export default TeamProjects;
