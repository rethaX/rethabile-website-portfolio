import { motion } from 'motion/react';
import { Code2, Database, Cloud, Cpu } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    technologies: ['Javascript', 'TypeScript', 'Next.js', 'Tailwind CSS & HTML', 'Angular'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    technologies: ['Node.js', 'Java', 'Spring Boot', 'PostgresSQL', 'Jakarta EE', 'Rest API', 'Microservices'],
  },
  {
    icon: Cloud,
    title: 'Power Platform',
    technologies: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'SharePoint'],
  },
  {
    icon: Cpu,
    title: 'DevOps & Cloud',
    technologies: ['Azure', 'AWS', 'Docker', 'CI/CD', 'Git'],
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Floating icons */}
      <FloatingIcons />
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 text-lg mb-4">
              Power Platform Specialist | Building scalable low-code solutions that automate
              workflows and drive efficiency. Currently, I develop and integrate enterprise
              applications using Power Apps, Power Automate, and Power BI at Deviare.
            </p>
            <p className="text-slate-300 text-lg mb-4">
              I hold Microsoft certifications (PL-900, PL-200, PL-300, PL-500, PL-400 & PL-
              600) and leverage a strong background in software engineering (Java, Python,
              AWS) to build robust, data-driven solutions.
            </p>
            <p className="text-slate-300 text-lg">
              I am passionate about using
              technology to solve complex business problems. Open to connecting with
              professionals in low-code development, and digital transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full bg-slate-800 flex items-center justify-center">
                <Code2 className="w-32 h-32 text-purple-400" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-purple-600 transition-colors"
            >
              <skill.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-white text-xl mb-3">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-slate-400 text-sm">
                    • {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}