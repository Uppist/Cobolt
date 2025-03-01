/** @format */

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import LogoNav from "./LogoNav";
import { Link } from "react-router-dom";

export default function NavBar({
  scrollToSection,
  aboutRef,
  serviceRef,
  contactRef,
  homeRef,
}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function sideBar() {
    setIsSidebarVisible(true);
  }

  function onClose() {
    setIsSidebarVisible(false);
  }

  return (
    <header className={styles.firstsection}>
      <nav className={styles.nav}>
        <Link to='/Cobolt'>
          <LogoNav />
        </Link>

        <ul className={styles.navul}>
          <Link to='/Cobolt'>
            <li
              className={styles.lists}
              onClick={() => scrollToSection(aboutRef)}
            >
              About Us
            </li>
          </Link>

          <Link to='/projects'>
            <li
              className={styles.lists}
              onClick={() => scrollToSection(serviceRef)}
            >
              Projects{" "}
            </li>
          </Link>

          <Link to='/contact'>
            <li
              className={styles.listcontact}
              onClick={() => scrollToSection(contactRef)}
            >
              Contact Us
            </li>
          </Link>

          <li className={styles.listmenu} onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>

        <div
          className={`${styles.sidebar} ${
            isSidebarVisible ? styles.active : styles["fade-out"]
          }`}
        >
          <div className={styles.imageclose}>
            <Link to='/Cobolt'>
              <LogoNav />
            </Link>

            <a className='dropdown-close' onClick={onClose}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
                  stroke='#2B2B2B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>

          <ul className={styles.sidebarmenu}>
            <Link to='/Cobolt'>
              <li
                className={styles.sidebarlist}
                onClick={() => {
                  scrollToSection(aboutRef);
                  onClose();
                }}
              >
                About Us
              </li>
            </Link>
            <hr />
            <Link to='/projects'>
              <li
                className={styles.sidebarlist}
                onClick={() => {
                  scrollToSection(serviceRef);
                  onClose();
                }}
              >
                Projects{" "}
              </li>
            </Link>
            <hr />
            <Link to='/contact'>
              <li
                className={styles.sidebarcontact}
                onClick={() => {
                  scrollToSection(contactRef);
                  onClose();
                }}
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
