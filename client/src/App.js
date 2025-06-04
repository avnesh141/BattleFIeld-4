import { useEffect } from 'react';
import './App.css';
import ServerInfo from './components/ServerInfo';

function App() {

  useEffect(() => {
      const body=document.body;
      body.style.cursor=`url("assets/60382eca8956d174010393f3_cursor.svg"),auto`;
  }, [])
  
  return (
    <div className='server_body'>
   <ServerInfo/>
    </div>
    
  );
}

export default App;
