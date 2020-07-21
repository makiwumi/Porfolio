import React, { Component } from 'react'
import {Link, animateScroll as scroll } from "react-scroll";


class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render() {
        return(
            <nav className="nav" id="navbar">
                <div className="nav-content">
          
                    <ul className="nav-items">
                        <li className="nav-item">
                            {/* to is for the section id (used to switch pages) */}
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Portfolio
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                        </li>
                        <li className="nav-item">
                        {/* <Link
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Section 5
                        </Link> */}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
