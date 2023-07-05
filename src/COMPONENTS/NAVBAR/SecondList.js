import React from "react";
import styles from "./SecondList.module.css";
import { BsCart4, BsPersonCircle } from "react-icons/bs";
const SecondList = () => {
  const [value, setValue] = React.useState('EN');
  return (
    <>
      <ul className={styles.secondlists}>
        <select
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        >
          <option>FRE</option>
          <option>EN</option>
          <option>NL</option>
        </select>
        <li>
          <a href=""> Sign up</a>
        </li>
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
    </>
  );
};

export default SecondList;
