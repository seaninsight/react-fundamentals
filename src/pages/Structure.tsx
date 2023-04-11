import { useState, useEffect } from 'react'
import SlideContent from '../components/templates/SlideContent'

function Slides(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'ArrowRight') {
      if (SlideContent.length === currentSlide + 1) {
        return
      }
      setCurrentSlide(slide => slide + 1)
    }
    if (event.code === 'ArrowLeft') {
      if (currentSlide === 0) {
        return
      }
      setCurrentSlide(currentSlide => currentSlide - 1)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [currentSlide])

  return SlideContent[currentSlide]
}

export default function Structure(): JSX.Element {
  return (
    <div className="Structure">
      <Slides />
    </div>
  )
}
