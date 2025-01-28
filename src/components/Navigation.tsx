import React from 'react'

type NavigationProps = {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  };

const Navigation: React.FC<NavigationProps> = ({activeTab,setActiveTab}) => {
  return (
    <div className='flex gap-[54px] px-[60px] py-[40px] text-[16px]'>
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button 
            onClick={() => setActiveTab('roadmap')} 
            className={`${activeTab === 'roadmap' ? 'bg-[#DB3069] text-white w-[100px] rounded-full transition duration-300 ease-in-out' : 'bg-transparent text-black'}`}>
            Roadmap
        </button>
    </div>
  )
}

export default Navigation