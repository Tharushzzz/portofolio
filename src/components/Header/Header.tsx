import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 
            w-[90%] max-w-7xl
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-2xl
            shadow-lg
            px-6 py-2 mt-4 z-10">

        <div className="flex items-center justify-between sticky">
        
        
        <div className=" w-22.5">
            <img src={logo} alt="logo"></img>
        </div>

        
        <div className="flex items-center gap-8">
            <a href="#" className="relative text-gray-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
            <a href="#" className="relative text-gray-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#" className="relative text-gray-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Portfolio
            </a>
            <a href="#" className="relative text-gray-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>

        </div>

    </div>
      
    </div>
  )
}

export default Header
