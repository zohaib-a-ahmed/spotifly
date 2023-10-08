import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AuthCallback from './components/AuthCallback'; 
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>  {/* The Switch component renders the first Route that matches the current path */}
        <Route path="/" Component={Login} />
        <Route path="/auth/callback" Component={AuthCallback} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
