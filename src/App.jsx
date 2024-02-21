import { useState } from 'react'
import Header, { ResponsiveMenu } from './components/Header'
import Home from './components/Home'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
      <>
        <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={menuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
      </>
  )
}

export default App
