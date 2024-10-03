import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  

  return (
    <div style={styles.container}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaTwitter size={20} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaInstagram size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '4px',
  },
  icon: {
    color: '#000',
    textDecoration: 'none',
  },
};

export default SocialMedia;
