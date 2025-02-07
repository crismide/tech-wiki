import NavButton from './NavButton';

const Navigation = () => {
    return (
      <div className='flex gap-8 px-[58px] py-[30px] text-[16px]'>
          <NavButton to="/" label="Home" />
          <NavButton to="/roadmap" label="RoadMap" />
      </div>
  )
}

export default Navigation