import { useEffect } from 'react'
import confetti from 'canvas-confetti'

export default function Confetti() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 140,
      origin: { y: 0.75 },
    })
  }, [])

  return <></>
}
