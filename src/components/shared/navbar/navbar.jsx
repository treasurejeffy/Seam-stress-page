import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../../assets/pearl_logo.png';
import styles from './navbar.module.scss';

export default function NavSection({ theme }) {
  useEffect(() => {
    document.body.className = ''; // Clear previous theme
    document.body.classList.add(theme); // Add the current theme class
  }, [theme]);
  
  return (
    <Navbar collapseOnSelect expand="lg" className={`shadow-sm ${theme === 'black-bg' ? styles.blackBg : ''}`}>
      <Container>
        <Navbar.Brand href="#home" className={styles.bounceDown}>
          <img src={logo} alt="logo" height={50} />
          <span className={styles.logotext}>
            <span className={styles.highlight}>P</span>earl's
            <span className={styles.highlight}>P</span>retty
            <span className={styles.highlight}>P</span>alace
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="shadow-none border-0" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>About Us</Nav.Link>
            <Nav.Link href="#deets" className={styles.navLink}>Contact Us</Nav.Link>
            <Nav.Link href="#features" className={styles.navLink}>Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className={styles.navLink}>Blogs</Nav.Link>
            <Nav.Link href="#deets" className={styles.navLink}>Shop</Nav.Link>
            <Nav.Link href="#deets" className={styles.navLink}>Course</Nav.Link>
          </Nav>
          <Nav className={`ms-auto gap-2 ${styles.navbar_btn}`}>
            <Button className={styles.btn}> <span>Sign Up</span></Button>
            <Button className={styles.btn}> <span>Sign In</span></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
