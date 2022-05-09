import {useEffect, useState} from "react";
import useDebounce from "./useDebounce";

const useAspectRatio = () => {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    if (parseInt((window.innerWidth / 16) * 9) > parseInt(window.innerHeight)) {
      setRatio(parseInt((window.innerHeight / 9) * 16))
    } else {
      setRatio(parseInt(window.innerWidth))
    }

    const handleResize = () => {
      if(parseInt((window.innerWidth / 16) * 9) < parseInt(window.innerHeight)) {
        setRatio(parseInt(window.innerWidth))
      }
      if(parseInt(window.innerHeight) < parseInt((window.innerWidth / 16) * 9)) {
        setRatio(parseInt(window.innerHeight))
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ratio]);

  return useDebounce(ratio, 25)
}

export default useAspectRatio