import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Rocket } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      {/* Floating icons */}
      <FloatingIcons />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm">Available for new opportunities</span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                John Developer
              </span>
            </motion.h1>
            
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Rocket className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl md:text-3xl text-slate-300">
                Fullstack Developer & Power Platform Expert
              </h2>
            </motion.div>
            
            <motion.p
              className="text-slate-400 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Transforming ideas into powerful digital experiences. I specialize in building
              scalable web applications and automating business processes with cutting-edge
              technologies.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
              >
                Explore My Work
              </button>
              <button
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-purple-500"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-pink-500/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              
              {/* Center glow */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/20 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/30"
                />
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-white text-lg">Code • Design • Deploy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, y: { duration: 1.5, repeat: Infinity } }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
