import React, { useEffect } from 'react';
import resumeData from './resumeData';
import Header from './components/Header';
import { 
  About, 
  Experience, 
  Education, 
  Skills, 
  Projects, 
  TechnicalProjects,
  Qualifications, 
  Achievements, 
  TechnicalCoursework, 
  Hobbies,
  EasterEgg
} from './components/ResumeComponents';
import ScrollAnimator from './components/ScrollAnimator';
import './styles/main.css';

function App() {
  useEffect(() => {
    document.title = resumeData.pageTitle;
    if (resumeData.pageIcon) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      const canvas = document.createElement('canvas');
      canvas.height = 32;
      canvas.width = 32;
      const ctx = canvas.getContext('2d');
      ctx.font = '28px serif';
      ctx.fillText(resumeData.pageIcon, 0, 28);
      link.href = canvas.toDataURL();
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, []);

  return (
    <div className="app-container">
      <Header 
        name={resumeData.name} 
        socialMedia={resumeData.socialMedia} 
        email={resumeData.email} 
        phoneNumber={resumeData.phoneNumber}
        location={resumeData.location}
        profilePicUrl={resumeData.profilePicUrl}
        resumeUrl={resumeData.resumeUrl}
      />
      <main>
        <ScrollAnimator animationClass="fadeInUp"><About description={resumeData.description} /></ScrollAnimator>
        <Qualifications qualifications={resumeData.qualifications} />
        <Experience workHistory={resumeData.workHistory} />
        <Education education={resumeData.education} />
        <Skills hardSkills={resumeData.hardSkills} />
        <TechnicalProjects technicalProjects={resumeData.technicalProjects} />
        <Projects presentations={resumeData.presentations} />
        <Achievements achievements={resumeData.achievements} />
        <TechnicalCoursework coursework={resumeData.technicalCoursework} />
        <Hobbies hobbies={resumeData.hobbies} />
        <EasterEgg easterEgg={resumeData.easterEgg} />
      </main>
    </div>
  );
}

export default App;
