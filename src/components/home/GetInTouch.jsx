
const GetInTouch = () => {

    const emailAddress = 'josephnwodoh@gmail.com'; 

    const handleClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };

  return (
    <div>
<div id="contact" className="flex gap-2 py-5 mt-[6rem]  justify-center text-2xl font-pops capitalize font-semibold ">
            <p className="text-main">03.</p>

            
            <h1 className="text-main text-2xl ">{"What's"} Next?</h1>
    </div>
    <div className="font-pops w-[93%] text-center"> 
    <p className="py-4 text-3xl text-gray-200">Get in Touch</p>
    <p className="text-gray-400">{"I'm"} always interested in new ideas and projects. Have you got a project in mind? {"Let's talk!"}</p>

    <button onClick={handleClick} className="border border-main py-4 px-6 my-5 rounded-sm text-main font-semibold">
        Say Hello!
    </button>

    </div>

    </div>
  )
}

export default GetInTouch