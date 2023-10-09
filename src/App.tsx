import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import AuthCallback from './components/AuthCallback';
import Dash from './components/Dash';

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" Component={Login} />
        <Route path="/auth" Component={AuthCallback} />
        <Route path='/dash' Component={Dash}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
