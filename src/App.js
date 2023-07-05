import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import LandingPage from './COMPONENTS/NAVBAR/landingPage'
import Section from './COMPONENTS/UI &STORE/SECTIONS/Section'

function App() {
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const loadingInterval = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(loadingInterval)
    }
  }, [])

  return (
    <>
      {Loading ? (
        <div className={styles.loadingClass}>
          <h1>
            F A S H I O N<span>...</span>
          </h1>
        </div>
      ) : (
        <>
          <div className={styles.loading}>
            <LandingPage />
            <Section />
          </div>
        </>
      )}
    </>
  )
}

export default App
