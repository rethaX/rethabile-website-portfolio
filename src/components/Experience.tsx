import { motion } from 'motion/react';
import {Briefcase, Calendar, GraduationCap, CheckCircle2} from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';

const experiences = [
  {
    title: 'Junior Power Platform Specialist',
    company: 'Deviare (Microsoft)',
    location: 'South Africa',
    period: 'June 2025',
    status: 'current',
    description: 'Developing low-code business solutions and enterprise workflows for clients as a Microsoft Partner.',
    achievements: [
      'Develop low-code business solutions using Power Apps (Canvas & Model-Driven) and Power Automate, reducing manual processes',
      'Design interactive Power BI dashboards for real-time data insights',
      'Integrate Power Platform with Azure/Dataverse for secure enterprise workflows',
      'Train end-users and document solutions to drive adoption',
    ],
  },
  {
    title: 'Java Developer Intern',
    company: 'BMW IT Hub',
    location: 'Johannesburg, South Africa',
    period: 'April 2024 - April 2025',
    status: 'completed',
    description: 'Built data processing tools and automated cloud workflows for BMW through Digilink consulting.',
    achievements: [
      'Enhanced a data comparison tool using Java backend coding to improve report generation in Excel files, reducing processing time through optimized data handling.',
      'Established connections from the Java backend to source and target databases for efficient report data retrieval, ensuring data integrity and security using JDBC.',
      'Deployed the report generation process on Payara server, utilizing its APIs for seamless operation and leveraging clustering for high availability.',
      'Integrated Amazon S3, EC2, AWS Glue and Athena with Java to retrieve database information locally, enhancing data access capabilities for analysis and reporting, demonstrating proficiency in cloud data services.',
      'Developed scripts to automate the creation of Docker containers and images for deploying Payara Server on AWS EC2 instances.',
      'Built and deployed custom Docker images for Payara Server on EC2 instances, ensuring seamless deployment for different environments.',
    ],
  },
  {
    title: 'ICT Support Intern',
    company: 'Northridge Primary School',
    location: 'Pretoria, South Africa',
    period: 'February 2023 - April 2024',
    status: 'completed',
    description: 'Provided technical support and maintained ICT infrastructure for educational institution.',
    achievements: [
      'Provided technical support for staff and students',
      'Maintained and troubleshot computer systems and networks',
      'Assisted with deployment of educational technology solutions',
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science Honours in Information Technology",
    institution: "Eduvos University",
    location: "Pretoria, South Africa",
    period: "",
    status: "current",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Eduvos University",
    location: "Pretoria, South Africa",
    period: "Feb 2020 - Dec 2022",
    status: "completed",
  },
  {
    degree: "National Senior Certificate",
    institution: "Clapham High School",
    location: "Pretoria, South Africa",
    period: "Jan 2015 - Dec 2019",
    status: "completed",
  },
];

export function Experience() {
  return (
      <>
        <section
            id="experience"
            className="py-20 bg-slate-900 relative overflow-hidden"
        >
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
              <h2 className="text-4xl text-white mb-4">
                Work Experience
              </h2>
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
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row gap-8 ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        }`}
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 items-center justify-center w-5 h-5 rounded-full bg-slate-900 border-4 border-slate-900 z-20">
                        <div className={`w-3 h-3 rounded-full ${
                            exp.status === 'current' ? 'bg-pink-500' : 'bg-green-500'
                        }`}>
                          {exp.status === 'current' && (
                              <div className="absolute inset-0 w-3 h-3 rounded-full bg-pink-500 opacity-75" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div
                          className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                      >
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-600 transition-colors">
                          <div className="flex items-center gap-2 mb-2 text-purple-400 flex-wrap">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">
                              {exp.period}
                            </span>
                            {exp.status === 'current' && (
                                <span className="relative text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full flex items-center gap-1">
                                  <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" style={{animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'}}></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pink-400"></span>
                                  </span>
                                  In Progress
                                </span>
                            )}
                            {exp.status === 'completed' && (
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Completed
                                </span>
                            )}
                          </div>
                          <h3 className="text-2xl text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-4">
                            <Briefcase className="w-4 h-4 text-slate-400" />
                            <p className="text-slate-400">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-slate-300 mb-4">
                            {exp.description}
                          </p>
                          <div className="space-y-2">
                            {exp.achievements.map(
                                (achievement, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                      <span className="text-purple-400 mt-1">
                                        ▸
                                      </span>
                                      <p className="text-slate-400 text-sm">
                                        {achievement}
                                      </p>
                                    </div>
                                ),
                            )}
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

        {/* Education Section */}
        <section
            id="education"
            className="py-20 bg-slate-800 relative overflow-hidden"
        >
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
              <h2 className="text-4xl text-white mb-4">Education</h2>
              <div className="w-20 h-1 bg-purple-600 mb-12" />
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700" />

              <div className="space-y-12">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row gap-8 ${
                            index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        }`}
                    >
                      {/* Timeline dot */}
                      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-slate-800`}>
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                            edu.status === 'current' ? 'bg-pink-500' : 'bg-green-500'
                        }`}>
                          {edu.status === 'current' && (
                              <span className="absolute inset-0 w-3 h-3 rounded-full bg-pink-500 opacity-75" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div
                          className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                      >
                        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-purple-600 transition-colors">
                          <div className="flex items-center gap-2 mb-2 text-purple-400 flex-wrap">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{edu.period || 'Present'}</span>
                            {edu.status === 'current' && (
                                <span className="relative text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full flex items-center gap-1">
                                  <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" style={{animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'}}></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pink-400"></span>
                                  </span>
                                  In Progress
                                </span>
                            )}
                            {edu.status === 'completed' && (
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Completed
                                </span>
                            )}
                          </div>
                          <h3 className="text-2xl text-white mb-1">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-4 h-4 text-slate-400" />
                            <p className="text-slate-400">{edu.institution}</p>
                          </div>
                          <p className="text-slate-500 text-sm">{edu.location}</p>
                        </div>
                      </div>

                      <div className="md:w-1/2" />
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
  );
}