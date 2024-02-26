import { useState } from 'react'
import Header, { ResponsiveMenu } from './components/Header'
import Home from './components/Home'
import Category from './components/Category'
import Banner from './components/Banner'
import PetList from './components/PetList'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
      <>
        <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={menuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Category />
        <Banner />
        <PetList />
      </>
  )
}

export default App
