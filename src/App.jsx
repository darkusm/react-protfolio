/*
 * @Author: chenYY
 * @Date: 2023-10-16 16:41:28
 * @LastEditors: chenyuanyi chenyuanyi@xuezhiyou.com
 * @LastEditTime: 2023-10-24 14:41:53
 * @FilePath: \react\react-portfolio\src\App.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { About } from "./components/About/About";
function App() {
  return (
    <>
      <div className={styles.App}>
        <NavBar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
