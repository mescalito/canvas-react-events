import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import useAspectRatio from "./hooks/useAspectRatio";
import Canvas from "./components/Canvas";
import './App.css';

function App() {
  const aspectRatio = useAspectRatio();
  const canvasStyle = {
    background: 'gray',
    width: aspectRatio,
    aspectRatio: '16 / 9'
  }

  const draw = (ctx, frameCount) => {
    ctx.beginPath();
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  return (
    <>
      <Canvas draw={draw} style={canvasStyle}/>
    </>
  );
}

export default App;
