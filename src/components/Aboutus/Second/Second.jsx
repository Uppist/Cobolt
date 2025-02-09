/** @format */

import React from "react";
// import Image from "./Image";
import styles from "./style.module.css";
import Image from "./Image";

export default function Second() {
  return (
    <section className={styles.second}>
      <h2>
        About <b>Us</b>
      </h2>
      <Image />

      <div className={styles.about}>
        <h2>
          About <b>Us</b>
        </h2>
        <div className={styles.p}>
          <p>
            Cobolt Industries is a dynamic service provider committed to shaping
            the future of key sectors in Nigeria and beyond. With a strong
            foundation in retail, contracting, and security, we are
            strategically expanding into infrastructure, energy, and
            agriculture. By embracing innovation and collaboration, we aim to
            deliver lasting value to our clients while contributing to a more
            prosperous future for our communities.
          </p>
          <p>
            Cobolt partners with businesses and communities to bring innovative
            solutions to life. We bridge the gap between ideas and action,
            driving progress and prosperity in a constantly evolving landscape.{" "}
          </p>

          <div className={styles.span}>
            <span>Our commitment to excellence is underpinned by:</span>
            <div>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_3_214)'>
                  <path
                    d='M8.50002 1.41663C4.59002 1.41663 1.41669 4.58996 1.41669 8.49996C1.41669 12.41 4.59002 15.5833 8.50002 15.5833C12.41 15.5833 15.5834 12.41 15.5834 8.49996C15.5834 4.58996 12.41 1.41663 8.50002 1.41663ZM7.08335 12.0416L3.54169 8.49996L4.54044 7.50121L7.08335 10.037L12.4596 4.66079L13.4584 5.66663L7.08335 12.0416Z'
                    fill='#519314'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3_214'>
                    <rect width='17' height='17' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <span>
                <b>A team of experienced professionals</b>: We leverage the
                expertise of our skilled workforce, ensuring the highest quality
                of service delivery across all our operations.
              </span>
            </div>
            <div>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_3_214)'>
                  <path
                    d='M8.50002 1.41663C4.59002 1.41663 1.41669 4.58996 1.41669 8.49996C1.41669 12.41 4.59002 15.5833 8.50002 15.5833C12.41 15.5833 15.5834 12.41 15.5834 8.49996C15.5834 4.58996 12.41 1.41663 8.50002 1.41663ZM7.08335 12.0416L3.54169 8.49996L4.54044 7.50121L7.08335 10.037L12.4596 4.66079L13.4584 5.66663L7.08335 12.0416Z'
                    fill='#519314'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3_214'>
                    <rect width='17' height='17' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <span>
                 <b>Strategic partnerships</b>: We collaborate with leading
                industry partners, providing access to cutting-edge
                technologies, best practices, and a wider network of resources.
              </span>
            </div>

            <div>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_3_214)'>
                  <path
                    d='M8.50002 1.41663C4.59002 1.41663 1.41669 4.58996 1.41669 8.49996C1.41669 12.41 4.59002 15.5833 8.50002 15.5833C12.41 15.5833 15.5834 12.41 15.5834 8.49996C15.5834 4.58996 12.41 1.41663 8.50002 1.41663ZM7.08335 12.0416L3.54169 8.49996L4.54044 7.50121L7.08335 10.037L12.4596 4.66079L13.4584 5.66663L7.08335 12.0416Z'
                    fill='#519314'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3_214'>
                    <rect width='17' height='17' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <span>
                <b>A focus on sustainability</b>: We are dedicated to pursuing
                initiatives that not only drive economic growth but also
                contribute to a sustainable and prosperous future for
                generations to come.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
