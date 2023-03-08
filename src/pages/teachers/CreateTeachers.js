//1. Import Area
import React from 'react'
import { Table,Button,Form } from 'react-bootstrap'
//2. Definition Area
export default function CreateTeachers() {
  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5'>Create Teacher</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Teacher Name</Form.Label>
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
              <th>Teacher Name</th>
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