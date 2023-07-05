import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import { DataOne, DataTwo, SHOP, SectionData } from '../../ASSETS/DATA/Data'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

// import  { } from "../../ASSETS/DATA/Data";
const Section = () => {
  const [slides, setSlides] = useState(SectionData)
  const [isMouseOver, setIsMouseOver] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eigth: false,
    nine: false,
  })
  const [index, setIndex] = useState(0)
  // const []

  const handleMouseOver = () => {
    setIsMouseOver(true)
  }

  const handleMouseOut = () => {
    setIsMouseOver(false)
  }

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 4
      if (index > slides.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = slides.length - 1
      }
      return index
    })
  }
  return (
    <>
      <div className={styles.imageflex}>
        <h3>
          OUR <span> COLLECTIONS</span>
        </h3>
        <button className='prev' onClick={prevSlide}>
          <FiChevronsLeft className={styles.buttonicon} />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronsRight className={styles.buttonicon} />
        </button>
      </div>

      <div className={styles.imageflex}>
        {slides.map((pictures, picturesIndex) => {
          return (
            <div key={picturesIndex}>
              <div className={styles.imagecontainer}>
                <img
                  src={isMouseOver ? pictures.img : pictures.image}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  alt={pictures.alt}
                />
              </div>
              <p>{pictures.alt}</p>
            </div>
          )
        })}
      </div>
       
    </>
  )
}

export default Section
