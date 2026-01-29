import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Certifications } from './Certifications';
import { Projects } from './Projects';
import { Footer } from './Footer';

export function Portfolio() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Rethabile-Mokwane-CV.pdf';
    link.download = 'Rethabile-Mokwane-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation onDownloadCV={handleDownloadCV} />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Footer />
    </div>
  );
}