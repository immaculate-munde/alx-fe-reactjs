import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    gap: '15px',
    backgroundColor: '#0a2a4d',
    color: 'white',
    padding: '15px',
    justifyContent: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
