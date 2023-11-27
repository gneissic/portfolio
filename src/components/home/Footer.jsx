import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="flex justify-center gap-[3rem] mb-[1rem] mt-[4.5rem] text-gray-400 font-semibold">
    <FaGithub className="h-6 w-6"/>
    <FaInstagram   className="h-6 w-6"/>
    <FaTwitter   className="h-6 w-6"/>
    <FaLinkedin  className="h-6 w-6"/>   
    </div>
  )
}

export default Footer