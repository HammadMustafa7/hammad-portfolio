import profile from "../../assets/profilepic.jpg";
import cv from '../../assets/hammadresume.pdf'
const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen font-mono bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-gray-100 py-16 px-8">
      <div className="w-[96%] mx-4 md:mx-6 lg:mx-10  flex justify-center flex-col lg:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={profile}
            alt="Hammad Mustafa"
            className="rounded-full hover:scale-110 transition-transform duration-300  w-64 h-64 border-4  bg-yellow-300 border-yellow-300 shadow-xl"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:mr-6 lg:w-2/3">
          <h1 className="nine00:text-4xl text-3xl text-center font-bold text-yellow-300">About Me</h1>
          <p className="mt-4  text-sm four00:text-md nine00:text-lg leading-5 four00:leading-7 text-center lg:text-start text-gray-300">
            Hello! I&apos;m <span className="text-yellow-300 hover:underline cursor-pointer whitespace-nowrap text-2xl md:text-3xl font-semibold"><a href="/">Hammad Mustafa</a></span>, a passionate Full Stack Developer dedicated to creating digital experiences that are not only functional but also engaging and user-friendly. I thrive on solving complex problems and turning ideas into reality through innovative solutions.
          </p>

          <p className="mt-4 text-center lg:text-start text-sm four00:text-md nine00:text-lg leading-5 four00:leading-7 text-gray-300">
            I specialize in both <span className="text-yellow-300">frontend</span> and <span className="text-yellow-300">backend </span>development, ensuring that every aspect of the web applications I create is seamless and optimized for performance.
          </p>

          {/* Education  */}
          <div className="mt-6">
            <h2 className="nine00:text-3xl text-2xl font-semibold text-center text-yellow-300">Education</h2>
            <ul
              className="mt-3 grid grid-cols-1 gap-4 text-gray-300"
              aria-label="List of Skills"
            >
              {[
                ["BSCS", "Virtual University of Pakistan", "2024-onwards"]
              ].map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-800 p-2 rounded-md text-lg text-center shadow-md hover:text-yellow-300 cursor-pointer transition-transform duration-300 hover:scale-105 whitespace-wrap hover:border-yellow-300 hover:border-2"
                  aria-label={skill}
                >
                  {`${skill[0]} - ${skill[1]} (${skill[2]})`}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="nine00:text-3xl text-2xl font-semibold text-center text-yellow-300">Skills</h2>
            <ul
              className="mt-3 grid grid-cols-1 four00:grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300"
              aria-label="List of Skills"
            >
              {[
                "HTML/CSS",
                "JavaScript",
                "React.js",
                "Node.js(Basic)",
                "Tailwind CSS",
                "MongoDB(Basic)",
                "Express.js"
              ].map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-800 p-2 rounded-md text-lg text-center shadow-md hover:text-yellow-300 cursor-pointer transition-transform duration-300 hover:scale-105 "
                  aria-label={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>        


          {/* Call to Action */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href={cv}
              download
              className="bg-yellow-400 text-blue-900  font-bold py-3 px-6 rounded-sm shadow-md hover:bg-blue-900 hover:text-yellow-300 transition-transform duration-300 hover:scale-105 hover:border-yellow-300 hover:border-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

    </section>


  );
};

export default AboutMe;
