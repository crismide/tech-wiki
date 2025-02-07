import { useNavigate } from 'react-router-dom';

const CardTech = ({img,name,id,state,description}) => {
    const navigate = useNavigate();
    
    return (
        <div className="shadow shadow-lg w-[330px] border rounded-3xl border-0 my-4" onClick={() => navigate(id)}>
            <div className="h-38 overflow-hidden">
                <img src={img} alt="" className="border rounded-t-3xl w-full h-full object-cover"/>
            </div>
            <div className="px-[28px] py-[17px]">
                <div className="flex flex-row mb-3">
                    <h1 className="mr-6 text-[24px]">{name}</h1>
                    <h3 className="border rounded-full py-1.5 px-3">{state}</h3>
                </div>
                <p className="text-left italic font-light">{description}</p>
            </div>
        </div>
  )
}

export default CardTech