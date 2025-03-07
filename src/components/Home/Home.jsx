import cv from '../../assets/hammadresume.pdf'

function Home() {
  return (
    <div
    id='home'
     className="flex flex-col gap-4 px-10 sm:px-24 md:px-32 scroll-smooth min-h-[86vh] my-auto font-mono justify-center items-center md:items-start bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950">
    
        <h1 className="lg:text-4xl nine00:text-3xl text-center text-2xl md:text-xl text-white font-bold">Hi, I&apos;m <span className="text-yellow-300">Hammad.</span></h1>
        <h1 className="lg:text-4xl nine00:text-3xl text-xl fourfifty:text-2xl flex justify-center nine00:justify-start flex-wrap gap-2  text-yellow-300 font-bold ">
  <span className='underline whitespace-nowrap'>Web Developer</span>
  <span className="text-cyan-400 transition-all duration-500 ease-in-out transform hover:scale-150 hover:rotate-12 hover:text-cyan-600 hover:shadow-lg animate-blink">
  {"</>"}
</span>

</h1>



        <p className="lg:text-xl sm:text-lg text-[16px] text-center pt-2 md:pt-0  text-gray-100 w-full lg:w-11/12  nine00:text-left break-keep">
As a Web Developer, I work to make a better web; one that is fast, secure, and easy to use, accessible to all, and frustration-free.
</p>
<a className='mb-4' href={cv} download>
<button  className="bg-yellow-400 text-blue-900 font-bold overflow-visible nine00:py-3 nine00:px-6 px-4 py-2 rounded-sm shadow-md hover:bg-yellow-500 transition-all">
    Download CV
</button>

</a>
 
    
</div>

  )
}

export default Home

