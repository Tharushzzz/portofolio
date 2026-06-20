
import ShapeGrid from "../components/Galexy/ShapeGrid"

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

        <div className="relative z-10 flex text-white p-6">
            <div>ABOUT ME</div>
        </div>

    </div>
  )
}

export default About
