//1. Import Area
import React from 'react'
import { Form, Button,Table } from 'react-bootstrap'
//2. Definition Area
export default function CreateStudent() {
  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5'>Create Student</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Select aria-label="Default select example">
              <option> Select Teacher</option>
              <option value="1">TeacherA</option>
              <option value="2">TeacherB</option>
              <option value="3">TeacherC</option>
              <option value="4">TeacherD</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <hr />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Student Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
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