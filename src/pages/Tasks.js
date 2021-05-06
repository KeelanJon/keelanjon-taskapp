import React, { useState, useEffect } from "react";
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

//Bootstrap components
import { Form } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";

//Icon imports
import { GrFormClose, GrClose } from "react-icons/gr";
import { Rainbow } from "react-bootstrap-icons";

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

  React.useEffect(function () {
    var temp = localStorage.getItem("storedTasks");
    console.log(localStorage.getItem("storedTasks"));
    updateTasks(JSON.parse([temp]));
  }, []);

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
    localStorage.setItem("storedTasks", JSON.stringify([newTask, ...tasks]));

    //Resets input
    updateText("");
    updateTimeText("");
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

    localStorage.setItem("storedTasks", JSON.stringify(newList));
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

  //Here we're implementing some functions to save the tasks to local storage! :D

  function loadTasks() {
    var tempTasks = null;

    localStorage.getItem("storedTasks", tempTasks);

    if (tempTasks != null) {
      updateTasks(JSON.parse(tempTasks));
    } else {
      console.log("No tasks yet");
    }
  }

  function saveTasks() {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
    console.log(JSON.stringify(tasks));

    var tempVar = localStorage.getItem("storedTasks");
    console.log(tempVar);
  }

  function startApp() {
    console.log("We're on the grid");
    loadTasks();
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginBottom: "1rem" }}>
          <Col>
            <Header />
            <Form
              onSubmit={function (e) {
                handleSubmit(e);
              }}
            >
              <Form.Group>
                <Form.Label>New task</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  placeHolder="New task"
                  value={text}
                ></Form.Control>

                <Form.Text style={{ padding: ".5rem 0" }}>
                  What time are you going to do this?
                </Form.Text>
                <Form.Control
                  placeHolder="time"
                  type="text"
                  onChange={handleTimeChange}
                  value={timeText}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" onSubmit={handleSubmit}>
                Add Task
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Tasks;

const StyledContainer = styled.div`
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
  ${"" /* height: 40vh;
  overflow-y: scroll; */}
  width: 100%;
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
