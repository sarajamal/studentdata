
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentTable from './StudentTable';
import CreateStudent from './Operations/CreateStudent';
import EditStudent from './Operations/EditStudent';
import DetailsStudent from './Operations/DetailsStudent';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<StudentTable/>}></Route>
    <Route path="/student/create" element={<CreateStudent/>}></Route>
    <Route path="/student/edit/:studentID" element={<EditStudent/>}></Route>
    <Route path="/student/view/:studentID" element={<DetailsStudent/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
