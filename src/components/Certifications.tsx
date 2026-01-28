import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, X, Shield, CheckCircle } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';

// Extended certifications list with proper icons
const allCertifications = [
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'January 2024',
    credentialId: 'AZ-204-123456',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.microsoft.com/certifications',
    description: 'Design, build, test, and maintain cloud applications and services on Microsoft Azure.',
  },
  {
    name: 'Microsoft Power Platform Developer Associate',
    issuer: 'Microsoft',
    date: 'November 2023',
    credentialId: 'PL-400-789012',
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
    link: 'https://www.microsoft.com/certifications',
    description: 'Design, develop, secure, and troubleshoot Power Platform solutions.',
  },
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'September 2023',
    credentialId: 'AWS-SA-345678',
    icon: '🟠',
    color: 'from-orange-500 to-yellow-500',
    link: 'https://aws.amazon.com/certification',
    description: 'Demonstrate ability to design distributed systems on AWS.',
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'July 2023',
    credentialId: 'GCP-PD-901234',
    icon: '🔵',
    color: 'from-red-500 to-blue-500',
    link: 'https://cloud.google.com/certification',
    description: 'Build scalable and highly available applications on Google Cloud Platform.',
  },
  {
    name: 'Meta Front-End Developer Professional',
    issuer: 'Meta',
    date: 'May 2023',
    credentialId: 'META-FE-567890',
    icon: '🔷',
    color: 'from-blue-600 to-indigo-600',
    link: 'https://www.coursera.org/professional-certificates',
    description: 'Create responsive websites using HTML, CSS, JavaScript and React.',
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: 'March 2023',
    credentialId: 'MONGO-DEV-234567',
    icon: '🍃',
    color: 'from-green-500 to-emerald-500',
    link: 'https://university.mongodb.com',
    description: 'Design and build applications using MongoDB.',
  },
  {
    name: 'Microsoft Certified: Power BI Data Analyst',
    issuer: 'Microsoft',
    date: 'February 2023',
    credentialId: 'PL-300-456789',
    icon: '📊',
    color: 'from-yellow-500 to-orange-500',
    link: 'https://www.microsoft.com/certifications',
    description: 'Deliver actionable insights by working with available data and applying domain expertise.',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'December 2022',
    credentialId: 'SEC-PLUS-789012',
    icon: '🔒',
    color: 'from-red-500 to-pink-500',
    link: 'https://www.comptia.org',
    description: 'Establish the core knowledge required for any cybersecurity role.',
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker',
    date: 'October 2022',
    credentialId: 'DCA-345678',
    icon: '🐳',
    color: 'from-blue-400 to-cyan-400',
    link: 'https://www.docker.com/certification',
    description: 'Validate skills in Docker container orchestration and management.',
  },
  {
    name: 'Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'August 2022',
    credentialId: 'CKA-901234',
    icon: '⚓',
    color: 'from-blue-500 to-purple-500',
    link: 'https://www.cncf.io/certification',
    description: 'Demonstrate skills in basic installation, configuration, and management of Kubernetes clusters.',
  },
  {
    name: 'GitHub Actions Certification',
    issuer: 'GitHub',
    date: 'June 2022',
    credentialId: 'GH-ACT-567890',
    icon: '🔄',
    color: 'from-gray-700 to-gray-900',
    link: 'https://github.com/certification',
    description: 'Automate workflows and implement CI/CD with GitHub Actions.',
  },
  {
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    date: 'April 2022',
    credentialId: 'TF-ASC-234567',
    icon: '🏗️',
    color: 'from-purple-600 to-indigo-600',
    link: 'https://www.hashicorp.com/certification',
    description: 'Understand infrastructure as code concepts and workflows.',
  },
];

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<typeof allCertifications[0] | null>(null);

  const displayedCerts = showAll ? allCertifications : allCertifications.slice(0, 6);

  return (
    <section id="certifications" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Floating icons */}
      <FloatingIcons />
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 text-sm">Professional Credentials</span>
          </div>
          <h2 className="text-4xl text-white mb-4">Certifications & Achievements</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {allCertifications.length}+ industry-recognized certifications validating expertise across multiple platforms
          </p>
        </motion.div>

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: showAll ? 0 : index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all overflow-hidden h-full">
                  {/* Gradient overlay */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
                  
                  <div className="p-6">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity`} />
                        <div className="relative w-16 h-16 rounded-xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-700 group-hover:border-purple-500/50 transition-colors flex items-center justify-center text-3xl">
                          {cert.icon}
                        </div>
                      </div>
                      <motion.div
                        className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Shield className="w-4 h-4 text-purple-400" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-white text-lg mb-2 font-medium group-hover:text-purple-400 transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
                    
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-slate-500">{cert.date}</span>
                      <div className="flex items-center gap-1 text-green-400">
                        <CheckCircle className="w-3 h-3" />
                        <span className="text-xs">Verified</span>
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-purple-400 font-mono text-xs">{cert.credentialId}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all font-medium inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? (
              <>
                Show Less
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↑
                </motion.span>
              </>
            ) : (
              <>
                View All {allCertifications.length} Certifications
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Certifications', value: `${allCertifications.length}+` },
            { label: 'Years Experience', value: '5+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Projects Completed', value: '50+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certification Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 rounded-2xl max-w-2xl w-full border border-slate-700 overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${selectedCert.color} p-1`}>
                <div className="bg-slate-800 p-8 rounded-t-xl">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-slate-900/50 backdrop-blur-sm border-2 border-slate-700 flex items-center justify-center text-5xl">
                        {selectedCert.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl text-white mb-2">
                          {selectedCert.name}
                        </h3>
                        <p className="text-slate-400">{selectedCert.issuer}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg hover:bg-slate-700 transition-colors text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Description
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <p className="text-slate-500 text-sm mb-1">Issue Date</p>
                    <p className="text-white font-medium">{selectedCert.date}</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <p className="text-slate-500 text-sm mb-1">Credential ID</p>
                    <p className="text-purple-400 font-mono text-sm">{selectedCert.credentialId}</p>
                  </div>
                </div>

                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Certification
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
