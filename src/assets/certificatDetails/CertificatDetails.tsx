import Ui from "./ui-ux.png"
import Java from "./java.png"
import C from "./c.png"
import GitHub from "./github.png"
import Python from "./python.png"
import Php from "./php.png"
import figma from "./figma.png"
import Tailwind from "./tailwind.png"
import javascript from "./javascript.png"
import EthicalHacking from "./ethicalHacking.png"


const CertificatDetails = () => {

    const certifications = [
        {
            title : "Learn Figma: UI/UX Design Masterclass From Beginner to Pro",
            description : "Udemy",
            skils : ["UI/UX","Figma"],
            image : Ui,
            certificateLink : "https://www.udemy.com/certificate/UC-4d7e72cc-e63f-4198-918f-952c173a4237/"
        },
        {
            title : "Java for Beginners - Learn all the Basics of Java",
            description : "Udemy",
            skils : ["Java"],
            image : Java,
            certificateLink : "https://www.udemy.com/certificate/UC-d707f8f8-a85c-422f-aded-393323a945fa/"
        },
        {
            title : "The Complete C Programming Course for Basic to Expert",
            description : "Udemy",
            skils : ["C Programming"],
            image : C,
            certificateLink : "https://www.udemy.com/certificate/UC-1084b1b5-e243-46cf-ae57-fae06fed20ad/"
        },
        {
            title : "The Git & GitHub Bootcamp: The Complete-Practical Guide",
            description : "Udemy",
            skils : ["GitHub","Git"],
            image : GitHub,
            certificateLink : "https://www.udemy.com/certificate/UC-03b876fe-72b2-4b6f-a95e-952bcfea31c6/"
        },
        {
            title : "Python for Beginners",
            description : "University of Moratuwa",
            skils : ["Python"],
            image : Python,
            certificateLink : "https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
        },
        {
            title : "Figma Design Course. Your Website from Start to Finish",
            description : "Udemy",
            skils : ["Figma","UI/UX"],
            image : figma,
            certificateLink : "https://www.udemy.com/certificate/UC-53b4007e-092e-4e36-9cd5-990346c9854c/"
        },
        {
            title : "TailwindCSS from A to Z: Master TailwindCSS Quickly",
            description : "Udemy",
            skils : ["TailwindCSS","CSS"],
            image : Tailwind,
            certificateLink : "https://www.udemy.com/certificate/UC-06c9c402-cb7a-45f0-ba5f-431a4c31e044/"
        },
        {
            title : "PHP for Beginners - Food Order Website Project",
            description : "Udemy",
            skils : ["PHP","MySQL","Backend Development"],
            image : Php,
            certificateLink : "https://www.udemy.com/certificate/UC-35aa0e51-2130-42c2-9654-c78941622267/"
        },
        {
            title : "Hands-On JavaScript, Crafting 10 Projects from Scratch",
            description : "Udemy",
            skils : ["JavaScript","Web Development"],
            image : javascript,
            certificateLink : "https://www.udemy.com/certificate/UC-52dc82f3-a027-4322-a366-7d94a2ee37fe/"
        },
        {
            title : "Ethical Hacking: Malware Secrets",
            description : "Udemy",
            skils : ["Ethical Hacking","Cyber Security"],
            image : EthicalHacking,
            certificateLink : "https://www.udemy.com/certificate/UC-b5e11bcb-d02a-4b76-8b7b-a3f1ec788167/"
        }
        

    ]

  return { certifications }
}

export default CertificatDetails
