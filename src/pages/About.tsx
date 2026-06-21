
import ShapeGrid from "../components/Galexy/ShapeGrid"
import  github  from "../assets/github.png"
import  linkdin  from "../assets/linkdin.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"

const About = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#120F17]">
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

            <div className="flex flex-col mt-35 ml-20">
                <div className="text-[#b6b6b6] text-sm">ABOUT ME</div>
                <div className="flex flex-col gap-5 mt-10 text-5xl font-serif scale-x-120 ml-30 font-bold text-[#c8c8c8f7]">
                    <div>THARUSHA DILMIN</div>
                    <div>ABEYGUNASEKARA</div>
                </div>

                <div className="w-2/4 text-sm mt-8 text-white/60">
                    I am an undergraduate pursuing a Bachelor of Information and Communication Technology (BICT) degree at the University of Colombo. I have a strong interest in web development, cybersecurity, and modern software technologies. I enjoy building responsive and user-friendly applications while continuously improving my programming and problem-solving skills. I am eager to learn new technologies, expand my expertise, and contribute to innovative projects that create real-world impact.
                </div>

                <div className="mt-8 flex items-center gap-4">
                    <a
                        href=""
                        className="flex h-13 w-13 items-center justify-center rounded-full border border-white/15 bg-white/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-black/30"
                    >
                        <img src={github} className="h-8 w-8 object-contain" alt="GitHub" />
                    </a>
                    <a
                        href=""
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

            </div>
        </div>

    </div>
  )
}

export default About
