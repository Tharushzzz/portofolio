import ShapeGrid from "../components/Galexy/ShapeGrid"
import { useState } from "react"

const Showcase = () => {
        const [activeTab, setActiveTab] = useState<"project" | "certificate">("project")

  return (
    <div className="relative w-full  overflow-hidden bg-[#120F17]">
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

                <div className="flex w-full max-w-5xl flex-1 justify-center mt-10 mb-7">
                    {activeTab === "project" ? (
                        <div className="grid w-full gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:grid-cols-[1.1fr_0.9fr] md:p-8">
                            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-cyan-500/15 via-white/5 to-transparent p-6">
                                <div>
                                    <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                                        Featured Project
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">Interactive Portfolio Site</h3>
                                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                                        A responsive portfolio experience with animated sections, modern UI polish, and smooth content transitions.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">React</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">TypeScript</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Tailwind</span>
                                </div>
                            </div>

                            <div className="grid place-items-center rounded-3xl border border-white/10 bg-black/30 p-6">
                                <div className="w-full rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),rgba(255,255,255,0.05)_35%,rgba(0,0,0,0.25)_100%)] p-6 text-center shadow-inner shadow-black/30">
                                    <div className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Project Snapshot</div>
                                    <div className="mt-4 text-5xl font-bold text-white">01</div>
                                    <div className="mt-4 text-sm leading-6 text-slate-300">This area can later hold a screenshot, mockup, or live preview of the project.</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid w-full gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:grid-cols-[0.95fr_1.05fr] md:p-8">
                            <div className="grid place-items-center rounded-3xl border border-white/10 bg-black/30 p-6">
                                <div className="w-full rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-6 text-center shadow-inner shadow-black/30">
                                    <div className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Certificate Preview</div>
                                    <div className="mt-4 flex h-56 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-black/25 text-sm text-slate-400">
                                        Certificate image placeholder
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/5 to-cyan-500/10 p-6">
                                <div>
                                    <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                                        Certification
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">Web Development Certification</h3>
                                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                                        A clean card layout for certificates, achievements, and learning milestones.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Frontend</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">UI Design</span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Achievement</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


            </div>

            
        </div>



    </div>
  )
}

export default Showcase
