/* eslint-disable react/no-unescaped-entities */
/*
 * @Author: chenYY
 * @Date: 2023-10-23 14:17:35
 * @LastEditors: chenyuanyi chenyuanyi@xuezhiyou.com
 * @LastEditTime: 2023-10-24 09:00:38
 * @FilePath: \react\react-portfolio\src\componets\NavBar\Hero\Hero.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Adan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 4 years of
          experience using React and Goland reach out if
          you'd like to learn more!
        </p>
        <a
          href="chen_yuanyi@foxmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
