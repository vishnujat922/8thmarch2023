import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import CreateStudent from "./pages/CreateStudent"
import CreateTeacher from "./pages/CreateTeachers"
import Login from "./pages/Login"
import NotFound from './pages/NotFound'
import LayOut from './components/ui/LayoOut';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path='/teacher/create' element={<CreateTeacher />}/>
            <Route path='/student/create' element={<CreateStudent />}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;