import { logoIconsList } from "../constants"

const LogoIcon = ({icon}) => {
    return (
        <div className="flx-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
  return (
    <section id="skills" className='md:my-20 my-10 relative'>
        <div className='gradient-edge' />
        <div className='gradient-edge' />

        <div className='marquee left h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {logoIconsList.map((icon) => 
                <LogoIcon key={icon.name} icon={icon} />
                )}
                {logoIconsList.map((icon) => 
                <LogoIcon key={icon.name} icon={icon} />
                )}
    
            </div>

        </div>
        <div className='marquee right h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {logoIconsList.map((icon) => 
                <LogoIcon key={icon.name} icon={icon} />
                )}
                {logoIconsList.map((icon) => 
                <LogoIcon key={icon.name} icon={icon} />
                )}
    
            </div>

        </div>
    </section>
  )
}

export default LogoSection
