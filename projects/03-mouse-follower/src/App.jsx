import { useEffect, useState } from 'react'
import './App.css'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // mouse follower
  useEffect(() => {
    console.log('inicia el efecto')

    const handleMove = e => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    enabled && window.addEventListener('pointermove', handleMove)

    return () => {
      console.log('Desmontado -> cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // change style of pointer
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(218, 237, 18, 0.71)',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
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
