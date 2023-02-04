import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import Register from './Register';
import Notes from './Components/Notes';
import NoteState from './context/notes/NoteState';
import ProtectedRoute from "./Components/protected";



function App() {
  return (
    <>
      <NoteState>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
       {/*  <Route path='/notes' element={<Notes />} /> */}
          <Route
            path="notes"
            element={
              <ProtectedRoute>
                <Notes/>
              </ProtectedRoute>
            }
          />



        </Routes>
        </NoteState>

        </>


        );
}
        export default App;
