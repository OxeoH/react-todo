import './styles/app.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import { Routes, Route, Router } from 'react-router-dom';
import TaskTable from './components/TaskTable/TaskTable';
import { authRoutes, defaultRoutes } from './routes';

function App() {
  const isAuth = false//!
  return (
    <div className='main'>
      <div className="container">
        <Header/>
          <Routes>
            <>
              {isAuth && authRoutes.map((route) => {
                <Route path={route.path} element={<route.Component/>}/>
              })}
              {
                defaultRoutes.map((route) => {
                  <Route path={route.path} element={<route.Component/>}/>
                })
              }
            </>
          </Routes>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
