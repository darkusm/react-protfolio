/*
 * @Author: chenYY
 * @Date: 2023-10-24 10:12:58
 * @LastEditors: chenyuanyi chenyuanyi@xuezhiyou.com
 * @LastEditTime: 2023-10-24 16:41:49
 * @FilePath: \react\react-portfolio\src\components\About\About.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// import React from 'react'

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt=""
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I`m frontend developer with experience in
                build and optimized stites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt=""
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I`m frontend developer with experience in
                build and optimized stites I have experience
                developing fast and optimised back-end
                systems and API
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt=""
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I`m frontend developer with experience in
                build and optimized stites I have experience
                developing fast and optimised back-end
                systems and API
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
