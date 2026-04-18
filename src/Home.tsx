import React from 'react';
import { Link } from 'react-router-dom';

// import profilePic from '../assets/profile.jpg'; 

export const Home = ({ styles, theme }: { styles: any, theme: any }) => (
  <div style={styles.container}>
    <header style={styles.header}>
      <div style={styles.imagePlaceholder}>
        <div style={styles.profileCircle}>📸</div> 
      </div>
      <h1 style={{ ...styles.title, color: theme.text }}>Nick Tucker</h1>
    </header>

    <nav style={styles.nav}>
      <Link to="/blog" style={styles.link}><button style={styles.button}>Blog</button></Link>
      <Link to="/about" style={styles.link}><button style={styles.button}>About</button></Link>
      <Link to="/resume" style={styles.link}><button style={styles.button}>Resume</button></Link>
    </nav>

    <footer style={styles.footer}>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>GitHub</a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a>
      <a href="mailto:your.email@example.com" style={styles.socialLink}>Email</a>
      <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Medium</a>
    </footer>
  </div>
);