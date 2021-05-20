import { useState } from "react";
/**
 * How I want the mode to move
  1. EMPTY -> SHOW -> CREATE  (mode: CREATE)
  2. EMPTY -> SHOW -> CREATE -> SAVING  (mode: SAVING)
  3. EMPTY -> SHOW -> SAVING (replace) (mode: SAVING)
*/

//Custom hook to be used for changing between different components in the App.
export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  //Function that saves the current component and adds the new component into the useState hook
  const transition = (newMode, replace = false) => {
    if(replace) {
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
  }
  
  //Function that goes back to the previous component without affecting the original state.
  const back = () => {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, -1));
    }
  }
  const mode = history[history.length-1]

  return { mode , transition, back };
}
