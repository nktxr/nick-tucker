import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';

interface BlogProps {
  styles: any; // Ideally replace 'any' with specific style interfaces
  blogStyles: any;
  theme: any;
}

export const Blog = ({ styles, blogStyles, theme }: BlogProps) => (
  <div style={styles.container}>
    <nav style={{ marginTop: '20px' }}>
      <Link to="/"><button style={styles.button}>← Back Home</button></Link>
    </nav>
    <h2 style={{ fontSize: '2rem', margin: '40px 0', color: theme.text }}>Latest Blog Posts</h2>
    
    <div style={blogStyles.postGrid}>
      {blogPosts.map((post) => (
        <article key={post.id} style={blogStyles.postCard}>
          <img src={post.image} alt={post.title} style={blogStyles.postImage} />
          <div style={blogStyles.postContent}>
            <small style={{ color: theme.secondary }}>{post.date}</small>
            <h3 style={blogStyles.postTitle}>{post.title}</h3>
            <p style={blogStyles.postExcerpt}>{post.excerpt}</p>
            <button style={{ ...styles.button, padding: '5px 15px' }}>Read More</button>
          </div>
        </article>
      ))}
    </div>
  </div>
);