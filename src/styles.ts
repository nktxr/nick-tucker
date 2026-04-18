import React from 'react';
import type { Theme } from './theme';

export const getStyles = (theme: Theme): { [key: string]: React.CSSProperties } => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: theme.fontStack,
    backgroundColor: theme.background,
    color: theme.text,
  },
  header: { textAlign: 'center' as const, marginBottom: '30px' },
  profileCircle: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: theme.border,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    margin: '0 auto 20px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  title: { fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.025em', margin: 0 },
  nav: { display: 'flex', gap: '15px', marginBottom: '50px' },
  button: {
    padding: '10px 25px',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    borderRadius: '8px',
    border: `1px solid ${theme.border}`,
    backgroundColor: theme.surface,
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  },
  link: { textDecoration: 'none' },
  footer: { display: 'flex', gap: '20px', borderTop: `1px solid ${theme.border}`, paddingTop: '20px' },
  socialLink: {
    color: theme.primary,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
});

export const getBlogStyles = (theme: Theme): { [key: string]: React.CSSProperties } => ({
  postGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    maxWidth: '800px',
    width: '90%',
    paddingBottom: '50px'
  },
  postCard: {
    display: 'flex',
    border: `1px solid ${theme.border}`,
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: theme.surface,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  postImage: { width: '250px', height: 'auto', objectFit: 'cover' },
  postContent: { padding: '24px', textAlign: 'left' },
  postTitle: { margin: '0 0 10px 0', color: theme.text, fontSize: '1.25rem' },
  postExcerpt: { color: theme.secondary, lineHeight: '1.6', marginBottom: '15px', fontSize: '0.95rem' }
});

export const getAboutStyles = (theme: Theme): { [key: string]: React.CSSProperties } => ({
  contentWrapper: { maxWidth: '800px', width: '90%', textAlign: 'left', paddingBottom: '50px' },
  section: { marginBottom: '30px' },
  sectionTitle: { fontSize: '1.5rem', color: theme.text, marginBottom: '12px', fontWeight: 700 },
  paragraph: { fontSize: '1.05rem', lineHeight: '1.7', color: theme.secondary, marginBottom: '16px' }
});

export const getResumeStyles = (theme: Theme): { [key: string]: React.CSSProperties } => ({
  pdfWrapper: {
    width: '90%',
    maxWidth: '900px',
    height: '80vh',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  iframe: { width: '100%', height: '100%', border: 'none' }
});