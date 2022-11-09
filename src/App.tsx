import React from 'react';
import './scss/app.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {
  return (
    <div className='main'>
      <div className="container">
        <Header/>
        <Table/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
