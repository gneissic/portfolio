import { FaRegHandPeace } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
const NavItems = () => {
  return (
    <div className="flex py-3 justify-between  items-center pt-6 px-2">
        
        <FaRegHandPeace  className="text-main font-bold h-12 w-12" />
        <BiMenuAltLeft   className="text-main font-bold h-12 w-12"/>

    </div>
  )
}

export default NavItems