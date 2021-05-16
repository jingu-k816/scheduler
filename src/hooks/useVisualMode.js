import { useState } from "react";
/**
 * How I want the mode to move
  1. EMPTY -> SHOW -> CREATE  (mode: CREATE)
  2. EMPTY -> SHOW -> CREATE -> SAVING  (mode: SAVING)
  3. EMPTY -> SHOW -> SAVING (replace) (mode: SAVING)
*/

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if(replace) {
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
  }
  
  const back = () => {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, -1));
    }
  }
  const mode = history[history.length-1]

  return { mode , transition, back };
}
