import ShapeGrid from "../components/Galexy/ShapeGrid"

const Showcase = () => {
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

        {/* Show cases */}
        <div className="relative w-full h-full mt-32 z-10 flex flex-col gap-10">

            <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-5xl text-white scale-x-150 font-bold shadow-2xl shadow-white/30 px-4">Portfolio Showcase</div>
                <div className="text-md text-white/60 ">Explore journey through projects and cetification expertise.Each section a milistone in my continuous learning path.</div>
            </div>

            <div className="flex flex-1 mx-30 items-center flex-col">
                {/* change btn */}
                <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/15 bg-black/60 p-2 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:w-2/4">
                    <div className="flex-1 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-5 py-3 text-center text-sm font-semibold tracking-[0.18em] text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/25 hover:text-white cursor-pointer">
                        Project
                    </div>
                    <div className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold tracking-[0.18em] text-white/80 transition duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:text-white cursor-pointer">
                        Cetificates
                    </div>
                </div>


                {/* project card */}

                <div className="flex flex-1">


                </div>

                {/* certification image card  */}
                <div>
                    
                </div>


            </div>

            
        </div>



    </div>
  )
}

export default Showcase
