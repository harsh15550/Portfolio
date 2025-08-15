import { FaDownload } from "react-icons/fa";
import devloperImg from '/WhatsApp Image 2024-07-28 at 11.23.47_fcd5ca11.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="flex scroll-mt-20 items-center justify-center px-6 md:px-24 bg-white pt-18 pb-10">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-evenly gap-20">

        {/* Left Content */}
        <div className="text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Harsh Patel
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700">
            MERN Stack Developer
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            I am a passionate full-stack developer specializing in modern web technologies. I create beautiful, user-friendly, and feature-rich applications that bring ideas to life through clean code, intuitive design, and innovative solutions. My focus is on writing maintainable, efficient code while delivering projects that are both visually appealing and highly functional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">

            <a
              href="./public/Harsh Resume.pdf"
              download
              className="flex items-center gap-2 border border-purple-500 text-purple-600 px-6 py-2 rounded-md hover:bg-purple-50 transition"
            >
              Download Resume <FaDownload />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={devloperImg}
            alt="Harsh Patel"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
