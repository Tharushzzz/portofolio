import { useEffect, useState } from "react";
import Home from './pages/Home'
import './App.css'
import About from './pages/About'
import Showcase from './pages/Showcase'
import Footer from './pages/Footer'
import PageLoader from './components/PageLoader'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>

      {isLoading && <PageLoader />}

      <Home />
      <About />
      <Showcase />
      <Footer />
    </>
  )

}

export default App
