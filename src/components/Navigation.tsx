import { useState } from 'react';
import { Menu, X, Download, Sparkles } from 'lucide-react';

interface NavigationProps {
  onDownloadCV: () => void;
}

export function Navigation({ onDownloadCV }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50" />
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DevFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={onDownloadCV}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={onDownloadCV}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors w-full justify-center"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}