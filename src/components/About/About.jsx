import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.aboutText}>
        <p>I am currently actively seeking opportunities as a Junior Fullstack Developer. My experience focuses on development using technologies such as Angular, Firebase, React, .NET, Node.js, Javascript, CSS, HTML, Python and SQL.<br></br>
          During my 1 and a half year experience as a fullstack developer at Midware, I have had the opportunity to work on exciting and challenging projects that have allowed me to develop strong skills in web development, both front-end and back-end. Worked with entire teams using agile methodologies. I am passionate about creating innovative solutions and quickly learning new technologies.</p></div>
      <div className={styles.content}>
        
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing API's conections and some college experience with Databases 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well for some freelancer projects
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
