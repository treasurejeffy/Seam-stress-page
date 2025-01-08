import React from "react";
import { Container, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../../../assets/wedding_day.jpeg";
import Image2 from "../../../assets/beauty_headshot1.jpeg";
import Image3 from "../../../assets/talioring3.jpg";
import Image4 from "../../../assets/washinghair_salon.jpeg";
import Image5 from "../../../assets/training.jpg"
import styles from './home.module.scss'; // Import the SCSS file

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 14,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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
  { id: 1, image: Image1, title: "Service 1", description: "Quick example text for Service 1." },
  { id: 2, image: Image2, title: "Service 2", description: "Quick example text for Service 2." },
  { id: 3, image: Image3, title: "Service 3", description: "Quick example text for Service 3." },
  { id: 4, image: Image4, title: "Service 4", description: "Quick example text for Service 4." },
  { id: 5, image: Image5, title: "Service 5", description: "Quick example text for Service 5." },
];

export default function OurServices() {
  return (
    <div className="vh-75 py-5">
      <Container>
        <article className={`text-center ${styles.carouselHeader}`} >
          <h5>Our Services</h5>
          <h2>Services We're Offering</h2>
        </article>
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
          {services.map((service) => (
            <Card
              key={service.id}            
              className={`shadow-sm border-0 ${styles.service_card}`}
            >
              <Card.Img variant="top" src={service.image} alt={service.title} className={styles.cardImg} />
              <Card.Body className={styles.service_card_body}>
                <Card.Title className="fw-bold fs-3">{service.title}</Card.Title>
                <Card.Text className="fs-6">{service.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
