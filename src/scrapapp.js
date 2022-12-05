import logo from "./logo.svg";
import "./App.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import react, { useState } from "react";
import React, { useReducer } from "react";

function App() {
  // const [student_name, setStudent_name] = useState("");
  const [studentsold, setStudentsold] = useState([
    {
      name: "",
      roll_no: "",
      marks: "",
    },
  ]);

  function add_student() {
    console.log("add_student", students);
  }

  const reducer = (state, action) => {
    console.log("state", state);
    console.log("k", action);
    if (action.type === "ADD") {
      const newState = [...state];
      console.log(newState, "newstate");
      newState.push({ name: action.name, roll_no: action.roll_no });
      return newState;
    }

    if (action.type === "UPDATE") {
      const newState = [...state];
      const foundItem = newState.find((item) => item.id === action.id);
      foundItem.value = action.value;
      return newState;
    }
  };

  const initialState = [];

  const [students, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Add Students</h2>
        <Row>
          <Col xs={12} md={12}>
            <InputGroup
              className="mb-3"
              value={studentsold.name}
              onChange={(e) => dispatch({ type: "ADD", name: "e.target.vaue" })}
            >
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Student Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <InputGroup
              className="mb-3"
              value={studentsold.roll_no}
              onChange={(e) =>
                dispatch({ type: "ADD", roll_no: e.target.vaue })
              }
            >
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Roll No"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <InputGroup
              className="mb-3"
              value={studentsold.marks}
              onChange={(e) => dispatch({ type: "ADD", marks: e.target.vaue })}
            >
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Marks"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Button variant="primary" onClick={() => add_student()}>
              Submit
            </Button>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
