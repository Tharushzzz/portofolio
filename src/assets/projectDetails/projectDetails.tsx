import portfolioImage from "./protfolio.png"
import clothingStoreImage from "./clothingStore.png"
import movieAdviserImage from "./movieAdviser.png"
import musicFestivalImage from "./musicFestival.png"
import libraryManagementImage from "./libraryManagement.png"

const projectDetails = () => {
  const projects = [
    {
        title : "Interactive Portfolio Site",
        description : "asdasdasdasdsadsadasd",
        technologies : ["React","Tailwind css","TypeScript"],
        image : portfolioImage,
        live : "",
        github : "" 

    },
    {
        title : "Online Clothing Store",
        description : "This is a clothing e-commerce website built using HTML, Tailwind CSS, Custom CSS, PHP, and JavaScript. The project is designed with a responsive and modern interface to offer a seamless shopping experience.",
        technologies : ["HTML", "Tailwind CSS", "JavaScript", "PHP"] ,
        image : clothingStoreImage,
        live : "https://tharushzzz.github.io/online-clothing-store/src/index.html",
        github : "https://github.com/Tharushzzz/online-clothing-store"

    },
    {
        title : "Movie Adviser",
        description : "Welcome to Movie Show Adviser! This is a web application built with React that helps users find movie recommendations,showtimes, and other relevant details about their favorite films",
        technologies : ["React", "JavaScript", "CSS", "Tailwind CSS", "Movie API"],
        image : movieAdviserImage,
        live : "https://movie-show-adviser.netlify.app/",
        github : "https://github.com/Tharushzzz/movie-adviser" 

    },
    {
        title : "Music Festival Website",
        description : "Welcome to the Music Festival Website! This is a web application built with React that helps users find information about upcoming music festivals, artists, and events.",
        technologies : ["HTML5", "Tailwind CSS", "JavaScript"],
        image : musicFestivalImage,
        live : "https://tharushzzz.github.io/music-festival/src/index.html",
        github : "https://github.com/Tharushzzz/music-festival" 

    },
    {
        title : "Library Management System",
        description : "A comprehensive library management system built with modern web technologies.",
        technologies : ["HTML5", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "XAMPP"],
        image : libraryManagementImage,
        live : "",
        github : "https://github.com/Tharushzzz/Library_Management_System" 

    }
]
  return { projects }
}

export default projectDetails
