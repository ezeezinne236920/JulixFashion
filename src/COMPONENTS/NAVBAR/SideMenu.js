import React, { useState, useContext, useRef } from "react";
import styles from "./SideMenu.module.css";
import { DataOne, DataTwo, SHOP } from "../ASSETS/DATA/Data";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const SideMenu = ({ menutoggle }) => {
  const [firstData, setFirstData] = useState(DataOne);
  const [secondData, setSecondData] = useState(DataTwo);
  const [Shop, setshop] = useState(SHOP);
  const [toggle, setToggle] = useState(menutoggle);
  const [languageToggle, setLanguageToggle] = useState(false);

  return (
    <div className={styles.sidemenudiv}>
      <ul>
        <div className={styles.showdiv}>
          <li>Shop</li>
          <span
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? (
              <BiChevronDown className={styles.toggleicon} />
            ) : (
              <BiChevronUp className={styles.toggleicon} />
            )}
          </span>
        </div>

        {!toggle && (
          <div>
            {Shop.map((clotheshop) => {
              return <h6 key={clotheshop.id}>{clotheshop.title}</h6>;
            })}
          </div>
        )}

        {firstData.map((lists) => {
          return (
            <li key={lists.id}>
              <a href="">{lists.title}</a>
            </li>
          );
        })}
        <div>
          <div className={styles.showdiv}>
            <li>Language</li>
            <span
              onClick={() => {
                setLanguageToggle(!languageToggle);
              }}
            >
              {languageToggle ? (
                <BiChevronDown className={styles.toggleicon} />
              ) : (
                <BiChevronUp className={styles.toggleicon} />
              )}
            </span>{" "}
          </div>
          {languageToggle && (
            <select>
              <option>EN</option>
              <option>FRE</option>
              <option>español</option>
            </select>
          )}
        </div>
        {secondData.map((lists) => {
          return (
            <li key={lists.id}>
              <a href="">{lists.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
