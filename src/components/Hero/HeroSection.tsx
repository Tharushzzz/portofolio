import { TypeAnimation } from 'react-type-animation';
import Lanyard from "../Lanyard/Lanyard"


const HeroSection = () => {
  return (

    <div className='absolute w-screen h-screen flex justify-between'>

        <div className="absolute ml-50 mt-50 flex flex-col gap-10">

            <div className="text-6xl text-[#9d9d9d] font-bold flex flex-col gap-3 tracking-tighter scale-x-200 ml-21.75">
                    <div className="text-white/80">Software</div>  
                    <div className="pl-4">Developer</div>
            </div>

            <div className='flex gap-5 flex-col -ml-2.5'>
                <div className='w-full text-[#737171] text-[8px] '>
                    <TypeAnimation
                        sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Junior Programer_',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Aspiring Full Stack Developer_',
                                1000,
                                'Frontend Developer in Training_',
                                1000,
                                'Backend Developer_',
                                1000,
                                'UI/UX Enthusiast_',
                                1000,
                                'Software Engineering Student_',
                                1000
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                    />
                </div>

                <div className='w-100 text-m text-[#b7b7b7] tracking-widest flex flex-col gap-2' >
                    <span>I build modern, responsive web applications</span>
                    <span>using clean and efficient code. Passionate </span>
                    <span>about creating smooth user experiences and </span>
                    <span>scalable solutions.</span>
                
                </div>

            </div>

        </div>


        <div className='w-2/3 absolute z-0 right-0'>
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>

    </div>
         

  )
}

export default HeroSection
