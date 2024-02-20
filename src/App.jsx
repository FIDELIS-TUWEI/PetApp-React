import { useState } from 'react'
import Header, { ResponsiveMenu } from './components/Header'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
      <>
        <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={menuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </>
  )
}

export default App
