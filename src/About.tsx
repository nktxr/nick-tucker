import React from 'react';
import { Link } from 'react-router-dom';

export const About = ({ styles, aboutStyles, theme }: { styles: any, aboutStyles: any, theme: any }) => (
  <div style={styles.container}>
    <nav style={{ marginTop: '20px' }}>
      <Link to="/"><button style={styles.button}>← Back Home</button></Link>
    </nav>
    <h2 style={{ fontSize: '2rem', margin: '40px 0', color: theme.text }}>About Me</h2>
    <div style={aboutStyles.contentWrapper}>
      <section style={aboutStyles.section}>
        <h3 style={aboutStyles.sectionTitle}>Professional Background</h3>
        <p style={aboutStyles.paragraph}>
          I'm a software engineer with a strong foundation in Python, currently exploring the React ecosystem.
          I love building scalable backend systems and am now bringing that expertise to the frontend.
        </p>
      </section>
      <section style={aboutStyles.section}>
        <h3 style={aboutStyles.sectionTitle}>Interests</h3>
        <p style={aboutStyles.paragraph}>
          When I'm not coding, you can find me hiking, reading about edge computing, or working on new 
          photography projects.
        </p>
      </section>
    </div>
  </div>
);