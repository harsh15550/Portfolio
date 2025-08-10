
const SkillsSection = () => {
    const coreTechnologies = [
        'MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express.js',
        'JavaScript', 'TypeScript', 'Java', 'Tailwind CSS',
        'Material-UI', 'Postman', 'Redux', 'Git', 'Socket.io'
    ];

    return (
        <section id='skills' className="w-full scroll-mt-20 bg-[#fcfcfc] py-8">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
                    <span className="text-black">Skills</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ml-2">
                        & Technologies
                    </span>
                </h2>
                <p className="text-center text-gray-500 text-sm sm:text-base mb-10">
                    Technologies and tools I use to bring ideas to life
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
                    Core Technologies
                </h3>

                <div className="flex flex-wrap justify-center gap-4">
                    {coreTechnologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
