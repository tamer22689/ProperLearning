import React from 'react'



import Logo from '../../../components/Logo';
import UserInfo from '../../../components/UserInfo';
// import Search from '../../../components/Search'
import styles from './Header.module.css'

export const Header = () => {

   
  return (
    <div className={styles.header} >
   
       <Logo/>

       <UserInfo />

  </div>
  )
}


