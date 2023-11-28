import { Fragment } from "react"
import { IoClose } from "react-icons/io5"
import { AnimatePresence, motion } from "framer-motion";


const Sidebar = (props) => {

    const sideContainer  = {
        visible: {x:0, opacity: 1},
        hidden: {x:"100vw", opacity:0}
    }
  return (
    <Fragment>
        <AnimatePresence>
    { props.showMenu && <motion.div  exit="hidden" initial="hidden" animate="visible" variants={sideContainer} className="fixed  z-10  right-0 pt-[2rem] w-[18rem]  h-full bg-gray-950">
    <div className="flex justify-end items-center mr-7  " onClick={props.hideMenuHandler}>
<IoClose  className="text-main  h-12 w-12"  />
    </div>
    <div className="grid gap-[4rem] text-xl font-pops mt-[4rem] text-center ">
        <a href="#about"  onClick={props.hideMenuHandler}>
            <p className="text-main font-semibold">01 .</p>
            <p className="text-gray-400 font-semibold">About</p>
        </a>
        <a href="#projects"  onClick={props.hideMenuHandler}>
            <p className="text-main font-semibold">02 .</p>
            <p className="text-gray-400 font-semibold">Projects</p>
        </a>
        <a href="#contact"  onClick={props.hideMenuHandler}>
            <p className="text-main font-semibold">03 .</p>
            <p className="text-gray-400 font-semibold">Contact</p>
        </a>
        <div>
            <a  target="_blank"  rel="noreferrer" href="https://drive.google.com/file/d/1tuIigY3Q02gnZZXRqxqNR6-4SplNCAiJ/view?usp=drive_link">
            <button className="border  tracking-wide rounded-md border-main py-4 px-6 my-5  text-sm text-main font-semibold">
        Résumé
    </button>
            </a>
       

        </div>
    </div>
    </motion.div>}
    </AnimatePresence>
    </Fragment>
  )
}

export default Sidebar