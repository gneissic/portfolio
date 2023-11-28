import { Fragment } from "react"
import TechList from "./TechList"
import BuiltProjects from "./BuiltProjects"
import GetInTouch from "./GetInTouch"
import Footer from "./Footer"
import {  easeIn, motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"





const BodyDetails = (props) => {

  const containerVariants ={
    visible:{opacity:1, transition: {type:"spring",  staggerChildren:0.15}},
    hidden: {opacity:0}
  }

  const childVariants={
    visible:{opacity:1, y:0, transition:{ ease:easeIn,}},
    hidden:{opacity:0, y:-20}
  }
  return (


    
<Fragment>
    <motion.div variants={containerVariants} initial="hidden" animate="visible"  onClick={props.hideMenuHandler} className={`mt-[5rem]  lg:pl-[7rem] ${props.showMenu ? " blur-sm" : ""}`}>
      
      <motion.p variants={childVariants} className="text-main font-pops  py-5 lg:tracking-wider">Hi, my name is</motion.p>
        <motion.p variants={childVariants} className="text-gray-200 text-3xl lg:text-6xl font-pops font-semibold py-4">Nwodoh Joseph</motion.p>
        <motion.p  variants={childVariants} className="text-gray-400 text-3xl font-pops py-8 pl-3 lg:text-6xl "> I interact with the web.</motion.p>
        <motion.p  variants={childVariants} className="w-[90%] font-pops text-gray-400 pt-3 lg:w-[50%] lg:text-lg">Hello there! {"I'm"} Nwodoh Joseph, a  passionate <span className="text-main"> junior frontend developer</span>  eager
         to embark on an exciting journey in the world of web development </motion.p>

         <motion.button  variants={childVariants} className="border border-main my-[3rem] text-2xl py-2 lg:py-3 px-4 rounded-md text-main font-pops transition-all duration-200 ease-in lg:hover:bg-gray-800"><a href="#about">I want to know more</a></motion.button>
         <div className=" fixed z-20 top-[33%] left-[2%] hidden lg:grid h-[50%]  text-gray-400 ">
          
      <Link to={"https://github.com/gneissic"}>
      
      <FaGithub className="h-6 w-6 transition-all duration-200 ease-in lg:hover:text-main hover:scale-110 hover:-translate-y-3"/>
        </Link>
  
        <Link to={"https://www.instagram.com/nwodoh_jay/"}>
        
      <FaInstagram   className="h-6 w-6 transition-all duration-200 ease-in lg:hover:text-main hover:scale-110 hover:-translate-y-3"/>
        
        </Link>
        <Link to={"https://twitter.com/joseph_nwodoh"}>
        
      <FaTwitter   className="h-6 w-6 transition-all duration-200 ease-in lg:hover:text-main hover:scale-110 hover:-translate-y-3"/>
        </Link>
        <Link to={"https://www.linkedin.com/in/nwodoh-joseph-0203972a2/"}>
      <FaLinkedin  className="h-6 w-6  transition-all duration-200 ease-in lg:hover:text-main hover:scale-110 hover:-translate-y-3"/>   
        
        </Link>

         </div>
        <div className="mt-[9rem]">   
            <div className="flex gap-2 py-5  text-2xl font-pops capitalize font-semibold">
            <p className="text-main">01.</p>
            <h1  id="about" className="text-gray-200 ">About me</h1>
    
            </div>
        <p className="text-gray-400 w-[93%] font-nun lg:w-[70%] text-lg">I bring a blend of creativity and technical proficiency to the table, coupled with a strong foundation
             in frontend technologies. Having honed my skills through learning from different bright minds, 
             building standard projects and participating actively in {"today's"} tech space, I am well-versed 
             in HTML, CSS, and JavaScript. I thrive on turning design concepts into seamless, user-friendly 
             interfaces that not only meet but exceed user expectations.</p>
        </div>
        <p className="text-gray-400 py-7 gont-pops">Here are a few Technologies  i am familiar with:</p>
        <ul className="grid grid-cols-2 w-[98%] lg:w-[40%] text-gray-400 font-pops">

        <TechList/>
        </ul>
        <BuiltProjects/>
        <GetInTouch />
        <Footer/>
        
    </motion.div>
</Fragment>
  )
}

export default BodyDetails