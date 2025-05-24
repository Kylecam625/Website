import React, { useState, useEffect } from 'react';

// Theme Toggle Component
const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {theme === 'dark' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="currentColor"/>
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

// Copy Button Component
const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button 
      className="copy-button"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      title={`Copy ${label}`}
    >
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )}
    </button>
  );
};

// Main Header Component
const Header = ({ name, socialMedia, email, phoneNumber, location, profilePicUrl, resumeUrl }) => {
  return (
    <header className="section-container text-center header-container">
      {/* Theme Toggle - Top Right */}
      <div className="header-controls">
        <ThemeToggle />
      </div>

      {/* Profile Section */}
      <div className="profile-image-container">
        <img src={profilePicUrl} alt={name} className="profile-image" />
      </div>
      
      <h1>{name}</h1>
      
      {/* Location */}
      {location && (
        <p style={{ fontSize: '1.1rem', color: 'var(--apple-text-tertiary)', marginBottom: '1.5rem' }}>
          📍 {location}
        </p>
      )}
      
      {/* Contact Information with Copy Buttons */}
      <div className="contact-info">
        <div className="contact-item">
          <a href={`mailto:${email}`} className="contact-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            {email}
          </a>
          <CopyButton text={email} label="email address" />
        </div>
        
        <div className="contact-item">
          <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="contact-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            {phoneNumber}
          </a>
          <CopyButton text={phoneNumber} label="phone number" />
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className="contact-icons">
        {socialMedia.map(social => (
          <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer">
            <span>{social.icon}</span>
            <span className="social-label">{social.platform}</span>
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="header-actions">
        <a href={resumeUrl} download className="button-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          Download Resume
        </a>
        
        <button 
          className="button-secondary print-button"
          onClick={() => window.print()}
          aria-label="Print resume"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <polyline points="6,9 6,2 18,2 18,9" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="6" y="14" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
          Print
        </button>
      </div>
    </header>
  );
};

// For screen readers, ideally, you would have more descriptive text or use an icon library that handles accessibility.
// Adding a simple sr-only class for now.
const SrOnlyText = ({ children }) => (
  <span style={{
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0'
  }}>
    {children}
  </span>
);

// Update social media mapping to use SrOnlyText for better accessibility
const HeaderWithAccessibleSocialMedia = () => {
  return (
    <header className="section-container text-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="profile-image-container">
        <img src={resumeData.profilePicUrl} alt={resumeData.name} className="profile-image" />
      </div>
      <h1>{resumeData.name}</h1>
      <p style={{ fontSize: '1.1em', margin: '0.5rem 0 1.5rem 0' }}>
        Contact: <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> | <a href={`tel:${resumeData.phoneNumber.replace(/[^0-9]/g, '')}`}>{resumeData.phoneNumber}</a>
      </p>
      
      <div className="contact-icons" style={{ marginBottom: '1.5rem' }}>
        {resumeData.socialMedia.map(social => (
          <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" title={social.platform}>
            <span aria-hidden="true">{social.icon}</span>
            <SrOnlyText>{social.platform}</SrOnlyText>
          </a>
        ))}
      </div>

      <a href={resumeData.resumeUrl} download className="button-primary">
        📝 Download Resume
      </a>
    </header>
  );
};

export default Header; 