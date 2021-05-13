import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    let tempHistory = history;
    if (replace) {
      tempHistory.pop();
      tempHistory.push(newMode);
      setHistory(prev => tempHistory);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
    return setMode(prev => newMode);
  }
  
  const back = () => {
    if (mode !== initial) {
      let tempHistory = history;
      tempHistory.pop();
      setHistory(prev => tempHistory);
      return setMode(prev => history[tempHistory.length - 1]);
    }
  }
  return { mode, transition, back };
}
