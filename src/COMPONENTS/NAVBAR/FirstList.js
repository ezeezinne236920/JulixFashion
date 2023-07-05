import React from 'react'
import firstList from './FirstList.module.css'
const FirstList = () => {
  return (
    <>
      <ul className={firstList.lists}>
        <li>
          <a href='#'>SHOP</a>
        </li>
        <li>
          <a href='#'>ABOUT</a>
        </li>
        <li>
          <a href='#'>GALLERY</a>
        </li>
      </ul>
    </>
  )
}

export default FirstList
