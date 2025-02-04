import CardTech from "./CardTech"
import technologies from "../content/techlist.ts"

const Home = () => {
  return (
    <div className="text-center">
        {/* header */}
        <h1 
          className="text-[64px] font-bold text-blue-900 bg-gradient-to-r from-[#06358c] to-[#f4cc1a] bg-clip-text text-transparent"
        >TechWiki</h1>
        <p className="text-[#7A7A7A] text-[16px] italic ">“Success is neither magical nor mysterious. Success is the <br/> natural consequence of consistently applying basic <br/>fundamentals”</p>

        {/* tech list */}
        <div className="py-[40px] px-[105px]">
          <h2 className="text-[28px] text-start mb-6">Technologies</h2>
          <div className="grid grid-cols-3 w-full">
            {technologies.map((item) => (
              <CardTech
                img = {item.img}
                name = {item.name}
                state = {item.state}
                description = {item.description}
              />
            ))}
          </div>
        </div>

    </div>
  )
}

export default Home