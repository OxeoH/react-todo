import React from 'react';
import './styles/app.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import GroupTable from './components/GroupTable/GroupTable';
import { Routes, Route } from 'react-router-dom';
import TaskTable from './components/TaskTable/TaskTable';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  return (
    
    <div className='main'>
      <div className="container">
        <Header/>
          <Routes>
            <Route path='/'element={<GroupTable/>}/>
              <Route path="/:id" element={<TaskTable/>}/>
            <Route path='/login'element={<LoginPage/>}/>
            <Route path='/registration'element={<RegisterPage/>}/>
          </Routes>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
