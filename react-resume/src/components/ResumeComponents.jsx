import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ScrollAnimator from './ScrollAnimator';

// Theme Context for dark/light mode
export const ThemeContext = React.createContext();

// About Section with enhanced visual hierarchy
export const About = ({ description }) => {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6L13.5 7.5C13.1 7.9 12.6 8 12 8S10.9 7.9 10.5 7.5L9 6L3 7V9L9 8V22H11V16H13V22H15V8L21 9Z" fill="currentColor"/>
          </svg>
        </div>
        <div>
          <h2>About Me</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            background: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '600',
            margin: '0.5rem 0 0 0'
          }}>
            🍎 Aspiring Apple Genius
          </p>
        </div>
      </div>
      <div className="card-content" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '20px',
          fontSize: '2rem',
          opacity: 0.1,
          zIndex: 1
        }}>
          💻✨🚀
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

// Qualifications with enhanced layout
export const Qualifications = ({ qualifications }) => {
  if (!qualifications || qualifications.length === 0) {
    return null;
  }

  return (
    <section id="qualifications" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <h2>Key Qualifications</h2>
      </div>
      <div className="qualifications-grid">
        {qualifications.map((qualification, index) => (
          <ScrollAnimator key={index} animationClass="fadeInUp" threshold={0.05} triggerOnce={true}>
            <div className="qualification-item">
              <div className="qualification-bullet"></div>
              <div className="qualification-content">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{qualification}</ReactMarkdown>
              </div>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
};

// Experience with timeline design
export const Experience = ({ workHistory }) => {
  if (!workHistory || workHistory.length === 0) {
    return null;
  }

  // Define colors for different job types
  const jobColors = {
    'Barista / Store Opener': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
      icon: '☕️',
      accent: 'var(--apple-accent-green)'
    },
    'Tech Service': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      icon: '🕹️',
      accent: 'var(--apple-accent-orange)'
    },
    'Electrical Apprentice': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      icon: '🔌',
      accent: 'var(--apple-accent-blue)'
    }
  };

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4Z" fill="currentColor"/>
          </svg>
        </div>
        <h2>Professional Experience</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          🚀 Building expertise across technology, customer service, and leadership
        </p>
      </div>
      <div className="timeline-container">
        {workHistory.map((job, index) => {
          const jobColor = jobColors[job.title] || { 
            gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
            accent: 'var(--apple-accent-blue)'
          };
          
          return (
            <ScrollAnimator 
              key={job.title + index}
              animationClass="fadeInUp"
              threshold={0.2}
            >
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div 
                    className="timeline-dot"
                    style={{
                      background: jobColor.gradient,
                      boxShadow: `0 4px 12px ${jobColor.accent}40`
                    }}
                  ></div>
                  {index < workHistory.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="job-header">
                    <div 
                      className="job-icon"
                      style={{
                        background: jobColor.gradient,
                        borderRadius: '8px',
                        padding: '8px',
                        fontSize: '1.2rem',
                        boxShadow: `0 4px 12px ${jobColor.accent}30`
                      }}
                    >
                      {job.icon}
                    </div>
                    <div className="job-info">
                      <h3 
                        className="job-title"
                        style={{
                          background: jobColor.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontWeight: '700'
                        }}
                      >
                        {job.title}
                      </h3>
                      <p className="company-name">{job.company}</p>
                      <p className="date-location">{job.period} • {job.location}</p>
                    </div>
                  </div>
                  {job.details && (
                    <ul className="custom-list achievement-list">
                      {job.details.map((detail, i) => (
                        <li key={i}>
                          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{detail}</ReactMarkdown>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollAnimator>
          );
        })}
      </div>
    </section>
  );
};

// Education with enhanced design
export const Education = ({ education }) => {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
          </svg>
        </div>
        <h2>Education</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          📚 Academic foundation in computer science and technology
        </p>
      </div>
      <div className="education-grid">
        {education.map((edu, index) => (
          <ScrollAnimator 
            key={edu.institution + index} 
            animationClass="fadeInUp"
            threshold={0.2}
          >
            <div className="education-card">
              <div 
                className="education-icon"
                style={{
                  background: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
                  borderRadius: '12px',
                  padding: '12px',
                  fontSize: '1.8rem',
                  boxShadow: '0 4px 12px rgba(50, 215, 75, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {edu.icon}
              </div>
              <div className="education-content">
                <h3 
                  className="degree-title"
                  style={{
                    background: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: '700'
                  }}
                >
                  {edu.degree}
                </h3>
                <p className="institution-name">{edu.institution}</p>
                <p className="education-date">{edu.date}</p>
                {edu.details && (
                  <p 
                    className="education-details" 
                    style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--apple-accent-green)', 
                      marginTop: '0.5rem',
                      fontWeight: '600'
                    }}
                  >
                    ✨ {edu.details}
                  </p>
                )}
              </div>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
};

// Skills with progress indicators and categories
export const Skills = ({ hardSkills }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  if (!hardSkills || hardSkills.length === 0) {
    return null;
  }

  // Enhanced categorization matching Kyle's exact 4 categories
  const skillCategories = {
    'all': hardSkills,
    'soft': hardSkills.filter(skill => 
      skill.toLowerCase().includes('customer service') || 
      skill.toLowerCase().includes('conflict resolution') || 
      skill.toLowerCase().includes('communication') ||
      skill.toLowerCase().includes('patient') ||
      skill.toLowerCase().includes('fast learner') ||
      skill.toLowerCase().includes('collaboration') ||
      skill.toLowerCase().includes('training') ||
      skill.toLowerCase().includes('mentorship') ||
      skill.toLowerCase().includes('dependable') ||
      skill.toLowerCase().includes('punctual')
    ),
    'technical': hardSkills.filter(skill => 
      skill.toLowerCase().includes('apple hardware') || 
      skill.toLowerCase().includes('electrical systems') || 
      skill.toLowerCase().includes('arcade machine') ||
      skill.toLowerCase().includes('diagnostic troubleshooting') ||
      skill.toLowerCase().includes('safe handling') ||
      skill.toLowerCase().includes('operating system')
    ),
    'programming': hardSkills.filter(skill => 
      skill.toLowerCase().includes('python') || 
      skill.toLowerCase().includes('javascript') || 
      skill.toLowerCase().includes('swift') ||
      skill.toLowerCase().includes('react') ||
      skill.toLowerCase().includes('typescript') ||
      skill.toLowerCase().includes('visual studio code') ||
      skill.toLowerCase().includes('git')
    ),
    'projects': hardSkills.filter(skill => 
      skill.toLowerCase().includes('ai companion robot') || 
      skill.toLowerCase().includes('elevenlabs') || 
      skill.toLowerCase().includes('openai') ||
      skill.toLowerCase().includes('facial recognition') ||
      skill.toLowerCase().includes('user interfaces') ||
      skill.toLowerCase().includes('passionate about tech')
    )
  };

  // Only show these 5 categories in this exact order
  const categories = ['all', 'soft', 'technical', 'programming', 'projects'];

  const processSkillString = (skillString) => {
    let processedString = skillString.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return processedString;
  };

  // Category display names
  const categoryLabels = {
    'all': 'All Skills',
    'soft': 'Soft Skills',
    'technical': 'Technical & Repair',
    'programming': 'Software & Programming',
    'projects': 'Projects & Tech Concepts'
  };

  // Color themes for different categories
  const categoryColors = {
    'soft': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
      border: 'var(--apple-accent-green)',
      shadow: 'rgba(50, 215, 75, 0.3)'
    },
    'technical': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      border: 'var(--apple-accent-orange)',
      shadow: 'rgba(255, 159, 10, 0.3)'
    },
    'programming': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-cyan))',
      border: 'var(--apple-accent-blue)',
      shadow: 'rgba(10, 132, 255, 0.3)'
    },
    'projects': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-pink), var(--apple-accent-purple))',
      border: 'var(--apple-accent-pink)',
      shadow: 'rgba(255, 45, 146, 0.3)'
    }
  };

  const getSkillCategory = (skill) => {
    for (const [category, skills] of Object.entries(skillCategories)) {
      if (category !== 'all' && skills.includes(skill)) {
        return category;
      }
    }
    return 'all';
  };

  const getSkillStyle = (skill, category) => {
    const skillCategory = activeCategory === 'all' ? getSkillCategory(skill) : activeCategory;
    const colors = categoryColors[skillCategory];
    
    if (!colors) {
      return {
        background: 'var(--apple-surface-tertiary)',
        border: '2px solid var(--apple-border-primary)',
        color: 'var(--apple-text-primary)'
      };
    }

    // All skills get the same consistent styling based on category
    return {
      background: 'var(--apple-surface-tertiary)',
      border: `2px solid ${colors.border}`,
      color: colors.border,
      fontWeight: '500'
    };
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25C22.56 11.84 22.25 11.5 21.86 11.5H21.14L20.26 10.57C20.06 10.35 19.73 10.33 19.5 10.53C19.28 10.73 19.26 11.06 19.46 11.28L20.14 12H21.86C22.25 12 22.56 12.34 22.56 12.75V12.25ZM9 12L11 14L15 10M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <h2>Technical Skills</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          🎨 Color-coded by category to showcase my diverse skill set
        </p>
      </div>
      
      <div className="skill-filters">
        {categories.map(category => {
          const colors = categoryColors[category];
          const isActive = activeCategory === category;
          
          return (
            <button
              key={category}
              className={`filter-button ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              style={isActive && colors ? {
                background: colors.gradient,
                borderColor: 'transparent',
                color: 'white',
                boxShadow: `0 4px 12px ${colors.shadow}`
              } : {}}
            >
              {categoryLabels[category]}
              <span style={{ 
                marginLeft: '0.5rem', 
                fontSize: '0.8rem', 
                opacity: 0.7,
                fontWeight: 'normal'
              }}>
                ({skillCategories[category].length})
              </span>
            </button>
          );
        })}
      </div>

      <ScrollAnimator animationClass="fadeInUp">
        <div className="skills-container">
          {skillCategories[activeCategory].map((skill, index) => {
            const processedSkill = processSkillString(skill);
            const skillStyle = getSkillStyle(skill, activeCategory);
            
            return (
              <ScrollAnimator
                key={`${activeCategory}-${index}`}
                animationClass="fadeInUp"
                threshold={0.1}
                delay={index * 50}
              >
                <div
                  className="skill-tag"
                  style={{
                    ...skillStyle,
                    transition: 'all 0.3s var(--smooth-easing)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  dangerouslySetInnerHTML={{ __html: processedSkill }}
                />
              </ScrollAnimator>
            );
          })}
        </div>
      </ScrollAnimator>
    </section>
  );
};

// Projects with enhanced layout
export const Projects = ({ presentations }) => {
  if (!presentations || presentations.length === 0) {
    return null;
  }

  // Color themes for different presentation venues
  const presentationStyles = {
    'Computers in Libraries': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-cyan))',
      accent: 'var(--apple-accent-blue)',
      shadow: 'rgba(10, 132, 255, 0.3)',
      icon: '🏛️'
    },
    'Nerd Nite': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      accent: 'var(--apple-accent-orange)',
      shadow: 'rgba(255, 159, 10, 0.3)',
      icon: '🎙️'
    },
    'SPC': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
      accent: 'var(--apple-accent-green)',
      shadow: 'rgba(50, 215, 75, 0.3)',
      icon: '🔬'
    },
    'ByWater': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-purple), var(--apple-accent-pink))',
      accent: 'var(--apple-accent-purple)',
      shadow: 'rgba(191, 90, 242, 0.3)',
      icon: '📚'
    }
  };

  const getPresentationStyle = (title) => {
    for (const [keyword, style] of Object.entries(presentationStyles)) {
      if (title.includes(keyword)) {
        return style;
      }
    }
    return {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-blue)',
      shadow: 'rgba(10, 132, 255, 0.3)',
      icon: '🎤'
    };
  };

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13.5 8H12V13L16.28 15.54L17 14.33L13.5 12.25V8ZM13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5S20 8.13 20 12S16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 20 10.5 21 13 21C17.97 21 22 16.97 22 12S17.97 3 13 3Z" fill="currentColor"/>
          </svg>
        </div>
        <h2>Projects & Presentations</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          🎤 Sharing knowledge and expertise across prestigious venues
        </p>
      </div>
      <div className="projects-grid">
        {presentations.map((item, index) => {
          const style = getPresentationStyle(item.title);
          
          return (
            <ScrollAnimator 
              key={item.title + index} 
              animationClass="fadeInUp"
              threshold={0.2} 
            >
              <div className="project-card">
                <div className="project-header">
                  <div 
                    className="project-icon"
                    style={{
                      background: style.gradient,
                      borderRadius: '12px',
                      padding: '12px',
                      fontSize: '1.8rem',
                      boxShadow: `0 4px 12px ${style.shadow}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 
                    className="project-title"
                    style={{
                      background: style.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="project-content">
                  <div style={{
                    color: style.accent,
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    🎯 {item.topic}
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          );
        })}
      </div>
    </section>
  );
};

// Achievements with enhanced design
export const Achievements = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return null;
  }

  // Map achievements to colors and icons
  const achievementStyles = {
    'Graduated with honors': { 
      icon: '🎓', 
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-blue)'
    },
    'Dean\'s List': { 
      icon: '⭐', 
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      accent: 'var(--apple-accent-orange)'
    },
    'SemiCircle STEM Club': { 
      icon: '🔬', 
      gradient: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
      accent: 'var(--apple-accent-green)'
    },
    'Ambit AI Companion Robot': { 
      icon: '🤖', 
      gradient: 'linear-gradient(135deg, var(--apple-accent-pink), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-pink)'
    },
    'Perfect safety record': { 
      icon: '🛡️', 
      gradient: 'linear-gradient(135deg, var(--apple-accent-cyan), var(--apple-accent-blue))',
      accent: 'var(--apple-accent-cyan)'
    },
    'arcade machines': { 
      icon: '🕹️', 
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      accent: 'var(--apple-accent-orange)'
    }
  };

  const getAchievementStyle = (achievement) => {
    for (const [keyword, style] of Object.entries(achievementStyles)) {
      if (achievement.toLowerCase().includes(keyword.toLowerCase())) {
        return style;
      }
    }
    return { 
      icon: '✨', 
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-blue)'
    };
  };

  return (
    <section id="achievements" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" fill="currentColor"/>
          </svg>
        </div>
        <h2>Key Achievements</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          🏆 Milestones that showcase dedication and growth
        </p>
      </div>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => {
          const style = getAchievementStyle(achievement);
          
          return (
            <ScrollAnimator key={index} animationClass="fadeInUp" threshold={0.05} triggerOnce={true}>
              <div className="achievement-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div 
                  className="achievement-marker"
                  style={{
                    background: style.gradient,
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    boxShadow: `0 2px 8px ${style.accent}40`,
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }}
                ></div>
                <div className="achievement-content" style={{ flex: 1, position: 'relative' }}>
                  <div style={{
                    display: 'inline-block',
                    background: style.gradient,
                    borderRadius: '20px',
                    padding: '4px 8px',
                    fontSize: '1rem',
                    marginBottom: '0.5rem',
                    boxShadow: `0 2px 8px ${style.accent}30`
                  }}>
                    {style.icon}
                  </div>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{achievement}</ReactMarkdown>
                </div>
              </div>
            </ScrollAnimator>
          );
        })}
      </div>
    </section>
  );
};

