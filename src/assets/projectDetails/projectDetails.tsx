import portfolioImage from "../projectimages/protfolio.png"

const projectDetails = () => {
  const projects = [
    {
        title : "Interactive Portfolio Site",
        description : "asdasdasdasdsadsadasd",
        technologies : ["React","Tailwind css","TypeScript"],
        image : portfolioImage,
        live : "https://tharusha-dilmin.github.io/portfolio/",
        github : "" 

    },
    {
        title : "Online Clothing Store",
        description : "Welcome to the Online Clothing Store project! This is a clothing e-commerce website built using HTML, Tailwind CSS, Custom CSS, PHP, and JavaScript. The project is designed with a responsive and modern interface to offer a seamless shopping experience.",
        technologies : ["HTML", "Tailwind CSS", "JavaScript", "PHP"] ,
        image : portfolioImage,
        live : "https://tharusha-dilmin.github.io/portfolio/",
        github : ""

    },
    {
        title : "Interactive Portfolio Site",
        description : "asdasdasdasdsadsadasd",
        technologies : ["React","Tailwind css","TypeScript"],
        image : portfolioImage,
        live : "https://tharusha-dilmin.github.io/portfolio/",
        github : "" 

    }
]
  return { projects }
}

export default projectDetails
