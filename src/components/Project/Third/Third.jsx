/** @format */

import React from "react";
// import Image from "./Image";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Third() {
  return (
    <section className={styles.section}>
      <div className={styles.second}>
        <div className={styles.image}>
          <span></span>
        </div>

        <div className={styles.about}>
          <span>Cosyn</span>

          <div className={styles.p}>
            <p>
              Cosyn, the dedicated contracting services arm of Cobolt
              Industries, understands the unique demands of managing internal
              operations in achieving service success. From ensuring seamless
              daily operations to maintaining a polished and professional image,
              we offer a comprehensive suite of services designed to empower
              your people and elevate your customer experience.
            </p>
            <p>
              By partnering with Cobolt Industries, you gain more than just
              reliable service providers, you gain dedicated partners committed
              to your success. We are confident that our comprehensive
              solutions, coupled with our unwavering focus on collaboration and
              continuous improvement, will empower your organisation to reach
              new heights of operational excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.span}>
        <span>Cosyn’s operational outlook</span>
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
              <b>Procurement</b>
            </span>
          </div>
          <p>
            {" "}
            Our network offers a one-stop shop for all your stationery, office
            supplies, and administrative product needs – from paperclips to
            printers. Eliminate time-consuming internal procurement processes
            and streamline your purchasing with a single reliable partner. Enjoy
            convenient on-demand deliveries that ensure your team always has the
            tools they need, minimising disruptions and keeping productivity
            high. We offer competitive pricing and bulk purchase options to fit
            your budget – reducing procurement costs and optimising your bottom
            line. Align your environmental goals with ours. We prioritise
            eco-friendly products and responsible sourcing, ensuring a greener
            supply chain.
          </p>
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
              <b>Facility Maintenance</b>{" "}
            </span>
          </div>
          <p>
            Our maintenance services cover all your building systems, including
            mechanical, electrical, plumbing, and fire safety equipment. With
            our proactive approach, we aim to extend the lifespan of your
            equipment, minimise the risk of expensive breakdowns, and ensure
            uninterrupted operations. Feel free to contact us in case of any
            urgent maintenance needs.
          </p>
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
              <b>Cleaning & Hygiene Solutions</b>
            </span>
          </div>
          <p>
            Office Cleaning: We offer comprehensive daily, weekly, or bi-weekly
            cleaning services, ensuring your office space remains spotless and
            professional. Our services include Dusting; Vacuuming, and mopping
            floors; Cleaning and disinfecting restrooms and kitchens; Wiping
            down desks, chairs, and other surfaces; Emptying trash cans and
            recycling bins; High dusting and window cleaning (upon request).
          </p>
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
              <b> Design and Printing Solutions</b>
            </span>
          </div>
          <p>
            We can support all your design and printing needs, as we offer a
            comprehensive range of services to help you create impactful
            marketing materials that capture attention and leave a lasting
            impression.
          </p>
        </div>

        <span>
          View our service profile here -<label> COBIN (Cosyn) Profile.</label>
        </span>
      </div>
    </section>
  );
}
