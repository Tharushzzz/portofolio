
import ShapeGrid from "../components/Galexy/ShapeGrid"
import { useState } from "react"
import Project from "../components/Showcase/Project"
import Certificates from "../components/Showcase/Certificates"
import portfolioImage from "../assets/projectimages/protfolio.png"


const projects = [
    {
        title : "Interactive Portfolio Site",
        description : "asdasdasdasdsadsadasd",
        technologies : ["React","Tailwind css","TypeScript"],
        image : portfolioImage 

    },
    {
        title : "Interactive Portfolio Site",
        description : "asdasdasdasdsadsadasd",
        technologies : ["React","Tailwind css","TypeScript"] ,
        image : portfolioImage

    },
    {
        title : "Interactive Portfolio Site",
        description : "asdasdasdasdsadsadasd",
        technologies : ["React","Tailwind css","TypeScript"],
        image : portfolioImage 

    }
]


const certifications = [
    {
        title : "Web Development Certification",
        description : "asdasdasdasdasdasdsad",
        skils : ["UI/UX","React","TS"],
        image : portfolioImage
    },
    {
        title : "Web Development Certification",
        description : "asdasdasdasdasdasdsadsattt",
        skils : ["UI/UX","React","TS"],
        image : portfolioImage
    },
    {
        title : "Web Development Certification",
        description : "asdasdasdasdasdasdsadttt",
        skils : ["UI/UX","React","TS"],
        image : portfolioImage
    }
]





const Showcase = () => {
        const [activeTab, setActiveTab] = useState<"project" | "certificate">("project")
        const [visibleCount, setVisibleCount] = useState({
            project: 2,
            certificate: 2,
        })

        const visibleProjects = projects.slice(0, visibleCount.project)
        const visibleCertifications = certifications.slice(0, visibleCount.certificate)
        const hasMoreItems = activeTab === "project"
            ? visibleCount.project < projects.length
            : visibleCount.certificate < certifications.length

        const handleSeeMore = () => {
            setVisibleCount((previous) => ({
                ...previous,
                [activeTab]: Math.min(
                    previous[activeTab] + 2,
                    activeTab === "project" ? projects.length : certifications.length
                ),
            }))
        }

  return (
    <div id="showcase" className="relative w-full  overflow-hidden bg-[#120F17] -scroll-mt-19">
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

        {/* Show cases */}
        <div className="relative w-full  mt-32 z-10 flex flex-col gap-10">

            <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-5xl text-white scale-x-150 font-bold shadow-2xl shadow-white/30 px-4">Portfolio Showcase</div>
                <div className="text-md text-white/60 ">Explore journey through projects and cetification expertise.Each section a milistone in my continuous learning path.</div>
            </div>

            <div className="flex flex-1 mx-30 items-center flex-col">
                {/* change btn */}
                <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/15 bg-black/60 p-2 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:w-2/4">
                    <button
                        type="button"
                        onClick={() => setActiveTab("project")}
                        className={`flex-1 rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 cursor-pointer ${
                            activeTab === "project"
                                ? "border border-cyan-400/30 bg-cyan-400/15 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.15)]"
                                : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/12 hover:text-white"
                        }`}
                    >
                        Project
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("certificate")}
                        className={`flex-1 rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 cursor-pointer ${
                            activeTab === "certificate"
                                ? "border border-cyan-400/30 bg-cyan-400/15 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.15)]"
                                : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/12 hover:text-white"
                        }`}
                    >
                        Cetificates
                    </button>
                </div>


                {/* project card */}

                <div className="flex w-full max-w-5xl flex-1 flex-col gap-10 justify-center mt-10 mb-7">
                    {activeTab === "project" ? (
                        visibleProjects.map((project, index) => (
                            <Project
                                key={`${project.title}-${index}`}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                image={project.image}
                            />
                        ) )
                        
                    ) : (
                        visibleCertifications.map((certificat, index) => (
                            <Certificates
                                key={`${certificat.title}-${index}`}
                                title={certificat.title}
                                description={certificat.description}
                                skils={certificat.skils}
                                image={certificat.image}
                            />
                        ))
                        
                    )}

                    {hasMoreItems && (
                        <div className="flex justify-center pt-2">
                            <button
                                type="button"
                                onClick={handleSeeMore}
                                className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-white"
                            >
                                See More
                            </button>
                        </div>
                    )}
                </div>


            </div>

            
        </div>



    </div>
  )
}

export default Showcase
