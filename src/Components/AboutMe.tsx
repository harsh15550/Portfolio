import React from "react";

const AboutMe = () => {
  
  return (
    <section id="about" className="py-10 px-6 md:px-8 scroll-mt-10 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Here's a little insight into my journey as a developer.
        </p>
        <p className="text-gray-700 text-md leading-relaxed md:text-lg">
          I am a passionate and dedicated MERN Stack Developer with hands-on experience building full-stack web applications using MongoDB, Express.js, React, and Node.js. From crafting clean and responsive frontends with HTML, CSS, and JavaScript, to building efficient and scalable backends, I enjoy every part of the development process. <br /><br />
          Along with my MERN expertise, I am currently learning Java to expand my backend development skills and deepen my understanding of computer science fundamentals. I'm always looking for ways to grow by solving real-world problems, exploring new tools and frameworks, and contributing to meaningful projects. My ultimate goal is to create impactful digital experiences that are not only functional but also intuitive and engaging for users.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
