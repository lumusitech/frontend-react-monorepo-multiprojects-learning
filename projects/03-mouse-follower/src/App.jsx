import { useEffect, useState } from 'react'
import './App.css'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = e => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })

      const circle = document.querySelector('main > div')
      if (circle) {
        circle.style.transform = `translate(${position.x}px, ${position.y}px)`
      }
    }

    enabled && window.addEventListener('pointermove', handleMove)
    return () => {
      console.log('Desmontando el evento -> cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled, position])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          transform: 'translate(0px, 0px)',
        }}
      />

      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'}</button>
    </>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
