/** @format */

import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Image from "./Image";
import Image2 from "./Image2";

export default function Fourth() {
  const [isMobile, setIsMobile] = useState(false);

  // Listen to window resize events to update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initialize on load
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener
    };
  }, []);
  return (
    <section className={styles.fourth}>
      <div className={styles.contact}>
        <h2>
          Partner with <label>Cobolt</label> to
          <br /> Innovate, Grow and Succeed.
        </h2>
        <span>Contact Us</span>
      </div>
      <div className={styles.images}>{isMobile ? <Image2 /> : <Image />} </div>
    </section>
  );
}
