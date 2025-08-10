import Ecommerce from '../assets/E-commerce.png'
import Instagram from '../assets/Instagram.png';
import blog from '../assets/blog.png';
const projects = [
    {
        title: "E-Commerce Platform",
        image: Ecommerce,
        description:
            "This MERN Stack eCommerce app includes secure login, signup, and OTP-based password reset for Buyers and Sellers. Sellers can add, update, delete products, view orders, and chat with buyers. Buyers can filter, favorite, purchase products, and leave reviews. An Admin Panel manages all users, products, orders, chats, and reviews.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io", "MUI"],
        sourceLink: "https://github.com/harsh15550/E-Commerce-Project",
        liveDemoLink: "https://e-commerce-project-frontend-bay.vercel.app/",
    },
    {
        title: "Social Media Insta clone",
        image: Instagram,
        description:
            "This Instagram Clone includes secure login/signup, post and reel creation, likes, comments, bookmarks, and real-time notifications. Users can follow/unfollow, search profiles, and use a real-time chat system with reply, delete, and scheduled messages. Stories can be created, viewed, and deleted, while Gemini AI is integrated for smart post captions and AI chat features.",
        technologies: ["React", "Express", "Node.js", "MongoDb", "Socket.io"],
        sourceLink: "https://github.com/harsh15550/instagram_clone",
        liveDemoLink: "instagram-frontend-mu.vercel.app",
    },
    {
        title: "Blog App",
        image: blog,
        description:
            "This Blog App features secure login/signup with full authentication, allowing users to create, view, delete blogs, and update their profiles. All blogs are displayed on a single page with category-wise filtering and search functionality. Clicking on a blog navigates to its detailed view, and each user's profile shows all blogs they've authored. ",
        technologies: ["React", "Express", "Node.js", "MongoDB"],
        sourceLink: "https://github.com/harsh15550/MERN_BLOG",
        liveDemoLink: "https://blogapplatest.netlify.app/",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="pt-10 pb-12 scroll-mt-20 px-4 lg:px-[100px]">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                <span className="text-black">My</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ml-2">
                    Projects
                </span>
            </h2>


            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => 
                (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 max-w-sm w-full mx-auto"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-gray-100 border border-gray-300 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={project.sourceLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border border-purple-600 text-purple-600 px-3 py-1 rounded hover:bg-purple-50 text-sm"
                                >
                                    Source
                                </a>
                                <a
                                    href={project.liveDemoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 text-sm"
                                >
                                    Live Demo
                                </a>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>


    );
};

export default ProjectsSection;
