function Footer() {
  const footerStyle = {
    backgroundColor: '#0a2a4d',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} APA Insurance Limited. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
