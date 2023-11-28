import { FaRegHandPeace } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import { Fragment } from "react";

const NavItems = (props) => {
  return (

    <Fragment>
<div className=" lg:hidden flex py-3 justify-between  items-center pt-6 px-2">
        
        <FaRegHandPeace  className="text-main font-bold h-12 w-12" />
        <BiMenuAltLeft onClick={props.showMenuHandler}   className="text-main font-bold h-12 w-12"/>

    </div>
    <div className="hidden lg:flex justify-between mt-[1rem] text-sm cursor-pointer">
    <FaRegHandPeace  className="text-main font-bold h-12 w-12" />
    <ul className="flex items-center mr-[6rem] gap-[5rem]  font-pops text-gray-400">
      <a href="#about">
      <li className="transition-all duration-200 ease-in lg:hover:text-main"><span className="text-main">01.</span>About</li>
      </a>
      <a href="#projects">
      <li className="transition-all duration-200 ease-in lg:hover:text-main"><span className="text-main">02.</span>Projects</li>
      </a>

      <a href="#contact">

      <li className="transition-all duration-200 ease-in lg:hover:text-main"><span className="text-main">03.</span>Contact</li>
     
      </a>
      
      <li>
      <a  target="_blank"  rel="noreferrer" href="https://drive.google.com/file/d/1tuIigY3Q02gnZZXRqxqNR6-4SplNCAiJ/view?usp=drive_link">
      
      <button className="border transition-all duration-200 ease-in lg:hover:bg-gray-800  tracking-wide rounded-md border-main py-2 px-3 my-5  text-sm text-main font-semibold">
        Résumé
    </button>
      </a>
        </li>
    </ul>
    </div>

    </Fragment>
    
  )
}

export default NavItems