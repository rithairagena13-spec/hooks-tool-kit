
import { useEffect, useState } from 'react'

export function useKeyPress(targetKey) {
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === targetKey) {
        setIsPressed(true)
      }
    }

    function handleKeyUp(event) {
      if (event.key === targetKey) {
        setIsPressed(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [targetKey])

  return isPressed
}
