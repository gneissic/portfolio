import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const GetInTouch = () => {

    const emailAddress = 'josephnwodoh@gmail.com'; 

    const handleClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})
    const minControls = useAnimation()
  
    const firstVariants = {
      hidden: { y: 75,  opacity: 0 , },
      visible: { y:0 , opacity: 1, transition:{duration:0.5, delay:0.5} },
    }
    useEffect(() => {
      if (isInView) {
        minControls.start("visible")
      }
    
    }, [isInView, minControls])

  return (

    <div ref={ref}>
<motion.div  variants={firstVariants} animate={minControls} initial="hidden" className="lg:mr-[5rem] my-[7rem]">
<div id="contact" className="flex gap-2 py-5 mt-[6rem]  justify-center text-2xl font-pops capitalize font-semibold ">
            <p className="text-main lg:text-sm">03.</p>

            
            <h1 className="text-main text-2xl  lg:text-sm">{"What's"} Next?</h1>
    </div>
    <div className="font-pops w-[93%]  lg:w-full text-center"> 
    <p className="py-4 text-3xl lg:text-6xl text-gray-200">Get in Touch</p>
    <p className=" lg:tracking-wider text-gray-400">{"I'm"} always interested in new ideas and projects. Have you got a project in mind? {"Let's talk!"}</p>

    <button onClick={handleClick} className="border  lg:rounded-md transition-all duration-200 ease-in lg:hover:bg-gray-800 border-main py-4 px-6 my-5 rounded-sm text-main font-semibold">
        Say Hello!
    </button>

    </div>

    </motion.div>
    </div>
    
  )
}

export default GetInTouch