// Technical Coursework with enhanced design
export const TechnicalCoursework = ({ coursework }) => {
  if (!coursework || coursework.length === 0) {
    return null;
  }

  // Color mapping for different course types
  const courseStyles = {
    'COP': { // Computer Programming courses
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-cyan))',
      accent: 'var(--apple-accent-blue)',
      icon: '💻'
    },
    'MAC': { // Math courses
      gradient: 'linear-gradient(135deg, var(--apple-accent-purple), var(--apple-accent-pink))',
      accent: 'var(--apple-accent-purple)',
      icon: '📐'
    },
    'PHY': { // Physics courses
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      accent: 'var(--apple-accent-orange)',
      icon: '⚡'
    },
    'AST': { // Astronomy courses
      gradient: 'linear-gradient(135deg, var(--apple-accent-cyan), var(--apple-accent-blue))',
      accent: 'var(--apple-accent-cyan)',
      icon: '🌟'
    }
  };

  const getCourseStyle = (course) => {
    for (const [prefix, style] of Object.entries(courseStyles)) {
      if (course.includes(prefix)) {
        return style;
      }
    }
    return {
      gradient: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
      accent: 'var(--apple-accent-green)',
      icon: '📚'
    };
  };

  return (
    <section id="technical-coursework" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z" fill="currentColor"/>
          </svg>
        </div>
        <h2>Technical Coursework</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          📖 Strong academic foundation across programming, math, and science
        </p>
      </div>
      <ScrollAnimator animationClass="fadeInUp">
        <div className="coursework-grid">
          {coursework.map((course, index) => {
            const style = getCourseStyle(course);
            
            return (
              <ScrollAnimator
                key={index}
                animationClass="fadeInUp"
                threshold={0.1}
                delay={index * 75}
              >
                <div 
                  className="coursework-item"
                  style={{
                    border: `2px solid ${style.accent}`,
                    background: 'var(--apple-surface-secondary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div 
                    className="coursework-bullet"
                    style={{
                      background: style.gradient,
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      boxShadow: `0 2px 6px ${style.accent}40`,
                      marginRight: '0.5rem'
                    }}
                  ></div>
                  <div style={{
                    display: 'inline-block',
                    background: style.gradient,
                    borderRadius: '15px',
                    padding: '2px 6px',
                    fontSize: '0.8rem',
                    marginRight: '0.5rem',
                    boxShadow: `0 2px 6px ${style.accent}30`
                  }}>
                    {style.icon}
                  </div>
                  <span 
                    className="coursework-title"
                    style={{
                      color: style.accent,
                      fontWeight: '600'
                    }}
                  >
                    {course}
                  </span>
                </div>
              </ScrollAnimator>
            );
          })}
        </div>
      </ScrollAnimator>
    </section>
  );
};

// Technical Projects with enhanced layout
export const TechnicalProjects = ({ technicalProjects }) => {
  if (!technicalProjects || technicalProjects.length === 0) {
    return null;
  }

  // Special styling for different projects
  const projectStyles = {
    'Ambit': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-pink), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-pink)',
      shadow: 'rgba(255, 45, 146, 0.3)',
      isStandout: true
    }
  };

  const getProjectStyle = (title) => {
    for (const [keyword, style] of Object.entries(projectStyles)) {
      if (title.includes(keyword)) {
        return style;
      }
    }
    return {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-blue)',
      shadow: 'rgba(10, 132, 255, 0.3)',
      isStandout: false
    };
  };

  return (
    <section id="technical-projects" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14,6V4H10V6H9A2,2 0 0,0 7,8V19A2,2 0 0,0 9,21H15A2,2 0 0,0 17,19V8A2,2 0 0,0 15,6H14M12,7A1,1 0 0,1 13,8A1,1 0 0,1 12,9A1,1 0 0,1 11,8A1,1 0 0,1 12,7Z" fill="currentColor"/>
          </svg>
        </div>
        <h2>Technical Projects</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          💡 Innovative projects that showcase technical creativity and problem-solving
        </p>
      </div>
      <div className="projects-grid">
        {technicalProjects.map((project, index) => {
          const style = getProjectStyle(project.title);
          
          return (
            <ScrollAnimator 
              key={project.title + index} 
              animationClass="fadeInUp"
              threshold={0.2} 
            >
              <div 
                className="project-card"
                style={style.isStandout ? {
                  border: `2px solid ${style.accent}`,
                  boxShadow: `0 8px 24px ${style.shadow}`,
                  position: 'relative',
                  overflow: 'hidden'
                } : {}}
              >
                {style.isStandout && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: style.gradient,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    zIndex: 2
                  }}>
                    ⭐ Featured
                  </div>
                )}
                <div className="project-header">
                  <div 
                    className="project-icon"
                    style={{
                      background: style.gradient,
                      borderRadius: '12px',
                      padding: '12px',
                      fontSize: '1.8rem',
                      boxShadow: `0 4px 12px ${style.shadow}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {project.icon}
                  </div>
                  <h3 
                    className="project-title"
                    style={{
                      background: style.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="project-content">
                  <p 
                    className="project-period" 
                    style={{ 
                      color: style.accent, 
                      fontSize: '0.9rem', 
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}
                  >
                    📅 {project.period}
                  </p>
                  {project.details && (
                    <ul className="custom-list">
                      {project.details.map((detail, i) => (
                        <li key={i}>
                          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{detail}</ReactMarkdown>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollAnimator>
          );
        })}
      </div>
    </section>
  );
};

// Hobbies with enhanced design
export const Hobbies = ({ hobbies }) => {
  if (!hobbies || hobbies.length === 0) {
    return null;
  }

  // Color themes for different hobby categories
  const hobbyStyles = {
    'AI': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-pink), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-pink)',
      icon: '🤖'
    },
    'robot': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-pink), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-pink)',
      icon: '🤖'
    },
    'electronics': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      accent: 'var(--apple-accent-orange)',
      icon: '⚡'
    },
    'hardware': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-red))',
      accent: 'var(--apple-accent-orange)',
      icon: '🔧'
    },
    'machine learning': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-cyan), var(--apple-accent-blue))',
      accent: 'var(--apple-accent-cyan)',
      icon: '🧠'
    },
    'vision': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-cyan), var(--apple-accent-blue))',
      accent: 'var(--apple-accent-cyan)',
      icon: '👁️'
    },
    'electrical': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-blue)',
      icon: '🔌'
    },
    'microcontroller': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-blue)',
      icon: '💾'
    },
    'mentoring': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
      accent: 'var(--apple-accent-green)',
      icon: '🤝'
    },
    'team': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-green), var(--apple-accent-cyan))',
      accent: 'var(--apple-accent-green)',
      icon: '👥'
    },
    'technology': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-purple), var(--apple-accent-pink))',
      accent: 'var(--apple-accent-purple)',
      icon: '💻'
    },
    'current': {
      gradient: 'linear-gradient(135deg, var(--apple-accent-purple), var(--apple-accent-pink))',
      accent: 'var(--apple-accent-purple)',
      icon: '📱'
    }
  };

  const getHobbyStyle = (hobby) => {
    for (const [keyword, style] of Object.entries(hobbyStyles)) {
      if (hobby.toLowerCase().includes(keyword.toLowerCase())) {
        return style;
      }
    }
    return {
      gradient: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      accent: 'var(--apple-accent-blue)',
      icon: '✨'
    };
  };

  return (
    <section id="hobbies" className="section-container">
      <div className="section-header">
        <div className="section-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <h2>Interests & Hobbies</h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--apple-text-tertiary)', 
          margin: '0.5rem 0 0 0',
          fontStyle: 'italic'
        }}>
          🚀 Passionate pursuits that drive continuous learning and growth
        </p>
      </div>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => {
          const style = getHobbyStyle(hobby);
          
          return (
            <ScrollAnimator key={index} animationClass="fadeInUp" threshold={0.05} triggerOnce={true}>
              <div 
                className="hobby-item"
                style={{
                  border: `2px solid ${style.accent}`,
                  background: 'var(--apple-surface-secondary)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: style.gradient,
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  boxShadow: `0 4px 12px ${style.accent}30`,
                  zIndex: 1
                }}>
                  {style.icon}
                </div>
                <div style={{
                  paddingRight: '60px',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{hobby}</ReactMarkdown>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '3px',
                  background: style.gradient,
                  opacity: 0.8
                }}></div>
              </div>
            </ScrollAnimator>
          );
        })}
      </div>
    </section>
  );
};

// Easter Egg - Special hidden section
export const EasterEgg = ({ easterEgg }) => {
  if (!easterEgg) {
    return null;
  }

  return (
    <section id="easter-egg" className="section-container" style={{ 
      background: 'linear-gradient(135deg, var(--apple-accent-blue), var(--apple-accent-purple))',
      border: '3px solid var(--apple-accent-cyan)',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '4rem'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        fontSize: '2rem',
        opacity: 0.3,
        animation: 'float 3s ease-in-out infinite'
      }}>
        🍎
      </div>
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '25px',
        fontSize: '1.5rem',
        opacity: 0.3,
        animation: 'float 2.5s ease-in-out infinite reverse'
      }}>
        ✨
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        fontSize: '1.2rem',
        opacity: 0.2,
        animation: 'float 3.5s ease-in-out infinite'
      }}>
        🚀
      </div>

      <div className="section-header" style={{ textAlign: 'center' }}>
        <div 
          className="section-icon"
          style={{
            background: 'linear-gradient(135deg, var(--apple-accent-orange), var(--apple-accent-pink))',
            boxShadow: '0 8px 20px rgba(255, 159, 10, 0.4)',
            transform: 'scale(1.1)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </div>
        <h2 style={{ 
          color: 'white',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          fontSize: '2.2rem',
          marginBottom: '0.5rem'
        }}>
          {easterEgg.title}
        </h2>
        <p style={{ 
          fontSize: '1rem', 
          color: 'rgba(255, 255, 255, 0.9)',
          margin: '0',
          fontStyle: 'italic',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }}>
          🎯 The honest truth about why I'd be perfect for this role
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        padding: '2.5rem',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 2
      }}>
        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          color: 'white',
          textAlign: 'center',
          margin: 0,
          textShadow: '0 1px 3px rgba(0,0,0,0.2)',
          fontWeight: '500'
        }}>
          {easterEgg.message}
        </p>
      </div>
    </section>
  );
}; 