import { useEffect, useState } from 'react'
import  {Fragment} from 'react'
import ProjectItems from './ProjectItems'
//9F4NY%S)za7fZv&
//asthma quarter drill firm winner dune purchase tobacco organ river erupt onion

const BuiltProjects = () => {
  const [projectDetails, setProjectDetails] = useState([])
  

  

  useEffect(() => {
    const fetchDetailsHandler = async()=>{
   try {
      const response = await fetch("https://portfolio-f6fcf-default-rtdb.firebaseio.com/projectData.json")
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      
      else{
      const data  = await response.json()
      const projectData = []
      for (const key in data) {
        projectData.push({
          
          description: data[key].description,
          id: data[key].id,
          title:data[key].title,
          languages:data[key].languages,
          link1: data[key].link1,
          link2: data[key].link2,
        })
      }
  
      setProjectDetails(projectData)
    
      
      }
    } catch (error) {
      console.error(error)
      console.log("error");
    }
    
    }
    fetchDetailsHandler()
   
  }, [])
  
 
  return (
     <Fragment>
      
        <div  id='projects' className="flex gap-2 py-5 mt-[6rem]  text-2xl font-pops capitalize font-semibold ">
            <p className="text-main">02.</p>

            
            <h1 className="text-gray-200 ">Some Projects {"I've"} Built</h1>
    </div>
    
  
  <div className='grid lg:grid-cols-2 gap-4 pb-5'>

   {projectDetails.map((items)=> (<ProjectItems key={items.id}  link1={items.link1} link2={items.link2}  description={items.description} title={items.title} languages={items.languages} />))} 
  </div>
    </Fragment>
  )
}

export default BuiltProjects