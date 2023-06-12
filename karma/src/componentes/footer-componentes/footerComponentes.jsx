import './footerComponentes.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        
      </div>
      <p>Derechos de autor © 2023 Tu Sitio Web</p>
    </footer>
  );
}