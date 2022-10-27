import React from 'react'
import Container from './components/Container'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Advertisement from './components/Advertisement'
import SubContents from './components/SubContents'
import styles from './components/Style.module.css'

function App() {

  return (
    <div className='App'>
      <Container>
        <Header />   
        <div className={styles.bottom}>       
        <Navigation />
        
        <Main>
          <div className={styles.subs}>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <Advertisement /> 
        </Main>
        </div> 
        </Container>
    </div>
  )
}

export default App
