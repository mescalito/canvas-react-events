import {useRef, useEffect, useMemo} from 'react'

const useCanvas = draw => {

  const canvasRef = useRef(null)
  const cat = useMemo(() => new Image(), []);
  const dog = useMemo(() => new Image(), []);

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId

    const render = () => {
      draw(context, cat, dog)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

export default useCanvas