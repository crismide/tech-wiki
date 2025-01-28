import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <div className=''>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab == 'home'?<h1>Home</h1>:<h1>Roadmap</h1>}
    </div>
    
  );
}

export default App
