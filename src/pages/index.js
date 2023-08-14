import * as React from "react";

import Nav from "./nav";
import Typewriter from "typewriter-effect";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { TbSchool } from "react-icons/tb";
import * as style from "./index.module.css";
import navi from "../component/navi";
import Post from "./post";
import { Layout } from "./Layout";
import { AiTwotoneMail } from "react-icons/ai";
import TypingEffect from "../component/typingeffect";
export default function Home() {
  const texts = ["hello"];
  return (
    <div>
      <div className={style.parent}>
        <div className={style.box}>
          <div className={style.nav}>
            <div className={style.name}>Tech-blog</div>
            <div className={style.navmenu}></div>
          </div>
          <div className={style.center1}>
            <div className={style.so}>soyeon</div>
          </div>
          <div className={style.intro}>
            {" "}
            <Typewriter
              options={{
                strings: ["Hi, I'm Frontend Developer :)"],
                autoStart: true,
                loop: true,
              }}
            />
            <br></br>
          </div>
          <div className={style.intro}>
            {" "}
            <div className={style.text}>
              더 나은 개발자가 되기 위해 고민합니다.
              <br></br> 사용자가 더욱 편리하게 이용할 수 있는 웹페이지를 만들고
              싶습니다.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={style.center1}>
        <div className={style.title}>About</div>
      </div>
      <div className={style.center}>
        <div className={style.about}>
          <div className={style.inform2}>
            <div className={style.design}>
              <div className={style.left}>
                {" "}
                <div className={style.personalInfo}>
                  <br />
                  <div className={style.personal}>
                    Frontend Developer <br></br>
                    name: 박소연<br></br>
                    Mail: soyeon1056@naver.com <br />
                    Notion: soyeon-p <br />
                    Github: p-so-yeon
                  </div>
                </div>
              </div>
              <div className={style.right}>
                <div className={style.skillSection}>
                  <div className={style.skill}>Skill</div>
                  <div className={style.myskill}> Javascript</div>
                  <div className={style.myskill}> React</div>
                  <div className={style.myskill}> HTML</div>
                  <div className={style.myskill}> Css</div>
                </div>
              </div>
            </div>
            <br></br>
          </div>

          <div></div>
          <br></br>
        </div>
      </div>{" "}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className={style.line}></div>
      <div className={style.second}>
        <div className={style.center1}>
          <div className={style.title}>Project</div>
        </div>
        <div className={style.pofol}></div>
        <div className={style.explain}>
          {" "}
          <div className={style.center3}>
            <div className={style.prname} id="dowajo">
              {" "}
              <div className={style.tit}>상담플랫폼</div>{" "}
              <div className={style.stack}>
                <div className={style.minicon}>React</div>
                <div className={style.minicon}>HTML</div>
                <div className={style.minicon}>CSS</div>
                <div className={style.minicon}>JS</div>
              </div>
              <div className={style.prname2}>
                {" "}
                <div className={style.ex}>
                  {" "}
                  <br></br>
                  <div>
                    {" "}
                    <div className={style.short}>
                      {" "}
                      비대면 상담을 위한 예약 및 화상채팅 서비스 제공 플랫폼
                    </div>
                    <br></br>
                  </div>
                  <li> 회원가입,로그인 </li>
                  <li> Axios 를 이용하여 백엔드와 데이터 주고 받기</li>
                  <li>
                    {" "}
                    백엔드로 부터 데이터 받아와 상담사 목록 렌더링 및 카테고리
                    필터링
                  </li>
                  <li>
                    토큰을 이용하여 이용자 정보 렌더링 및 다른 페이지로 정보
                    넘겨주기
                  </li>
                  <li>
                    {" "}
                    DATEPICKER 모듈을 이용하여 백엔드로 예약 날짜 및 시간
                    보내주기
                  </li>
                  <br></br>
                </div>{" "}
              </div>{" "}
            </div>
          </div>{" "}
          <div className={style.center3}>
            <div className={style.prname} id="joong">
              {" "}
              <div className={style.tit}>중고거래 플랫폼</div>{" "}
              <div className={style.stack}>
                <div className={style.minicon}>React</div>
                <div className={style.minicon}>HTML</div>
                <div className={style.minicon}>CSS</div>
                <div className={style.minicon}>JS</div>
              </div>
              <div className={style.prname2}>
                {" "}
                <div className={style.ex}>
                  {" "}
                  <br></br>
                  <div>
                    {" "}
                    <div className={style.short}>
                      {" "}
                      비대면 상담을 위한 예약 및 화상채팅 서비스 제공 플랫폼
                    </div>
                    <br></br>
                  </div>
                  <li> 회원가입,이메일 찾기 </li>
                  <li> 백엔드로 부터 API 받아와 물품목록 렌더링, 검색 기능</li>
                  <br></br>
                </div>{" "}
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
        <br></br> <br></br>
      </div>
    </div>
  );
}
