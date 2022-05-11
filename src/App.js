import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import useAspectRatio from "./hooks/useAspectRatio";
import Canvas from "./components/Canvas";
// import Image from "./components/Image";
import './App.css';

function App() {
  const aspectRatio = useAspectRatio();
  const canvasStyle = {
    background: 'gray',
    width: aspectRatio,
    aspectRatio: '16 / 6'
  }

  const draw = (ctx, cat, dog) => {
    console.log("hola1")
    ctx.beginPath();
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "red";
    ctx.fill();

    cat.src = 'https://raw.githubusercontent.com/stream-labs/canvas-frontend-project/main/assets/cat.png';
    cat.onload = function(){
      ctx.drawImage(cat, 10, 10);
    }

    dog.src = 'https://raw.githubusercontent.com/stream-labs/canvas-frontend-project/main/assets/dog.png';
    dog.onload = function(){
      ctx.drawImage(dog, 100, 10);
    }
  }
  return (
    <>
      <Canvas draw={draw} style={canvasStyle}/>
    </>
  );
}

export default App;
