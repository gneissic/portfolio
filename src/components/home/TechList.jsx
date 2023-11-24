import { Fragment } from "react"
import { SiFigma, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaGitSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const TechList = () => {
  return (
    <Fragment>
        <li className="flex gap-2 items-center">
            <p> <SiTailwindcss className="text-main" /> </p>
            <p>Tailwind css</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <IoLogoJavascript className="text-main" /> </p>
            <p>Javascript</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <FaReact className="text-main" /> </p>
            <p>React.js</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <SiNextdotjs className="text-main" /> </p>
            <p>Next.js</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <SiMongodb className="text-main" /> </p>
            <p>Mongodb</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <FaGitSquare className="text-main" /> </p>
            <p>git</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <FaNodeJs className="text-main" /> </p>
            <p>Node.js</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <SiFirebase className="text-main" /> </p>
            <p>Firebase</p>
        </li>
        <li className="flex gap-2 items-center">
            <p> <SiFigma className="text-main" /> </p>
            <p>Figma</p>
        </li>
    </Fragment>
  )
}
export default TechList