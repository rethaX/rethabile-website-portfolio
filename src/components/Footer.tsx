import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl mb-4">&lt;DevPortfolio/&gt;</h3>
            <p className="text-slate-400">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by John Developer
            <span className="mx-2">•</span>
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
