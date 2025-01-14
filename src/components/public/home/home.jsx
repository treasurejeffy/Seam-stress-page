import React, { useState } from "react";
import Banner from './banner';
import NavSection from '../../shared/navbar/navbar';
import { Dropdown } from "react-bootstrap";
import { FaPalette } from "react-icons/fa"; // Import palette icon from react-icons
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './theme.module.scss'; // Import custom theme styles
import Intro from "./intro";
import OurServices from "./ourservices";
import CustomersReport from "./customer";
import Newsletter from "./newsletter";
import Footer from "../../shared/footer/footer";

export default function Home() {
    
    const [theme, setTheme] = useState('default-bg');

    const handleThemeChange = (theme) => {
        setTheme(theme);
        document.body.className = theme; // Apply theme to the body
    };

    return (
        <section>
            <NavSection theme={theme} />
            <Banner />
            <Intro/>
            <OurServices/>
            <CustomersReport/>
            <Newsletter/>
            <Footer/>
            <div className='position-relative'>
                <Dropdown className={`bg-dark ${styles.fixed_button}`}>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className={styles.icon_button}>
                        <FaPalette size={24} /> {/* Use palette icon */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-dark">
                        <Dropdown.Item onClick={() => handleThemeChange('black-bg')} className={styles.theme} >Black</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleThemeChange('gold-bg')} className={styles.theme} >Gold</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleThemeChange('white-bg')} className={styles.theme} >White</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </section>
    );
}
