//1. Import Area
import React from 'react'
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//2. Definition Area
export default function Navigation() {
    return (
            <>
                <h1>Create Student</h1>
                <Nav className='navigation'
            
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                        <Link className="nav-link active" to="/">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/student/create">StudentCreate</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/teacher/create" >TeacherCreate</Link>
                    </Nav.Item>
                </Nav>
            </>    
        )
    }
//3. Definition Area
//3.1 Default Export Area
//3.2 Named Export Area