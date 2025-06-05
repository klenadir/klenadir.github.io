import React, { useState, useEffect } from 'react';

// Main App component
export default function App() {
  // State for managing dark mode
  const [darkMode, setDarkMode] = useState(false);
  // State for managing active section
  const [activeSection, setActiveSection] = useState('about');

  // Effect to apply dark mode class to body (basic dark mode toggle)
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#eee';
    } else {
      document.body.style.backgroundColor = '#f4f4f4';
      document.body.style.color = '#333';
    }
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Content for each section
  const sections = {
    about: (
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '10px', fontWeight: 'bold' }}>Tentang</h2>
        <p style={{ fontSize: '1.1em' }}>
          Saya Klenadir, tertarik dengan pengembangan web untuk membangun
          situs web yang bersih dan fungsional. Saat ini sedang mempelajari teknologi front-end seperti
          HTML, CSS, JavaScript, dan React. Saya senang memecahkan masalah dan
          terus berupaya meningkatkan keterampilan saya
          melalui praktik langsung dan proyek pribadi.
        </p>
      </div>
    ),
    projects: (
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '10px', fontWeight: 'bold' }}>Proyek</h2>
        <p style={{ fontSize: '1.1em' }}>
          Di sini Anda akan menemukan daftar proyek-proyek saya. Saya akan terus memperbarui bagian ini seiring dengan proyek baru yang saya kerjakan.
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginTop: '15px' }}>
          <li style={{ marginBottom: '8px' }}>
            <span style={{ fontWeight: 'bold' }}>Proyek 1:</span> Website portofolio pribadi responsif menggunakan HTML, CSS, dan JavaScript.
          </li>
        </ul>
      </div>
    ),
    faq: (
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '10px', fontWeight: 'bold' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <h3 style={{ fontSize: '1.3em', fontWeight: 'semibold' }}>Q: Apa saja teknologi yang Anda kuasai?</h3>
            <p style={{ fontSize: '1.1em' }}>
              A: Saya masih belajar dengan HTML, CSS, JavaScript, dan React.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.3em', fontWeight: 'semibold' }}>Q: Bagaimana cara menghubungi Anda?</h3>
            <p style={{ fontSize: '1.1em' }}>
              A: Anda bisa menghubungi saya melalui email atau media sosial yang tertera.
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    // Main container for the application
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      {/* Container for the main layout */}
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1200px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden', backgroundColor: 'white' }}>
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          style={{ position: 'absolute', top: '15px', right: '15px', padding: '8px', borderRadius: '50%', border: '1px solid #ccc', cursor: 'pointer', background: darkMode ? '#555' : '#eee', color: darkMode ? '#eee' : '#333' }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '24px', width: '24px' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 5.924l-.707.707M6.364 6.364l-.707-.707m12.728 0l-.707-.707M6.364 17.636l-.707.707M6 12a6 6 0 1112 0A6 6 0 016 12z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '24px', width: '24px' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9 9 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        {/* Left sidebar navigation */}
        <div style={{ width: '100%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #eee', backgroundColor: darkMode ? '#555' : '#eee' }}>
          <div>
            <h1 style={{ fontSize: '2.5em', marginBottom: '5px', fontWeight: 'bold' }}>Klenadir</h1>
            <h2 style={{ fontSize: '1.5em', marginBottom: '25px', fontWeight: 'normal' }}>Website Developer</h2>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {['about', 'projects', 'faq'].map((section) => (
                <button
                  key={section}
                  style={{
                    fontSize: '1.2em',
                    fontWeight: 'normal',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    paddingBottom: '5px',
                    textDecoration: activeSection === section ? 'underline' : 'none',
                    color: 'inherit'
                  }}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
          {/* Social media icons */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px', width: '100%', justifyContent: 'flex-start' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: '28px', color: 'inherit' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-1.148 3.252-1.691 4.771-4.919 4.919-.058.058-1.265.069-4.849.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85 1.148-3.252 1.691-4.771 4.919-4.919.058-.058 1.265-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.21-6.78 2.618-6.99 6.989-.059 1.28-.073 1.688-.073 4.947 0 3.259.014 3.667.072 4.947.21 4.358 2.618 6.78 6.989 6.99.28.059.688.073 4.947.073 3.259 0 3.667-.014 4.947-.072 4.358-.21 6.78-2.618 6.989-6.99.059-1.28.073-1.688.073-4.947 0-3.259-.014-3.667-.072-4.947-.21-4.358-2.618-6.78-6.989-6.99-1.28-.059-1.688-.073-4.947-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 2.163a4 4 0 110 8 4 4 0 010-8zm6.406-5.432a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: '28px', color: 'inherit' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.817-.258.817-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.542-1.373-1.322-1.745-1.322-1.745-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.77.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.3-.54-.64-.108-1.507 0 0 1.007-.322 3.3 1.23.956-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.432.867.016 1.207-.108 1.507.77.841 1.235 1.911 1.235 3.221 0 4.61-2.801 5.625-5.476 5.922.429.369.812 1.101.812 2.219 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.792 24 17.29 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: '28px', color: 'inherit' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.235 0-3.327.226-4.526 2.459-4.301 5.918.225 3.459 1.491 5.692 4.301 5.918 3.604.246 11.631.245 15.235 0 3.327-.226 4.526-2.459 4.301-5.918-.225-3.459-1.491-5.692-4.301-5.918zm-9.351 8.784v-4.402l4.301 2.201-4.301 2.201z"/>
              </svg>
            </a>
            <a href="mailto:email@example.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: '28px', color: 'inherit' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 0l-9.518 7.094-9.518-7.094h19.036zm-19.518 15.424v-11.424l9.518 7.094 9.518-7.094v11.424h-19.036z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right content display area */}
        <div style={{ width: '100%', padding: '30px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', borderLeft: '1px solid #eee', backgroundColor: darkMode ? '#444' : '#fff' }}>
          <div style={{ textAlign: 'left', width: '100%' }}>
            {sections[activeSection]}
          </div>
        </div>
      </div>
    </div>
  );
}
