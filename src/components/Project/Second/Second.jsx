/** @format */

import React from "react";
import styles from "./style.module.css";
export default function Second() {
  return (
    <section className={styles.second}>
      <div className={styles.about}>
        <span>Sentry</span>

        <div className={styles.p}>
          <p>
            Sentry is the dedicated services arm of Cobolt, focused on the
            provision of security solutions designed to protect people, assets,
            and information. We are dedicated to delivering peace of mind
            through our commitment to exceptional customer service, cutting-edge
            technology, and highly trained professionals.
          </p>

          <div className={styles.span}>
            <span>
              <b>Sentry’s operational outlook</b>
            </span>
            <div>
              <div className={styles.svg}>
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
                  <b> Background Verification </b>{" "}
                </span>
              </div>
              <p>
                Our meticulous background checks provide the insights you need
                to make confident decisions about potential hires, partnerships,
                or tenants.
              </p>{" "}
            </div>

            <div>
              <div className={styles.svg}>
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
                  <b> Security Personnel</b>{" "}
                </span>
              </div>
              <p>
                {" "}
                We have access to a team of expertly trained and experienced
                security personnel who are equipped to handle diverse security
                needs, from access control and patrolling to emergency response
                and intervention.
              </p>
            </div>

            <span>
              View our service profile here -
              <label> COBIN (Sentry) Profile.</label>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <span></span>
      </div>
    </section>
  );
}
