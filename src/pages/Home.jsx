import React from 'react'
import Confess from '../components/Confess'
import ConfessionLists from '../components/ConfessionLists'
import userTitle from '../hooks/userTitle'
const Home = () => {
  userTitle("Home | Page")
  return (
    <div>
       <Confess />
       <ConfessionLists />
    </div>
  )
}

export default Home
      