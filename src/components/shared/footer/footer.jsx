import React from "react";
import { Col, Container, Row, Button} from "react-bootstrap";
import logo from '../../../assets/pearl_logo.png';
import styles from './footer.module.scss';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiEnvelopeOpen } from "react-icons/bi";

export default function Footer() {
    
    return(
        <footer className="bg-black py-5 mt-5 shadow">
            <Container>
                <Row  >
                    <Col className=" mt-3 text-lg-start text-center" xl={3} lg={3} md={12} sm={12} xs={12} >
                        <div>
                            <img src={logo} alt="logo" height={50} className="me-2"/>
                            <span className={styles.logotext}>
                                <span className={styles.highlight}>P</span>earl's
                                <span className={styles.highlight}>P</span>retty
                                <span className={styles.highlight}>P</span>alace
                            </span>
                            <p className="text-secondary ps-1 pt-2">We delivers premium and professional fashion, beauty, and hair services. It also offers project-oriented classes, ensuring clients feel pampered and radiant.</p>
                        </div>
                        <div className={`d-flex gap-3 justify-content-center ${styles.footer_btn}`}>
                            <Button className={`btn btn-dark fw-semibold ${styles.btn}`}> <span>Sign Up</span></Button>
                            <Button className={`btn btn-dark fw-semibold ${styles.btn}`}> <span>Sign In</span></Button>
                        </div>
                    </Col>            
                    <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                        <ul className="ps-lg-5">
                            <li><h5>Explore</h5></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> <a href="#">Home</a></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> <a href="#">About Us</a></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> <a href="#">Contact Us</a></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> <a href="#">Services</a></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> <a href="#">Blog</a></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> <a href="#">Shop</a></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> <a href="#">Course</a></li>
                        </ul>
                    </Col>
                    <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                        <ul>
                            <li><h5>Services</h5></li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> Custom Tailoring</li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> Bridal & Wedding Fashion</li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> Ankara Oufit</li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> Hair Care</li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> Beauty Salon</li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> Cosmetics & Fabrics 4Sales</li>
                            <li className="d-flex align-items-center gap-2"><MdOutlineKeyboardArrowRight size={19} className={styles.arrow}/> Training Classes</li>
                        </ul>
                    </Col>
                    <Col xl={3} lg={3} md={12} sm={12} xs={12}>
                        <ul>
                            <li><h5>Contact</h5></li>
                            <li className={styles.ContactLi}>
                                <div className={`d-flex align-items-center gap-4 ${styles.contactDetails}`}>
                                    <span><IoCallOutline size={25} className="text-black"/></span>
                                    <div className={styles.contact}>
                                        <p>Call Anytime</p>
                                        <h6>+234 8999 2989 908</h6>
                                    </div>
                                </div>
                            </li>
                            <li className={styles.ContactLi}>
                                <div className={`d-flex align-items-center gap-4 ${styles.contactDetails}`}>
                                    <span><BiEnvelopeOpen size={25} className="text-black"/></span>
                                    <div className={styles.contact}>
                                        <p>Send Email</p>
                                        <h6>ppp@gmail.com</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}