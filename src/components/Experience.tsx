import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';

const experiences = [
  {
    title: 'Senior Fullstack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications using React, Node.js, and Azure. Implemented CI/CD pipelines and mentored junior developers.',
    achievements: [
      'Reduced application load time by 60% through performance optimization',
      'Built microservices architecture serving 100K+ daily users',
      'Led migration from monolithic to serverless architecture',
    ],
  },
  {
    title: 'Power Platform Developer',
    company: 'Business Automation Corp.',
    period: '2020 - 2022',
    description: 'Developed custom Power Apps and automated workflows using Power Automate. Created interactive dashboards with Power BI.',
    achievements: [
      'Automated 15+ business processes, saving 200+ hours monthly',
      'Created 20+ custom Power Apps for various departments',
      'Designed Power BI dashboards tracking key business metrics',
    ],
  },
  {
    title: 'Fullstack Developer',
    company: 'Digital Innovations Ltd.',
    period: '2019 - 2020',
    description: 'Developed and maintained web applications using React, Python, and PostgreSQL. Collaborated with cross-functional teams.',
    achievements: [
      'Built responsive web applications with React and TypeScript',
      'Developed RESTful APIs with Python Flask',
      'Implemented authentication and authorization systems',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Floating icons */}
      <FloatingIcons />
      
      {/* Background decoration */}
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-purple-600 mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-slate-900" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-600 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-purple-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <p className="text-slate-400">{exp.company}</p>
                    </div>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <p className="text-slate-400 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}