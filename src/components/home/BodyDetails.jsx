import { Fragment } from "react"
import TechList from "./TechList"


const BodyDetails = () => {
  return (
<Fragment>
    <div className="mt-[5rem]">
        <p className="text-main font-pops  py-5">Hi, my name is</p>
        <p className="text-gray-200 text-3xl font-pops font-semibold py-4">Nwodoh Joseph</p>
        <p className="text-gray-400 text-3xl font-pops py-8 pl-3 "> I interact with the web.</p>
        <p className="w-[90%] font-pops text-gray-400 pt-3">Hello there! {"I'm"} Nwodoh Joseph, a  passionate <span className="text-main"> junior frontend developer</span>  eager
         to embark on an exciting journey in the world of web development </p>
         <button className="border border-main my-[3rem] text-lg py-2 px-4 rounded-md text-main font-pops">I want to know more</button>
        <div className="mt-[9rem]">   
            <div className="flex gap-2 py-5  text-lg font-pops capitalize font-semibold">
            <p className="text-main">01.</p>
            <h1 className="text-gray-200 ">About me</h1>
    
            </div>
        <p className="text-gray-400 w-[93%] font-nun">I bring a blend of creativity and technical proficiency to the table, coupled with a strong foundation
             in frontend technologies. Having honed my skills through learning from different bright minds, 
             building standard projects and participating actively in {"today's"} tech space, I am well-versed 
             in HTML, CSS, and JavaScript. I thrive on turning design concepts into seamless, user-friendly 
             interfaces that not only meet but exceed user expectations.</p>
        </div>
        <p className="text-gray-400 py-7 gont-pops">Here are a few Technologies  i am familiar with:</p>
        <ul className="grid grid-cols-2 w-[98%] text-gray-400 font-pops">

        <TechList/>
        </ul>
    </div>
</Fragment>
  )
}

export default BodyDetails