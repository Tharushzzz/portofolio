import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="absolute ml-50 mt-50 flex flex-col gap-10">

      <div className="text-6xl text-[#9d9d9d] font-bold flex flex-col gap-3 tracking-tighter scale-x-160">
        <div className="text-white/80">Software</div>  
        <div className="pl-4">Developer</div>
      </div>

      <div className='w-full text-[#737171] text-[8px] '>
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'We produce food for Mice',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We produce food for Hamsters',
                1000,
                'We produce food for Guinea Pigs',
                1000,
                'We produce food for Chinchillas',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
        
      </div>
    </div>
  )
}

export default HeroSection
