
import { useEffect, useRef, useState } from "react"
import ShapeGrid from "../components/Galexy/ShapeGrid"
import  github  from "../assets/github.png"
import  linkdin  from "../assets/linkdin.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import myimage from "../assets/myimage.png"

import LogoLoop from '../components/logoloop/Logoloop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];



const About = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const sectionElement = sectionRef.current

        if (!sectionElement) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.25,
                rootMargin: "0px 0px -10% 0px",
            }
        )

        observer.observe(sectionElement)

        return () => observer.disconnect()
    }, [])

  return (
        <div ref={sectionRef} id="about" className="relative w-full min-h-screen overflow-hidden bg-[#120F17]">
        <div className="absolute inset-0 pointer-events-none">
            <ShapeGrid 
            speed={0.1}
            squareSize={50}
            direction='up' // up, down, left, right, diagonal
            borderColor="#2F293A"
            hoverFillColor='#222'
            shape='hexagon' // square, hexagon, circle, triangle
            hoverTrailAmount={8} // number of trailing hovered shapes (0 = no trail)
            /> 
        </div>

        <div className="relative z-10 flex text-white p-6 w-full h-full">

            {/* left side */}
            <div className={`flex flex-col mt-30 ml-20 w-1/2 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                <div className="text-[#b6b6b6] text-sm">ABOUT ME</div>
                <div className="flex flex-col gap-5 mt-6 text-5xl font-serif scale-x-120 ml-15 font-bold text-[#c8c8c8f7]">
                    <div>THARUSHA DILMIN</div>
                    <div>ABEYGUNASEKARA</div>
                </div>

                <div className="w-full text-sm mt-8 text-white/60">
                    I am an undergraduate pursuing a Bachelor of Information and Communication Technology (BICT) degree at the University of Colombo. I have a strong interest in web development, cybersecurity, and modern software technologies. I enjoy building responsive and user-friendly applications while continuously improving my programming and problem-solving skills. I am eager to learn new technologies, expand my expertise, and contribute to innovative projects that create real-world impact.
                </div>

                <div className={`mt-6 flex items-center gap-4 transition-all duration-1000 delay-150 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <a
                        href="https://github.com/Tharushzzz"
                        className="flex h-13 w-13 items-center justify-center rounded-full border border-white/15 bg-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30"
                    >
                        <img src={github} className="h-8 w-8 object-contain" alt="GitHub" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tharusha-dilmin/"
                        className="flex h-13 w-13 items-center justify-center rounded-full border border-white/15 bg-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30"
                    >
                        <img src={linkdin} className="h-8 w-8 object-contain" alt="LinkedIn" />
                    </a>
                    <a
                        href=""
                        className="flex h-13 w-13 items-center justify-center rounded-full border border-white/15 bg-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30"
                    >
                        <img src={instagram} className="h-8 w-8 object-contain" alt="Instagram" />
                    </a>
                    <a
                        href=""
                        className="flex h-13 w-13 items-center justify-center rounded-full border border-white/15 bg-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30"
                    >
                        <img src={facebook} className="h-8 w-8 object-contain" alt="Instagram" />
                    </a>
                </div>

                <div className={`mt-10 flex items-start gap-4 transition-all duration-1000 delay-300 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    
                    <div>
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white/85">
                                Skills
                            </h2>
                            <div className="h-px w-20 bg-white/20" />
                        </div>
                        


                        <div className="w-2/4 h-48 overflow-hidden mt-4">
                            
                            <LogoLoop
                                logos={techLogos}
                                speed={40}
                                direction="left"
                                logoHeight={40}
                                gap={20}
                                hoverSpeed={0}
                                scaleOnHover
                                fadeOut
                                fadeOutColor=""
                                ariaLabel="Technology partners"
                            />
                            
                        </div>

                    </div>
                </div>

            </div>

            {/* profile image */}

            <div className={`mt-40 ml-35 rounded-full bg-linear-to-br from-white/40 via-white/10 to-transparent p-0.75 shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-1000 delay-200 ease-out ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-16 scale-95 opacity-0"}`}>
                <div className="h-90 w-90 overflow-hidden rounded-full border border-white/20 bg-[#1a1620]">
                    <img className="h-full w-full rounded-full object-cover object-center" src={myimage} alt="Tharusha Dilmin" />
                </div>
            </div>



        </div>

    </div>
  )
}

export default About
