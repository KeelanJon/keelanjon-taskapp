import React, { useState } from "react";
import styled from "styled-components";
import TaskCard from "../components/TaskCard";
import Header from "../components/Header";
import { MdAdd } from "react-icons/md";
import Toolbar from "../components/Toolbar";
import TaskCounter from "../components/TaskCounter";
import WelcomeMsg from "../components/WelcomeMsg";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Layout from "../components/Layout";
import AddButton from "../components/buttons/AddButton";

//Icon imports
import { GrFormClose, GrClose } from "react-icons/gr";

function Tasks() {
  const [tasks, updateTasks] = useState([]);
  const [text, updateText] = useState("");
  const [timeText, updateTimeText] = useState("");

  //Usestate variables used for opening and closing add task menu
  const [taskFormState, setTaskFormState] = useState(false);

  //Task and project counter variables
  //These are passed to the TaskCounter component for display
  const [completeTasks, setCompletedTasks] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  //function to handle form text changes for both task name and time
  function handleChange(e) {
    let newText = e.target.value;

    updateText(newText);
  }

  function handleTimeChange(e) {
    let newTime = e.target.value;

    updateTimeText(newTime);
  }

  //Function for submiting new task object into task list
  //Each task is an object containing both a title and time property
  function handleSubmit(e) {
    let newTask = { taskTitle: text, taskTime: timeText };

    updateTasks([newTask, ...tasks]);
    toggleTaskMenu();
    updateText("");
    updateTimeText("");
    console.log(newTask);

    e.preventDefault();
  }

  //Functions for deleting and completing tasks
  //Delete function with simply remove task from list.
  //complete function will remove task from list in addition to
  //incrementing the complete tasks variable

  function handleDelete(taskName) {
    let newList = [];

    newList = tasks.filter(function (item) {
      return item.taskTitle != taskName;
    });

    updateTasks(newList);
  }

  function handleComplete(taskName) {
    let newList = [];

    newList = tasks.filter(function (item) {
      return item.taskTitle != taskName;
    });

    setCompletedTasks(completeTasks + 1);
    updateTasks(newList);
  }

  //Form interaction functions
  //Note to Keelan, you'll likely want to move this into its own component
  //...when you get the chance :D

  function toggleTaskMenu() {
    setTaskFormState(!taskFormState);
    console.log(taskFormState);
  }

  return (
    <Layout>
      <Container>
        <Header />
        <StyledGrid>
          <WelcomeMsg />
          <TaskCounter
            overview={taskCount}
            complete={completeTasks}
            projects={projectCount}
          />
          <TaskForm state={taskFormState}>
            <ButtonWrapper>
              <CloseButton onClick={toggleTaskMenu} />
            </ButtonWrapper>

            <form
              onSubmit={function (e) {
                handleSubmit(e);
              }}
            >
              <input
                onChange={handleChange}
                placeHolder="New task"
                value={text}
              />
              <input
                onChange={handleTimeChange}
                placeholder="Time"
                value={timeText}
              ></input>
              <PrimaryButton type="submit" onSubmit={handleSubmit}>
                Add
              </PrimaryButton>
            </form>
            <a href="https://keelsdesign.co.uk">
              <p>By Keelan Jon</p>
            </a>
          </TaskForm>
          <TaskList>
            <h3>
              {tasks.map(function (item, index) {
                return (
                  <TaskCard
                    title={item.taskTitle}
                    time={item.taskTime}
                    deleteFunction={handleDelete}
                    completeFunction={handleComplete}
                  ></TaskCard>
                );
              })}
            </h3>
          </TaskList>
          <Toolbar toggleMenu={toggleTaskMenu} />
        </StyledGrid>
      </Container>
    </Layout>
  );
}

export default Tasks;

const Container = styled.div`
  height: 100%;
  h1 {
    color: ${(props) => props.theme.main.primaryText};
  }
`;

const StyledGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TaskList = styled.div`
  height: 40vh;
  overflow-y: scroll;
`;

const TaskForm = styled.div`
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 60%;
  bottom: 0;
  left: 0;

  width: 100%;
  background: ${(props) => props.theme.main.secondaryColor};
  border-radius: 24px;
  padding: 10% 0;

  transition: 0.6s ease 0s;

  transform: translateY(${(props) => (props.state ? "0" : "100%")});

  #close-btn {
    font-size: 2rem;
    padding: 0.5rem;
    color: ${(props) => props.theme.main.primaryText};
    background: none;
    border: none;
    cursor: pointer;
  }

  p {
    font-size: 0.8rem;
    text-align: center;
    color: ${(props) => props.theme.main.primaryText};
    opacity: 0.1;

    transition: 0.3s ease 0s;

    &:hover {
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.screenDimensions.tablet}) {
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;

    @media screen and (max-width: ${(props) =>
        props.theme.screenDimensions.tablet}) {
      flex-direction: column;
    }
  }

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.03);
    color: ${(props) => props.theme.main.primaryText};
    font-size: 1rem;
    border: none;
    margin: 0.5rem 0;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 5% 5%;
`;

const CloseButton = styled(GrFormClose)`
  font-size: 2rem;
  cursor: pointer;
  background: linear-gradient(
    45deg,
    rgba(65, 54, 241, 100) 0%,
    rgba(135, 67, 255, 100) 100%
  );
  border-radius: 50%;

  transition: 0.3s ease 0s;

  &:hover {
    transform: rotate(25deg) scale(1.2);
  }
`;
