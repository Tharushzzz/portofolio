import Galaxy from "../components/Galexy/Galaxy"
import Header from "../components/Header/Header"

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#120f16]">
      <Galaxy 
        mouseRepulsion={false}
        mouseInteraction
        density={2.4}
        glowIntensity={0.1}
        saturation={0}
        hueShift={60}
        twinkleIntensity={0.6}
        rotationSpeed={0}
        repulsionStrength={2.5}
        autoCenterRepulsion={0}
        starSpeed={0.2}
        speed={0.5}
      />
      <Header />


</div>
  )
}

export default Home
