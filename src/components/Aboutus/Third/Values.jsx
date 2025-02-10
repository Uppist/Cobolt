/** @format */

import React from "react";
import styles from "./style.module.css";
import Image from "./Image";

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.third}>
        <h2>Values</h2>
        <div className={styles.values}>
          <div className={styles.value}>
            <h2>Values</h2>

            <p>
              Our <span>Mission</span> is to champion a thriving future by
              accelerating sustainable products, services and practices with
              measurable impact.
            </p>
            <p>
              The <span>Vision</span> is to become a leading catalyst for
              positive change by empowering ventures and communities that unlock
              shared value for all stakeholders.
            </p>

            <div className={styles.lists}>
              <span>
                Our <b>Core Values</b> are centred around:
              </span>
              <ul>
                <li>
                  Daunting challenges loom before our dream of driving social
                  change. Yet, it is{" "}
                  <b>
                    <span>Courage</span>
                  </b>
                   {""} that fuels our relentless pursuit of progress. Daring
                  ideas are our currency, bold action our language. Beyond
                  convention, we tap the entrepreneurial spirit, forever fueled
                  by Courage to rewrite the narrative of tomorrow.
                </li>
              </ul>
            </div>
          </div>
          <Image />
        </div>
      </div>
      <div className={styles.lists}>
        <ul>
          <li>
            Every step we take is guided by the compass of{" "}
            <b>
              {" "}
              <span>Integrity</span>
            </b>
            . Fairness, accountability, and grounded principles illuminate our
            path, ensuring every action builds towards a future we can be proud
            of.
          </li>
          <li>
             At the heart of our pursuit of positive change lies a fierce
            <b>
              <span> Responsibility</span>
            </b>
            . We own the impact of our endeavours, weaving accountability into
            every strand, leaving a legacy of progress for generations to come.
          </li>
          <li>
            We chase{" "}
            <b>
              <span>Excellence</span>
            </b>
              {""} in all we do, crafting enduring legacies through meticulous
            processes and unwavering support for our stakeholders.
          </li>
        </ul>
      </div>
    </section>
  );
}
