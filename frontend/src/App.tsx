import './styles/app.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, defaultRoutes } from './routes';
import { useContext } from 'react';
import { appContext } from '.';

function App() {

  const {user} = useContext(appContext)
  console.log(user);
  
  return (
    <div className='main'>
      <div className="container">
        <Header/>
          <Routes>
              {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={`${Component}`} path={path} element={<Component/>}/>
              )}
              {
                defaultRoutes.map(({path, Component}) => 
                  <Route key={`${Component}`} path={path} element={<Component/>}/>
                )
              }
          </Routes>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
