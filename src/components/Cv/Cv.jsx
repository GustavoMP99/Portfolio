import React from "react";

import styles from "./Cv.module.css";
import { getImageUrl } from "../../utils";
import cv from '/assets/cv/Mendez_Gustavo_CV.pdf'


export const Cv = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Do you want to know more?</h1>
        <p className={styles.description}>
          Here is my CV and if you have any doubs about me, don't worry and contact me!
        </p>
        <a href={cv} download="Mendez_Gustavo_CV" target='_blank' className={styles.contactBtn}>
          Donwload CV
        </a>
      </div>
    </section>
  );
};
