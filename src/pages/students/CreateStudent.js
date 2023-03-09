//1. Import Area
import React, { useEffect, useState } from 'react'
import { Form, Button, Table } from 'react-bootstrap'
//2. Definition Area
export default function CreateStudent() {
  //2.1 Hooks Area
  //let teacher='';
  const [teacher, setTeacher] = useState([]);
  //useSomething() will be A Hook Function
  //useEffect(cbfn,dependency Array)
  useEffect(() => {
    // I want to call The get all Teacher api
    fetch('http://localhost:1337/api/teachers', {
      method: "GET"
    })
      .then(res=>res.json())
      .then((data)=>{
        console.log(data.data);
        setTeacher(data.data)
        //set the hook variable
      })
      .catch(() => {
      });
  }, []);
  //2.2 Definition Area
  let createStudent = () => {
    //alert('Hello Student');
    let payload ={
      "data": {
        "name": document.getElementById('student_name').value,
        "teachers":[parseInt(document.getElementById('teacher').value)]
      }
    }
    // our Payload is Ready to send to server
    console.log(payload);
    fetch(`http://localhost:1337/api/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        alert("Student Data Inserted Successfully");
        console.log(data);
      })
      .catch();
  }

  //2.3 Return Statement
  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5'>Create Student</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Selection Teachers</Form.Label>
            <Form.Select id="teacher" aria-label="Default select example">
              {
                teacher.map((cv, idx, arr) => {
                  console.log(cv);
                  return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                })
              }
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control id="student_name" type="text" placeholder="Enter name" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="button" onClick={() => { createStudent() }}>
            Submit
          </Button>
        </Form>
        <br />
        <hr />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr className='text-center'>
              <th>Id</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vishnu Jaat
                
              </td>
              <td>
                <Button className='btn btn-primary btn-sm me-2 '>View</Button>
                <Button className='btn btn-success btn-sm me-2'>Edit</Button>
                <Button className='btn btn-danger btn-sm me-2'>Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}
//3. Export Area