import React, { useState, useContext, useReducer, useEffect } from "react";
import BackgroundVideo from "../ASSETS/Background.mp4";
import FirstList from "./FirstList";
import SecondList from "./SecondList";
// import Card from "../Card.js/Card";
import classes from "./homePage.module.css";
import Fashion from "../ASSETS/Img5.png";
import { AiOutlineMenu, AiOutlineScissor } from "react-icons/ai";
import { BsCart4, BsPersonCircle } from "react-icons/bs";
import SideMenu from "./SideMenu";

const LandingPage = () => {
  const [isonMobile, setIsonMobile] = useState(true);
  const [menutoggle, setMenutoggle] = useState(true);

  return (
    <>
      <div className={classes.bgcontainer}>
        <video className={classes.video} autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <nav>
          <h3>JULIZ FASHION</h3>
          <div>
            <FirstList />
          </div>
          <div>
            <SecondList />
          </div>
        </nav>
        <p>
          Step into a world of vibrant colors, rich patterns, and cultural
          heritage.
        </p>
      </div>
      <div className={classes.mobilehomepage}>
        <video className={classes.video} autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <nav>
          <h4>JULIZ FASHION</h4>
          <div>
            <span className={classes.menuicon}>
              {isonMobile ? (
                <AiOutlineMenu onClick={() => setIsonMobile(!isonMobile)} />
              ) : (
                <AiOutlineScissor
                  onClick={() => [
                    // setMenutoggle(!menutoggle),
                    setIsonMobile(!isonMobile),
                  ]}
                />
              )}
            </span>
          </div>
          <div>
            <ul className={classes.menuicon}>
              <li>
                <a href="">
                  <BsCart4 />
                </a>
              </li>
              <li>
                <a href="">
                  <BsPersonCircle />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {isonMobile ? "" : <SideMenu menutoggle={menutoggle} />}
        <p>
          vibrant <span>colors,</span> rich <span>patterns,</span> and cultural
          <span>heritage,</span>
        </p>
        {/* <div className={styles.FirstList}>
          <span className={styles.menubar}>
            {isVisible ? (
              <AiOutlineMenu onClick={() => setIsVisible(!isVisible)} />
            ) : (
              <AiOutlineScissor onClick={() => setIsVisible(!isVisible)} />
            )}
          </span>
          <span className={styles.listItems}>
            <FirstList />
          </span>
          <span className={styles.listItemsSidebar}>
            {isVisible ? "" : <SideBar />}
          </span>
        </div> */}
      </div>
      {/* gvjfuyf hjvguyvjbhjgubjb mguj jbng ukjhmnib oyglj hbkgyu oglkjbhgig
      kbujbgyiu kyhbgi uky,lgbjiit gukyhjmgbyvo kluyjhkgbtvo gluybighbotv
      gliyjhyliogb ygulhyojugbot8 gkyjh,kniyuobgvf6i
      tfcfd6r756e64w6dfiiyuhlloijuoinbn v t dreyrxinl.joi[jpm
      mnhgbhbhcgvtguionhuhyuiyty7i] */}
    </>
  );
};

export default LandingPage;
