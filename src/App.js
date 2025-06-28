import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  
  return (
    <div className='bg-[#1A1A1A] min-h-screen'>
      <div className='flex justify-start items-center h-screen'>
        {
          login ?
          <Register switchForm={() => setLogin(false)}></Register>
          :
          <Login switchForm={() => setLogin(true)}></Login>
        }
      </div>
    </div>
  );
}

export default App;