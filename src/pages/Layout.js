import React from "react";

import * as style from "./index.module.css";
function Layout() {
  return (
    <div className={style.parent}>
      <div className={style.box}>
        <div className={style.nav}>
          <div className={style.name}>Tech-blog</div>
          <div className={style.navmenu}>
            <button className={style.menu}>about</button>
            <button className={style.menu2}>post</button>
          </div>
        </div>
        <div className={style.so}>soyeon</div>
      </div>
      
    </div>
  );
}
export default Layout;
