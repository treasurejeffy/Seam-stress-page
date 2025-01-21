import React from "react";
import NavSection from "../../shared/navbar/navbar";
import Footer from "../../shared/footer/footer";
import Newsletter from "../home/newsletter";
import { Container, Row, Col, Form,Button} from "react-bootstrap";
import styles from './contact.module.scss';
import { FiPhoneCall } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { FaLocationDot} from "react-icons/fa6";


export default function ContactUs() {
   
    return(
        <>
            <NavSection/>

            {/* hero section */}
            <section className={styles.hero}>
                <Container>
                    <div className={`d-flex justify-content-center ${styles.hero_content}`}>
                       <div className="w-75 text-center">
                       <h1>Contact us</h1>
                       <p>We'd love to hear from you! Whether you have questions about our services, need assistance with an order, or want to schedule a consultation, our team at Pearl's Pretty Palace is here to help. Reach out to us today and let us know how we can assist you.</p>
                       </div>
                    </div>
                </Container>
            </section>

            {/* description section */}
            <section className={`${styles.Description}  my-5 px-2 py-5`}>
                <Container>
                    <Row xl={3} lg={3} md={1} sm={1} xs={1} className="d-flex align-items-center">
                        <Col>
                            <div className={`shadow d-flex align-items-center px-4 py-4 gap-3 ${styles.box}`}>
                                <div className={styles.icon}><FiPhoneCall size={40}/> </div>
                                <div className={styles.call}>
                                    <h4>Call Us</h4>
                                    <p>+234 810 669 7767</p>
                                    <p>+234 901 906 5284</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div  className={`shadow d-flex align-items-center px-4 py-4 gap-3 ${styles.box}`}>
                                <div className={styles.icon}><LuMailOpen size={40}/> </div>
                                <div className={styles.call}>
                                    <h4>Drop Mail</h4>
                                    <p>info.ppp@gmail.com</p>
                                    <p>treasurejeffy@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div  className={`shadow d-flex align-items-center px-4 py-4 gap-3 ${styles.box}`}>
                                <div className={styles.icon}><FaLocationDot size={40}/> </div>
                                <div className={styles.call}>
                                    <h4>Location</h4>
                                    <p>No 21 Anywhere,</p>
                                    <p>Aba-onitsha, Nigeria</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*contact us section */}
            <section className="pb-4 px-2">
                <Container>
                    <article className={styles.WriteToContact}>
                        <h5>Contact Us</h5>
                        <h2>Feel Free To Write</h2>
                    </article>
                    <Form>
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="mb-4">
                                    <Form.Control type="text" placeholder="Full Name"  className={`shadow-none rounded-0 ${styles.inputs}`}/>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="mb-4">
                                    <Form.Control type="email" placeholder="Email Address" className={`shadow-none rounded-0 ${styles.inputs}`} />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="mb-4">
                                    <Form.Control type="tel" placeholder="Phone Number" className={`shadow-none rounded-0 ${styles.inputs}`} />
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="mb-4">
                                    <Form.Control type="text" className={`shadow-none rounded-0 ${styles.inputs}`} placeholder="Subject" />
                                </div>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="mb-4">
                                    <Form.Control as="textarea" rows={5} placeholder="Your Message" className={`shadow-none rounded-0 ${styles.inputs}`} />
                                </div>
                            </Col>
                        </Row>
                        <div  className="text-end mb-5">
                            <Button className={`rounded-0  mt-3 btn-dark ${styles.btn}`}><span>Send a Message!</span></Button>
                        </div>
                    </Form>
                </Container>
            </section>

            {/* my map section */}
            <section>
                <div className="map-container" style={{ marginTop: '50px' }}>
                    <iframe
                    title="Aba Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.993203030155!2d7.343017314757866!3d5.106548996318529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105b8b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAba%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1634567890123!5m2!1sen!2sng"
                    width="100%"
                    height="650"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    ></iframe>
                </div>
            </section>
            
            {/* newsletter section */}
            <Newsletter/>
            <Footer/>
        </>
    )
}