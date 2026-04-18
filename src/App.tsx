import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { themes } from './theme';
import { getStyles, getBlogStyles, getAboutStyles, getResumeStyles } from './styles';
import { Home } from './Home';
import { Blog } from './Blog';
import { About } from './About';
import { Resume } from './Resume';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const theme = isDarkMode ? themes.dark : themes.light;

  // Memoize styles to prevent recalculation on every render
  const styles = useMemo(() => ({
    base: getStyles(theme),
    blog: getBlogStyles(theme),
    about: getAboutStyles(theme),
    resume: getResumeStyles(theme),
  }), [theme]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div 
        className="app-container" 
        style={{ 
          backgroundColor: theme.background, 
          minHeight: '100vh', 
          transition: 'background-color 0.3s ease',
          position: 'relative' // Ensures toggle is positioned relative to this container
        }}
      >
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <button 
            onClick={toggleDarkMode}
            style={{ ...styles.base.button, borderRadius: '50%', width: '45px', height: '45px', padding: 0 }}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home styles={styles.base} theme={theme} />} />
            <Route path="/blog" element={<Blog styles={styles.base} blogStyles={styles.blog} theme={theme} />} />
            <Route path="/about" element={<About styles={styles.base} aboutStyles={styles.about} theme={theme} />} />
            <Route path="/resume" element={<Resume styles={styles.base} resumeStyles={styles.resume} theme={theme} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;