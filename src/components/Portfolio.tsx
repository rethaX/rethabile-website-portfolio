import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Certifications } from './Certifications';
import { Projects } from './Projects';
import { Footer } from './Footer';

export function Portfolio() {
  const handleDownloadCV = () => {
    // Create a simple CV download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // This would be your actual CV file
    link.download = 'CV_Fullstack_Developer.pdf';
    link.click();
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