import React from "react";
import { Container,Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import styles from './home.module.scss';

export default function Newsletter() {
    return(
        <div className="py-5 px-2">
            <Container  className={styles.Newsletter}>
                <Row lg={2} md={1} sm={1} xs={1} className="d-flex align-items-center py-5">
                    <Col>
                        <article>
                            <h2>
                                Join Our NewsLetter
                            </h2>
                            <p className="pe-4">Stay informed with our latest updates, exclusive offers, and news. Join our newsletter today and never miss a thing!</p>
                        </article>
                    </Col>
                    <Col>
                        <div>
                            <InputGroup className={`mb-3 ${styles.customInputGroup}`} size="lg">
                                <Form.Control
                                    placeholder="Enter Your Email Address"                                  
                                    aria-describedby="basic-addon2"
                                    type="email"
                                    className={`rounded-0 ${styles.form_control} shadow-none`}
                                />
                                <Button variant="dark" id="button-addon2" className={`rounded-0 ${styles.btn}`}>
                                    Subscribe
                                </Button>
                            </InputGroup>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}