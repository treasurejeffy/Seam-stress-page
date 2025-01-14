import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TypeAnimation } from 'react-type-animation';
import styles from './home.module.scss'; 
import seamstress1 from '../../../assets/talioring3.jpg';
import seamstress from '../../../assets/measuring.jpg';
import hairdryer from '../../../assets/dryhair_salon.jpeg';
import washHair from '../../../assets/washinghair_salon.jpeg';
import weddingDeco from '../../../assets/wedding_day.jpeg';
import beauty from '../../../assets/beauty_headshot1.jpeg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {FaRegThumbsUp } from "react-icons/fa"; // Import palette icon from react-icons
import { FaDollarSign, FaHeadset } from 'react-icons/fa6';

const Banner = () => {
  const slides = [
    { image: seamstress1, text: 'Crafting Elegance with Every Stitch, Creating Timeless Designs that Speak Style.' },
    { image: seamstress, text: 'Tailoring Fashion to Perfection, Every Detail Reflects Quality and Sophistication.' },
    { image: beauty, text: 'Beauty That Inspires Confidence, Enhancing Natural Features with Professional Care and Expertise.' },
    { image: hairdryer, text: 'Perfecting Hair Care with Precision, Delivering Styles that Elevate Confidence.' },
    { image: washHair, text: 'Nourishing Hair with Premium Care, Ensuring Health and Beauty in Every Strand.' },
    { image: weddingDeco, text: 'Making Wedding Dreams Come True with Stunning Decorations and Designs.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPulse(false); // Start pulsing out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to the next slide
        setPulse(true); // Start pulsing in after changing the image and text
      }, 1000); // Match the timeout to the CSS transition duration for a smooth pulse effect
    }, 7000); // Change image every 5 seconds (1 second for pulse out + 4 seconds display time)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <section>
      <Container className={`d-flex align-items-center px-2 ${styles.banner_container}`} >
        <Row className="w-100 align-items-center ">
          <Col lg={6} md={12} className={`${pulse ? styles.bounceIn : ''}`}>
            <div className={styles.banner}>
              <h1 className={`mb-2 ${styles.heading}`}>We Offer You:</h1>
              <TypeAnimation
                key={currentIndex}
                sequence={[slides[currentIndex].text, 4000]}
                wrapper="h1"
                speed={40}
                repeat={0}
              />
              <Button className={`rounded-0  mt-3 ${styles.btn}`}><span>Discover More!</span></Button>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            className={`d-flex mt-3  justify-content-md-center justify-content-lg-end  justify-content-xl-end ${pulse ? styles.bounceRight : ''}`}
          >
            <div
              className={`${styles.img_div} ${styles.sliderImage} mx-2`}
              style={{
                backgroundImage: `url(${slides[currentIndex].image})`, // Dynamically set background image
              }}
            >
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={`px-3 ${styles.threeBox}`}>
        <Row xxl={3} xl={3} lg={3} md={1} sm={1} xs={1} >
          <Col className={`${styles.quality_product} bg-dark`}>
              <div className='d-flex gap-4'>
                <div className='d-flex align-self-center'><FaRegThumbsUp size={55} className={styles.hand_thumb}/></div>
                <div class="content-container">
                  <h3>Quality Product</h3>
                  <p>From craftsmanship to durability, each item is designed to meet the highest standards, ensuring you receive a product that not only looks good and feels great.</p>
                </div>
              </div>
          </Col>
          <Col className={`${styles.price}`}>
              <div className='d-flex gap-4'>
                <div className='d-flex align-self-center'><FaDollarSign size={55} className={styles.hand_thumb}/></div>
                <div class="content-container">
                  <h3>Competitive Price</h3>
                  <p>Our pricing is designed to offer great value without compromising on quality. Enjoy top-notch products at rates that fit your budget.</p>
                </div>
              </div>
          </Col>
          <Col className={`${styles.quality_product} bg-dark`}>
              <div className='d-flex gap-4'>
                <div className='d-flex align-self-center'><FaHeadset size={55} className={styles.hand_thumb}/></div>
                <div className="content-container">
                  <h3>24/7 Support</h3>
                  <p>We're here for you around the clock. Our dedicated team is available 24/7 to assist with any inquiries or support needs, ensuring you never face challenges alone.</p>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
