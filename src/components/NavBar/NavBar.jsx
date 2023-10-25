/*
 * @Author: chenYY
 * @Date: 2023-10-18 15:11:27
 * @LastEditors: chenyuanyi chenyuanyi@xuezhiyou.com
 * @LastEditTime: 2023-10-23 15:13:56
 * @FilePath: \react\react-portfolio\src\componets\NavBar\NavBar.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// import React from "react";
import styles from "./Navbar.module.css";
// import { useState } from "react";
import { getImageUrl } from "../../utils";
import { useState } from "react";
export const NavBar = () => {
  //设置navbar开关变量
  let [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          // src={getImageUrl("nav/menuIcon.png")}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* 通过模板字符串和&&判定,给sul额外添加类名 */}
        <sul
          className={`${styles.menuItems} ${
            menuOpen && styles.menuOpen
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <a href="#about">About</a>
          <a href="#exprience">Exprience</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </sul>
      </div>
    </nav>
  );
};
