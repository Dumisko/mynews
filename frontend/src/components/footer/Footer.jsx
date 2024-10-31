import React from 'react'

function Footer() {
  return (
    <footer style={footerStyle} id='footer'> 
    <hr />
    <div style={containerStyle}>
      {/* Navigation Links Section */}
      <div style={sectionStyle}>
        <h4>Pages</h4>
        <ul style={linkListStyle}>
          <li><a href="#home" style={linkStyle}>Home</a></li>
          <li><a href="#jobs"  style={linkStyle}>Jobs</a></li>
          <li><a href="#education" style={linkStyle}>Education</a></li>
          <li><a href="#world" style={linkStyle}>World</a></li>
          <li><a href="#science" style={linkStyle}>Science</a></li>
          <li><a href="#sports" style={linkStyle}>Sports</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div style={sectionStyle}>
        <h4>Contact</h4>
        <p>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            Email Us
          </a>
        </p>
      </div>

      {/* Social Media Links Section */}
      <div style={sectionStyle}>
        <h4>Follow Us</h4>
        <div style={socialIconsStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socieliconAtagstyle}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socieliconAtagstyle}>Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socieliconAtagstyle}>LinkedIn</a>
        </div>
      </div>
    </div>
    <hr />
    <div style={copyrightStyle}>
      &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
    </div>
  </footer>
  )
};


const linkStyle = {
  textDecoration: 'none', // Removes underline
  color: 'black',          // White color for text (you can change as needed)
   display: 'block',       // Displays each link on a new line
  marginBottom: '8px',    // Adds space between links
};


const footerStyle = {
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '1200px',
  margin: '0 auto',
};

const sectionStyle = {
  flex: '1',
  padding: '0 10px',
};

const linkListStyle = {
  listStyle: 'none',
  padding: 0,
};

const socialIconsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px',
};

const copyrightStyle = {
  textAlign: 'center',      // Aligns text to the center
  display: 'flex',           // Flexbox to enable centering
  justifyContent: 'center',
  marginTop : '10px',
  fontSize: '14px',
};
const socieliconAtagstyle = {
  textDecoration: 'none'
};

export default Footer
