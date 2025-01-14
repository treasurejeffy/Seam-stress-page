import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from '../../../assets/pic1.jpeg';
import pic2 from '../../../assets/pic2.jpeg';
import pic3 from '../../../assets/pic3.jpeg';
import pic4 from '../../../assets/pic4.jpeg';
import styles from './home.module.scss';
import { FaQuoteRight } from "react-icons/fa";

export default function CustomersReport() {
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 2,
          slidesToSlide: 1,
          partialVisibilityGutter: 14,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 11,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
      
      const services = [
        { id: 3,  title: "Ngozi O.", image:pic1, description: " Pearl's Pretty Palace delivers an unmatched shopping experience. The exquisite designs and premium quality left me in awe. Their attention to detail and exceptional customer service truly sets them apart." },
        { id: 4,  title: "Precious A.", image:pic2, description: "I’m thrilled with my purchase from Pearl's Pretty Palace. Their impeccable craftsmanship and customer care made this a memorable experience. If you want sophistication and quality, this is the place." },
        { id: 5,  title: "Ogechi V.", image:pic3, description: "Pearl's Pretty Palace combines stunning designs with outstanding service. Every item feels like a masterpiece, and the team goes above and beyond to ensure customer satisfaction. I’ll definitely return for more!" },
        { id: 1,  title: "Delight Agu", image:pic4, description: "Pearl's Pretty Palace has redefined elegance for me. The beautiful designs and top-quality products are worth every penny. Their friendly and professional staff make shopping here an absolute pleasure." },
      ];
      

    return(
        <section className={`my-5 ${styles.CustomersReport}`}>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12} xs={12}>
                        <article className={styles.TestHeading}>
                            <h5>TESTIMONALS</h5>
                            <h2>What Our Customers Say?</h2>
                            <p>"Our customers love us for our elegance, quality, and exceptional service. Hear their glowing testimonials about us!"</p>
                        </article>
                    </Col>
                    <Col lg={8} md={6} sm={12} xs={12}>
                        <div className=" position-relative">
                            <div class="position-absolute top-0 end-0">
                                <FaQuoteRight size={40}/>                        
                            </div>                                             
                            <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={!responsive.desktop} // Conditionally show dots
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-20-px"
                            >
                                {services.map((customer) => (
                                    <div key={customer.id}>
                                        <article className={`py-4 mx-2 my-2 px-4 ${styles.customerTestimonial}`}>
                                            <p>{customer.description}</p>
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <img src={customer.image} alt="person" className={styles.customerImg}/>
                                                </div>
                                                <div className={`mt-4 ${styles.cutomerData}`}>
                                                    <h6>{customer.title}</h6>
                                                    <p>customer</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}