import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <div className='font-[roboto]'>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab == 'home'? <Home/> :<h1>Roadmap</h1>}
    </div>
    
  );
}

export default App
