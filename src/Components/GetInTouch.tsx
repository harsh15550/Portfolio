import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <section id='contact' className="bg-white scroll-mt-20 py-10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-black">Get in</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ml-2">
            Touch
          </span>
        </h2>
        <p className="text-gray-600 mb-8">
          I'm always open to connecting! Feel free to reach out or follow me on social media.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/harsh-patel-496a50321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/harsh15550"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram size={32} />
          </a>
        </div>

        <p className="text-sm text-gray-700">
          📧 Email me at:{' '}
          
          <span className='text-blue-600' >
            hp877257@gmail.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;
