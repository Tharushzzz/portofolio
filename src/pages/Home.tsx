import ShapeGrid from "../components/Galexy/ShapeGrid"
import Header from "../components/Header/Header"

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#120F17]">
      <ShapeGrid 
        speed={0.1}
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor="#2F293A"
        hoverFillColor='#222'
        shape='square' // square, hexagon, circle, triangle
        hoverTrailAmount={8} // number of trailing hovered shapes (0 = no trail)
      />
      <Header />


</div>
  )
}

export default Home
