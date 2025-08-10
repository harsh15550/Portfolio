const EducationSection = () => {
    const educationData = [
        {
            degree: 'Bachelor of Computer Applications (BCA)',
            institution: 'Veer Narmad South Gujarat University',
            duration: '2022 - 2025',
            result: '8.02 CGPA',
        },
        {
            degree: '12th Commerce',
            institution: 'Tara Vidhya Mandir School',
            duration: '2021 - 2022',
            result: '77%',
        },
    ];

    return (
        <section id='education' className="w-full scroll-mt-20 bg-white  py-10">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-24">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                    <span className="text-black">My</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ml-2">
                        Education
                    </span>
                </h2>

                <div className="grid gap-6 sm:grid-cols-2">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                            <p className="text-gray-600 mb-1">{edu.institution}</p>
                            <p className="text-gray-500 text-sm">{edu.duration}</p>
                            <p className="text-gray-800 mt-2 font-medium">
                                Result: {edu.result}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
