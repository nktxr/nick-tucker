import React from 'react';
import { Link } from 'react-router-dom';

export const Resume = ({ styles, resumeStyles, theme }: { styles: any, resumeStyles: any, theme: any }) => (
  <div style={styles.container}>
    <nav style={{ marginTop: '20px' }}>
      <Link to="/"><button style={styles.button}>← Back Home</button></Link>
    </nav>
    <h2 style={{ fontSize: '2rem', margin: '40px 0', color: theme.text }}>Resume</h2>
    <div style={resumeStyles.pdfWrapper}>
      <iframe
        src="/resume.pdf" 
        title="Nick Tucker Resume"
        style={resumeStyles.iframe}
      />
    </div>
    <div style={{ marginTop: '20px', paddingBottom: '50px' }}>
      <a href="/resume.pdf" download style={styles.socialLink}>
        Download PDF directly
      </a>
    </div>
  </div>
);