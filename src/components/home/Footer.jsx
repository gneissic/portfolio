import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className=" flex lg:hidden justify-center gap-[3rem] mb-[1rem] mt-[4.5rem] text-gray-400 font-semibold">

      <Link to={"https://github.com/gneissic"}>
      
    <FaGithub className="h-6 w-6"/>
      </Link>

      <Link to={"https://www.instagram.com/nwodoh_jay/"}>
      
    <FaInstagram   className="h-6 w-6"/>
      
      </Link>
      <Link to={"https://twitter.com/joseph_nwodoh"}>
      
    <FaTwitter   className="h-6 w-6"/>
      </Link>
      <Link to={"https://www.linkedin.com/in/nwodoh-joseph-0203972a2/"}>
    <FaLinkedin  className="h-6 w-6"/>   
      
      </Link>
    </div>
  )
}

export default Footer