import Navigation from '../components/Navigation'
import { ReactFlow } from '@xyflow/react'; 
import '@xyflow/react/dist/style.css';
import CardTech from '../components/CardTech';

const RoadMap = () => {
    
    return (
        <div>
            <Navigation/>
            <div className='text-center'>
                <h1 
                    className="text-[36px] font-bold text-blue-900 bg-gradient-to-r from-[#06358c] to-[#f4cc1a] bg-clip-text text-transparent"
                >Roadmap</h1>
                <p 
                    className="text-[#7A7A7A] text-[16px] italic "
                    >“The journey pf a thousand miles begin with one step”</p>
            </div>
            
        </div>
    )
}

export default RoadMap