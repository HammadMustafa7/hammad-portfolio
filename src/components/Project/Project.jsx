import portfolio from "../../assets/Portfolio.png";

function Project() {

  const projects = [
    {
      "title": "Portfolio Website",
      "description": "A modern and responsive portfolio website built using React and styled with Tailwind CSS. This project showcases my skills in creating visually appealing and highly functional web applications. It includes interactive UI components, smooth transitions, and a clean design optimized for all devices.",
      "image": portfolio,
      "technologies": ["React", "Tailwind CSS"],
      "source": "https://github.com/"
    }
    
    
  ];

  return (
    <section 
    id='projects'
    className="min-h-screen font-mono bg-gradient-to-b from-indigo-900 via-gray-900 to-indigo-900 text-gray-100 px-2 py-7 md:py-16 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-300">My Projects</h2>
        <p className="mt-4 text-center text-gray-300 text-lg">
          A journey through some of the impactful projects I&apos;ve built.
        </p>
        <div className="mt-12 relative">
          <div className="hidden absolute eight00:block border-l-4 border-yellow-300 h-[130%] left-1/2   transform -translate-x-1/2"></div>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 mt-6 eight00:m-6 md:gap-8 md:mt-8 ${index % 2 === 0 ? 'eight00:flex-row-reverse' : 'eight00:flex-row'}`}
            >
              <div className={`eight00:w-1/2 w-10/12 justify-center p-5 flex ${index % 2 === 0 ? 'eight00:justify-center' : 'eight00:justify-start'} items-center`}>
                <img
                  src={`${project.image}`}
                  alt={project.title}
                  className=" shadow-lg border-4"
                  style={{
                    borderImage: "linear-gradient(to right, #FCD34D, #06B6D4)",
                    borderImageSlice: 1,
                    width: "88%",
                    height: "80%",
                  }}
                />


              </div>
              <div className={`eight00:w-1/2 w-2/3  flex flex-col text-center md:text-left ${index % 2 === 0 ? 'md:pl-5' : 'md:pl-14'}`}>
                <div className='flex flex-row justify-center eight00:justify-start gap-3'>
                  <h3 className="text-2xl font-bold mb-2 text-yellow-300">{project.title} </h3>
                  <a href={project.source} className=' ' target='_blank'>
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="1 1 23 22"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                      className=" text-yellow-300  hover:text-indigo-900 hover:border-yellow-300 hover:border-2  hover:bg-yellow-300 rounded-full transition-all duration-500 ease-out transform hover:scale-125 hover:shadow-lg"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"
                        fill="currentColor"

                      ></path>
                    </svg>

                  </a>
                </div>
                <p className="mt-2 w-full text-center text-[12px] five00:text-[16px] sm:text-[17px]  md:text-[16px]  md:text-start eight00:w-11/12 text-gray-300">{project.description}</p>

                <div className='flex flex-col nine00:flex-row gap-2'>
                  <div className='mt-4 text-yellow-300 text-xl text-start  lg:text-start font-bold'>
                    Languages: 
                    </div>
                <ul className="mt-4 flex eight00:w-10/12 w-full eight00:justify-start justify-center gap-4  md:gap-3 flex-wrap list-inside text-gray-300">
                  {project.technologies.map((tech, techIndex) => (
                    <li className='text-yellow-300 border-2 p-1 text-[12px] sm:text-sm md:text-md  rounded-md border-gray-500 bg-gray-800 bg-transparent cursor-pointer transition-transform duration-300 hover:scale-105  hover:border-2 hover:border-yellow-300' key={techIndex}>{tech}</li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );


}

export default Project