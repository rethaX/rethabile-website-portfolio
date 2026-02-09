import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio',
    description: 'Full-featured personal portfolio website about Rethabile Mokwane',
    technologies: ['React', 'Node.js', 'Figma', 'HTML', 'CSS'],
    image: '/projects/portfolio.png',
    demo: 'rethabile-mokwane-portfolio.vercel.app',
  },
  {
    title: 'Multi-Widget Dashboard',
    description: 'UX Designed multi-widget dashboard for weather, news and movies',
    technologies: ['HTML', 'CSS', 'Javascript'],
    image: '/projects/dashboard.png',
    demo: 'multi-widget-dashboard.vercel.app',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing real-time data with custom charts and filters.',
    technologies: ['React', 'TypeScript', 'Power BI', 'Azure', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demo: 'https://demo.com',
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management application with task tracking, team chat, and file sharing.',
    technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    demo: 'https://demo.com',
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'Customer service chatbot using natural language processing and machine learning.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    demo: 'https://demo.com',
  },
  {
    title: 'Mobile-First Progressive Web App',
    description: 'Offline-capable PWA for field service management with geolocation and camera integration.',
    technologies: ['React', 'Service Workers', 'IndexedDB', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    demo: 'https://demo.com',
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return projects.length - 1;
      if (nextIndex >= projects.length) return 0;
      return nextIndex;
    });
  };

  // Auto-advance carousel
  useState(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section id="projects" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-white mb-4">Featured Projects</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of web applications and automation solutions
          </p>
        </motion.div>

        {/* Main carousel */}
        <div className="relative mb-16">
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-4xl"
              >
                <div className="relative group cursor-pointer" onClick={() => setSelectedProject(currentIndex)}>
                  <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-slate-700 group-hover:border-purple-500 transition-all">
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-all duration-300" />
                    
                    {/* Expand icon */}
                    <motion.div
                      className="absolute top-4 right-4 p-3 bg-slate-900/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Maximize2 className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-3xl text-white mb-3">
                          {projects[currentIndex].title}
                        </h3>
                        <p className="text-slate-300 mb-4 line-clamp-2">
                          {projects[currentIndex].description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {projects[currentIndex].technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 border border-slate-700 hover:border-purple-500 rounded-full transition-all text-white z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 border border-slate-700 hover:border-purple-500 rounded-full transition-all text-white z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-purple-500'
                    : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-purple-500 scale-105'
                  : 'border-slate-700 hover:border-slate-600 opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: index === currentIndex ? 1.05 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-purple-500/20 border-2 border-purple-500" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Project details modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              >
                <div className="relative h-64 md:h-96">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg hover:bg-slate-800 transition-colors text-white"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl text-white mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-slate-300 text-lg mb-6">
                    {projects[selectedProject].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-900 text-purple-400 rounded-lg border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
