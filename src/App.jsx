
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import  supabase  from './utils/supabase.js'
import './App.css';
import Create from './Components/Create/Create';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Create />
      <Footer />
    </>
  );
}
  export default App;