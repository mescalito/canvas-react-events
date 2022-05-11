import React, {useCallback, useEffect, useRef} from 'react';
import useCanvas from "../hooks/useCanvas";

function Image() {
  const draw = useCallback(
    () => {
      ((ctx, frameCount) => {
        const img = new Image();
        img.src = 'https://konvajs.org/assets/lion.png';
        img.addEventListener(
          'load',
          () => ctx.drawImage(img, 10, 10, 150, 180),
          false
        );
      })()
    },
    [],
  );

  const canvasRef = useCanvas(draw)

  useEffect(() => {
    draw();
  }, []);

  return (
    <></>
  );
}

export default Image;