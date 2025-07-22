import './App.css';
import AppRouter from './AppRouter';
import { useState} from 'react';
import { useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);


  return (
    <div className='bg-[#1A1A1A] min-h-screen'>
      <div className='flex justify-start items-center h-screen'>
        <AppRouter isAuth={isAuth} setIsAuth={setIsAuth} />
      </div>
    </div>
  );
}

export default App;