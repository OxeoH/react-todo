import React from 'react';
import './styles/app.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import GroupTable from './components/GroupTable/GroupTable';
import { Routes, Route } from 'react-router-dom';
import TaskTable from './components/TaskTable/TaskTable';

function App() {
  return (
    
    <div className='main'>
      <div className="container">
        <Header/>
          <Routes>
            <Route path='/'element={<GroupTable/>}/>
              <Route path="/:id" element={<TaskTable/>}/>
            <Route path='/login'element={<div>Login Page</div>}/>
            <Route path='/Registration'element={<div>Registration Page</div>}/>
          </Routes>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
