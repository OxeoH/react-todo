import './styles/app.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, defaultRoutes } from './routes';
import { useStore } from './store';
import { observer } from 'mobx-react-lite';

function App() {

  
  const {userStore} = useStore()
  
  
  
  return (
    <div className='main'>
      <div className="container">
        <Header/>
          <Routes>
              {userStore.isAuth && authRoutes.map(({path, Component}) => 
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

export default observer(App);
