/** @format */
import React from "react";
import styles from "./style.module.css";
import Image from "./Image";
import { Link } from "react-router-dom";

export default function FirstSection() {
  return (
    <section className={styles.section}>
      <div className={styles.project}>
        <div className={styles.text}>
          <h2>
            Driving <b>Innovation,</b>
            <br />
            Empowering <b>Growth</b>
          </h2>

          <p>
            We are building our capabilities in retail, contracting and security
            services, while shaping the future of our involvement in
            infrastructure, energy and agriculture, through strategic
            partnerships, investing in foundational knowledge and understanding
            how technology plays a pivotal role. All of which will help create
            job opportunities, enhance economic growth and contribute to
            thriving communities within Nigeria and beyond.
          </p>
        </div>
        <Link to='/projects'>
          <div className={styles.svg}>
            <span>View Projects</span>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.33334 16H26.6667M17.3333 6.66669L26.6667 16L17.3333 25.3334'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* <img src={image} alt='' /> */}
      <Image />
    </section>
  );
}
