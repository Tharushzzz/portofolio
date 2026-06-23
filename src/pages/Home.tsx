import ShapeGrid from "../components/Galexy/ShapeGrid"
import Header from "../components/Header/Header"
import HeroSection from "../components/Hero/HeroSection"



const Home = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-x-hidden bg-[#120F17] flex">
      
      <Header />
      <HeroSection />
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
  )
}



export default Home
