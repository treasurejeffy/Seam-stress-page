import React, {useEffect, useState} from "react";
import NavSection from "../../shared/navbar/navbar";
import Footer from "../../shared/footer/footer";
import Newsletter from "../home/newsletter";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import styles from './aboutus.module.scss';
import Make from '../../../assets/select.png';
import Expert from '../../../assets/experts.png';
import Enjoy from '../../../assets/enjoy.png';
import  AboutImg from '../../../assets/aboutDes.webp';
import CustomersReport from "../home/customer";

export default function AboutUs() {
    const now=[
        {title: 'Fashion Making', rate: 90},
        {title: 'Fashion Consulting', rate: 80},
        {title: 'Hair Styling', rate: 75},
        {title: 'Beauty Salon', rate: 60},
        {title: 'Training Classes', rate: 85}
    ]

    const [animatedRates, setAnimatedRates] = useState(
        now.map(() => 0) // Initialize all progress rates to 0
    );

    useEffect(() => {
    const timeout = setTimeout(() => {
        setAnimatedRates(now.map((value) => value.rate)); // Gradually update rates to target values
    }, 500); // Delay for smoother animation

    return () => clearTimeout(timeout); // Cleanup on unmount
    }, [now]);

    return(
        <>
            <NavSection/>

            {/* hero section */}
            <section className={styles.hero}>
                <Container>
                    <div className={`d-flex justify-content-center ${styles.hero_content}`}>
                       <div className="w-75 text-center">
                            <h1>About us</h1>
                            <p>Pearl's Pretty Palace offers exquisite custom tailoring, bridal fashion, Ankara outfits, beauty salon services, hair care, cosmetics, fabrics, and professional training classes, blending elegance and style for every occasion.</p>
                       </div>
                    </div>
                </Container>
            </section>

            {/* description section */}
            <section className={`${styles.Description}  my-5 py-5 px-2`}>
                <Container>
                    <Row xl={2} lg={2} md={1} sm={1} xs={1} className="d-flex align-items-center">
                        <Col>
                            <div className={styles.DesImg}>
                                <img src={AboutImg} alt="Tailoring" className="img-fluid"/>                                
                            </div>
                        </Col>
                        <Col>
                            <div className="pt-3">
                                <div className={styles.DesHeader}>
                                    <h6>About Us</h6>
                                    <h2>We Make Difference in Your Fashion, Hair, Beauty or Skill.</h2>
                                    <p>Enhancing your style, hair, beauty, or skills with exceptional fashion, professional training, and personalized expertise.</p>
                                </div>
                                <div className={styles.progressContainer}>
                                    {now.map((value, index) => (
                                        <div key={index} className={styles.progressWrapper}>
                                        <h6>{value.title}</h6>
                                        <div className={styles.progressBarContainer}>
                                            {/* Tooltip */}
                                            <span
                                            className={`${styles.progressTooltip}`}
                                            style={{ left: `${animatedRates[index]}%` }} // Position dynamically with the bar
                                            >
                                            {`${animatedRates[index]}%`}
                                            </span>
                                            {/* Progress Bar */}
                                            <ProgressBar
                                                style={{
                                                    height: '8px',
                                                    borderRadius: '5px',
                                                }}                                                
                                                now={animatedRates[index]}
                                                className={styles.customProgressBar}
                                            />
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            {/* steps to work with us */}
            <section className={` px-2 ${styles.stepsToWork}`}>
                <Container>
                    <article className="text-center mb-4">
                        <h6>3 Easy Steps </h6>
                        <h2>Our Work Process</h2>
                    </article>
                    <Row xl={3} lg={3} md={1} sm={1} xs={1} className="mt-5">
                        <Col>
                            <div className={styles.box}>
                                <b>01</b>
                                <div>
                                    <img src={Make} alt="makeAppointment" className="img-fluid py-3" />
                                    <h5>Make Appointment</h5>
                                    <p>At Pearl's Pretty Palace, scheduling an appointment ensures personalized attention for custom tailoring, beauty services, hair care, and professional training, offering a seamless experience tailored to your unique needs.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles.box}>
                                <b>02</b>
                                <div>
                                    <img src={Expert} alt="expert" className="img-fluid py-3" />
                                    <h5>Meet With Our Experts</h5>
                                    <p>The second step, "Meet With Our Experts," at Pearl's Pretty Palace ensures you receive professional guidance, personalized consultations, and expert recommendations tailored to your fashion, beauty, or training needs.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles.box}>
                                <b>03</b>
                                <div>
                                    <img src={Enjoy} alt="Enjoy" className="img-fluid py-3" />
                                    <h5>Enjoy Your Experience</h5>
                                    <p>Pearl's Pretty Palace ensures you delight in exceptional services, from stunning fashion creations and beauty enhancements to skillful training, all tailored to perfection, elevating your style and confidence.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* our team members */}
            <section className={`my-5 py-5 px-2 ${styles.Tmembers}`}>
                <Container>
                    <article className="text-center">
                        <h6>Team Members</h6>
                        <h2>Meet Some Of Expert Team</h2>
                        <p>Meet our skilled team combines expertise in fashion, beauty, and training for excellence.</p>
                    </article>
                    <Row xl={3} lg={3} md={1} sm={1} xs={1}>
                        <Col className="mb-3">
                            <div className={styles.imgContainer}>
                                <div className={styles.imgOverlay}>
                                    <h5>Pearl S. Japheth</h5>
                                    <p>CEO <br/>Fashion Consultant</p>
                                </div>
                            </div>
                        </Col>

                        <Col className="mb-3">
                            <div className={styles.imgContainers}>
                                <div className={styles.imgOverlays}>
                                    <h5>Emerald Amara</h5>
                                    <p>Hair Stylist</p>
                                </div>
                            </div>                           
                        </Col>
                        <Col>
                            <div className={styles.imgContainered}>
                                <div className={styles.imgOverlayed}>
                                    <h5>James Mike</h5>
                                    <p>Beauty Salon Manager </p>
                                </div>
                            </div>                            
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* customer report */}
            <CustomersReport/>

            {/* newsletter section */}
            <Newsletter/>
            <Footer/>
        </>
    )
}