import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Styles from './home.module.scss'
import { IoMdCheckmarkCircle } from "react-icons/io";
import Image from '../../../assets/talioring3.jpg'

export default function Intro() {
    
    return(
        <main className={`${Styles.intro} my-5`}>
            <Container>
                <Row lg={2} md={2} sm={1} className="d-flex align-items-center">
                    <Col>                    
                        <img src={Image} alt="tailor" className={Styles.Image}/>
                    </Col>
                    <Col >
                        <article className={Styles.IntroText}>
                        <h6>OUR INTRODUCTION</h6>
                        <h3>THE BEST SOLUTION FOR BEAUTY/HAIR SALON AND TAILORING FASHIONATIC/MODERATE WEARS.</h3>
                        <p className="text-secondary">
                            Discover the ultimate solution for beauty salons, hair styling, and tailoring fashion. Perfect for creating stunning, fashionable, and moderate wears with unmatched professionalism!
                        </p>
                        <ul>
                            <li>
                            <span>
                                <IoMdCheckmarkCircle size={22} />
                            </span>
                            Tailored solutions for style and fashion.
                            </li>
                            <li>
                            <span>
                                <IoMdCheckmarkCircle size={22} />
                            </span>
                            Innovative tools for salons and tailors.
                            </li>
                            <li>
                            <span>
                                <IoMdCheckmarkCircle size={22} />
                            </span>
                            Enhance creativity and service efficiency.
                            </li>
                            <li>
                            <span>
                                <IoMdCheckmarkCircle size={22} />
                            </span>
                            Elegant, functional systems for professionals.
                            </li>
                            <li>
                            <span>
                                <IoMdCheckmarkCircle size={22} />
                            </span>
                            Streamlined solutions for beauty professionals.
                            </li>
                            <li>
                            <span>
                                <IoMdCheckmarkCircle size={22} />
                            </span>
                            Empower youth by learning our courses.
                            </li>
                        </ul>
                        </article>
                    </Col>                
                </Row>
            
            </Container>
        </main>
    )
}