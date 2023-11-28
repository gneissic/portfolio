import { Fragment, useState } from "react";
import BodyDetails from "../components/home/BodyDetails";
import NavItems from "../components/nav/NavItems";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
    const [showMenu, setShowMenu] = useState(false)

    const showMenuHandler  = ()=> {
        setShowMenu(true)
    }
    const hideMenuHandler  = ()=> {
        setShowMenu(false)
    }
  return (
    <Fragment>
      <Sidebar showMenu={showMenu} hideMenuHandler={hideMenuHandler} showMenuHandler={showMenuHandler} />
      <div className="pl-5">
        <NavItems showMenuHandler={showMenuHandler} />
        <BodyDetails showMenu={showMenu}  hideMenuHandler={hideMenuHandler} />
      </div>
    </Fragment>
  );
};

export default HomePage;
