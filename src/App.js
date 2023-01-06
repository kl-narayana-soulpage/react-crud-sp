import logo from "./logo.svg";
import "./App.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
// import uuid from "uuid";

import react, { useState } from "react";

function App() {
  var tableData = [];
  var actual_students = [{ id: 555, name: "test", roll_no: "123", marks: 100 }];
  const [name, setName] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [marks, setMarks] = useState("");

  const [updated_sname, setUpdated_sname] = useState("");
  const [updated_roll_no, setUpdated_roll_no] = useState("");
  const [updated_marks, setUpdated_marks] = useState("");

  const [e_student_name, setE_student_name] = useState("");
  const [e_roll_no, setE_roll_no] = useState("");
  const [e_marks, setE_marks] = useState("");

  const [st_array, setSt_array] = useState([]);
  const [edit_option, setEdit_option] = useState(-1);

  const [final_students, setFinal_students] = useState([""]);

  function Edit_option_component(data) {
    // console.log(data.mapkey, 'mapkey');
    // const get_edited_row = st_array.filter((st) => st.id === data.id)
    // console.log(get_edited_row[0].name, 'get_edited_row');

    return (
      <tr key={data.mapkey}>
        <td>{data.id}</td>
        <td>
          <input
            type="text"
            value={updated_sname}
            onChange={(e) => setUpdated_sname(e.target.value)}
          ></input>
        </td>
        <td>
          <input
            type="text"
            value={updated_roll_no}
            onChange={(e) => setUpdated_roll_no(e.target.value)}
          ></input>
        </td>
        <td>
          <input
            type="text"
            value={updated_marks}
            onChange={(e) => setUpdated_marks(e.target.value)}
          ></input>
        </td>

        <td colSpan={2}>
          <Button variant="primary" onClick={(e) => update_data(data.id)}>
            Update
          </Button>
          {/* <Button variant="primary" onClick={ (e) => delete_data(e) }>Delete</Button> */}
        </td>
      </tr>
    );
  }

  const update_data = (id) => {
    const update = st_array.map((stundets) =>
      stundets.id === id
        ? ((stundets.name = updated_sname),
          (stundets.roll_no = updated_roll_no),
          (stundets.marks = updated_marks))
        : null
    );
    setEdit_option(-1);
  };

  const add_student = (e) => {
    if (!name || !roll_no || !marks) {
      alert("please fill all the details");
      return;
    }
    const ids = Math.floor(Math.random() * 100000 + 1);
    // actual_students.push({id: ids, name: name, roll_no: roll_no, marks: marks });
    const abc = {
      id: ids,
      name: name,
      roll_no: roll_no,
      marks: marks,
    };

    setSt_array((ol) => [...ol, abc]);
    console.log({ st_array }, "actual_students");
    setName("");
    setRoll_no("");
    setMarks("");
  };

  const edit_data = (id) => {
    console.log("id", id);
    const e_record = st_array.filter((item) => item.id === id);
    setE_student_name(e_record.name);
    setE_roll_no(e_record.roll_no);
    setE_marks(e_record.marks);
    console.log(e_record, "erecord");

    setUpdated_sname(e_record[0].name);
    setUpdated_roll_no(e_record[0].roll_no);
    setUpdated_marks(e_record[0].marks);

    setEdit_option(id);
  };

  const delete_data = (id) => {
    const st_array_dup = st_array.filter((item) => item.id != id);
    setSt_array(st_array_dup);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Add Students</h2>
          <Row>
            <Col xs={12} md={12}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Student Name new"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Roll No"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={roll_no}
                  onChange={(e) => setRoll_no(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Marks"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Button variant="primary" onClick={(e) => add_student(e)}>
                Submit
              </Button>
            </Col>
          </Row>
        </div>

        {/* ____________________________________________________________________ */}
        {/* <div>
        <h2>Update Student Record</h2>
        <Row>
        <Col xs={12} md={12} >
        <InputGroup className="mb-3"   value={e_student_name}
        onChange={(e) => setE_student_name(e.target.value)} >
        <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
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
        <InputGroup className="mb-3" value={e_roll_no}
        onChange={(e) => setE_roll_no(e.target.value)}>
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

        <InputGroup className="mb-3" value={e_marks}
        onChange={(e) => setE_marks(e.target.value)}>
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
        <Button variant="primary" onClick={ (e) => add_student(e) }>Submit</Button>
        </Col>
      </Row>
      </div> */}

        <Row style={{ marginTop: "20px" }}>
          <Col className="mb-3">
            <Table striped bordered hover variant="dark" className="mb-3">
              <thead>
                <tr className="mb-3">
                  <th>#</th>
                  <th>Name</th>
                  <th>Roll No</th>
                  <th>Marks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {st_array.map((listValue, index) =>
                  listValue.id === edit_option ? (
                    <tr key={index}>
                      <td>{listValue.id}</td>
                      <td>
                        <input
                          type="text"
                          value={updated_sname}
                          onChange={(e) => setUpdated_sname(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={updated_roll_no}
                          onChange={(e) => setUpdated_roll_no(e.target.value)}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={updated_marks}
                          onChange={(e) => setUpdated_marks(e.target.value)}
                        ></input>
                      </td>

                      <td colSpan={2}>
                        <Button
                          variant="primary"
                          onClick={(e) => update_data(listValue.id)}
                        >
                          Update
                        </Button>
                        {/* <Button variant="primary" onClick={ (e) => delete_data(e) }>Delete</Button> */}
                      </td>
                    </tr>
                  ) : (
                    // <Edit_option_component  id={listValue.id} mapkey={index}/>
                    <tr key={index}>
                      <td>{listValue.id}</td>
                      <td style={{ color: "white" }}>{listValue.name}</td>
                      <td>{listValue.roll_no}</td>
                      <td>{listValue.marks}</td>
                      <td>
                        <Button
                          style={{ marginRight: "5px" }}
                          variant="primary"
                          onClick={(e) => edit_data(listValue.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="primary"
                          onClick={(e) => delete_data(listValue.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
