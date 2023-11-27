import { Fragment } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectItems = (props) => {
  return (
    <Fragment>   
        
      <div className="bg-transparent/20 w-[87%] font-pops pl-5 ">
        <p className="py-5 text-2xl tracking-wide text-gray-200">{props.title}</p>
        <p className="text-gray-400 w-[90%]">
         {props.description}
        </p>
        
        <p className="w-[95%] py-5 text-gray-400">
          {props.languages}
        </p>
        <div className="flex gap-5 pb-5">
          <Link target="_blank" to={props.link1}>
            <FaGithub className="h-6 w-6 text-gray-400" />
          </Link>

          <Link to={props.link2} target="_blank">
            <FaExternalLinkAlt className="h-6 w-6 text-gray-400" />
          </Link>
        </div>
      </div>

    </Fragment>

  );
};

export default ProjectItems;
