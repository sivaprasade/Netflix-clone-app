import React from 'react'
import NavBar from '../component/NavBar/NavBar'
import{action,original, ComedyMovies,HorrorMovies,RomanceMovies} from '../url'
import Cards from'../component/cards/cards'
import Banner from '../component/Banner/Banner'
function Home() {
  return (
    <div>

      <NavBar/>
      <Banner/>
      <Cards url={original} title='Netflix Original' />
      <Cards url={action} title='Action ' isSmall />
      <Cards url={ ComedyMovies} title=' Comedy ' isSmall />
      <Cards url={HorrorMovies } title=' Horror ' isSmall />
      <Cards url={RomanceMovies} title=' Romance ' isSmall />
    </div>
  )
}

export default Home
